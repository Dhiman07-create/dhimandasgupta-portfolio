import os
import requests
import psycopg2
from datetime import datetime, timedelta
from dotenv import load_dotenv

load_dotenv()

# -------------------- LANGUAGE WEIGHTING --------------------

IGNORED_LANGUAGES = {
    "HTML",
    "CSS",
    "Markdown"
}

PREFERRED_LANGUAGES = {
    "Java",
    "JavaScript",
    "Python"
}

# -------------------- CONFIG --------------------

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
GITHUB_USERNAME = os.getenv("GITHUB_USERNAME")

HEADERS = {
    "Authorization": f"token {GITHUB_TOKEN}",
    "Accept": "application/vnd.github+json"
}

TODAY = datetime.utcnow().date()
SINCE_30_DAYS = (datetime.utcnow() - timedelta(days=30)).isoformat() + "Z"

# -------------------- GITHUB API --------------------

def get_repositories():
    url = f"https://api.github.com/users/{GITHUB_USERNAME}/repos?per_page=100"
    res = requests.get(url, headers=HEADERS)
    res.raise_for_status()
    return res.json()


def get_commits_last_30_days(repo_name):
    url = f"https://api.github.com/repos/{GITHUB_USERNAME}/{repo_name}/commits"
    params = {"since": SINCE_30_DAYS}
    res = requests.get(url, headers=HEADERS, params=params)
    res.raise_for_status()
    return len(res.json())


def get_languages(repo_name):
    url = f"https://api.github.com/repos/{GITHUB_USERNAME}/{repo_name}/languages"
    res = requests.get(url, headers=HEADERS)
    res.raise_for_status()
    return res.json()


def get_ci_runs(repo_name, per_page=20):
    url = f"https://api.github.com/repos/{GITHUB_USERNAME}/{repo_name}/actions/runs"
    params = {"per_page": per_page}
    res = requests.get(url, headers=HEADERS, params=params)

    # Repo may not have Actions enabled
    if res.status_code == 404:
        return []

    res.raise_for_status()
    return res.json().get("workflow_runs", [])

# -------------------- CI METRICS --------------------

def calculate_avg_ci_duration(repo_name):
    runs = get_ci_runs(repo_name, per_page=50)
    durations = []

    for run in runs:
        if run.get("status") != "completed":
            continue

        created_at = run.get("created_at")
        updated_at = run.get("updated_at")  # ✅ more reliable than completed_at

        if not created_at or not updated_at:
            continue

        try:
            created = datetime.fromisoformat(created_at.replace("Z", "+00:00"))
            updated = datetime.fromisoformat(updated_at.replace("Z", "+00:00"))
        except ValueError:
            continue

        duration_sec = (updated - created).total_seconds()

        if 30 < duration_sec < 7200:  # ignore junk (<30s or >2h)
            durations.append(duration_sec)

    if not durations:
        return 0  # 👈 IMPORTANT: return 0, not None
        
    return sum(durations) / len(durations)

# -------------------- METRIC CALCULATION --------------------

def calculate_metrics():
    repos = get_repositories()

    total_commits = 0
    active_repos = 0
    language_usage = {}

    ci_durations = []
    last_ci_run_time = None
    last_ci_status = "Unknown"

    for repo in repos:
        repo_name = repo["name"]

        # ---- Commits ----
        commits = get_commits_last_30_days(repo_name)
        if commits > 0:
            active_repos += 1
            total_commits += commits

        # ---- Languages ----
        languages = get_languages(repo_name)
        for lang, bytes_count in languages.items():
            language_usage[lang] = language_usage.get(lang, 0) + bytes_count

        # ---- CI ----
        avg_repo_ci = calculate_avg_ci_duration(repo_name)
        if avg_repo_ci > 0:
            ci_durations.append(avg_repo_ci)


        runs = get_ci_runs(repo_name, per_page=50)

        if runs:
            run = runs[0]

            created_at = run.get("created_at")
            conclusion = run.get("conclusion")

            if created_at:
                run_time = datetime.fromisoformat(created_at.replace("Z", "+00:00"))

                if not last_ci_run_time or run_time > last_ci_run_time:
                    last_ci_run_time = run_time
                    last_ci_status = conclusion.capitalize() if conclusion else "Unknown"


    # -------------------- TOP LANGUAGE --------------------

    filtered_languages = {
        lang: bytes_count
        for lang, bytes_count in language_usage.items()
        if lang not in IGNORED_LANGUAGES
    }

    preferred_langs = {
        lang: bytes_count
        for lang, bytes_count in filtered_languages.items()
        if lang in PREFERRED_LANGUAGES
    }

    if preferred_langs:
        top_language = max(preferred_langs, key=preferred_langs.get)
    elif filtered_languages:
        top_language = max(filtered_languages, key=filtered_languages.get)
    else:
        top_language = "N/A"

    avg_ci_duration_sec = (
        int(sum(ci_durations) / len(ci_durations))
        if ci_durations else 0
    )

    return {
        "snapshot_date": TODAY,
        "commits_30d": total_commits,
        "active_repos": active_repos,
        "top_language": top_language,
        "last_ci_status": last_ci_status.capitalize(),
        "avg_ci_duration_sec": avg_ci_duration_sec,
        "last_ci_run": last_ci_run_time or datetime.utcnow()
    }

# -------------------- LOAD TO POSTGRES --------------------

def upsert_metrics(metrics):
    conn = psycopg2.connect(
        host=os.getenv("SUPABASE_DB_HOST"),
        database=os.getenv("SUPABASE_DB_NAME"),
        user=os.getenv("SUPABASE_DB_USER"),
        password=os.getenv("SUPABASE_DB_PASSWORD"),
        port=os.getenv("SUPABASE_DB_PORT")
    )

    cursor = conn.cursor()

    query = """
        INSERT INTO engineering_metrics (
            snapshot_date,
            commits_30d,
            active_repos,
            top_language,
            last_ci_status,
            avg_ci_duration_sec,
            last_ci_run
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        ON CONFLICT (snapshot_date)
        DO UPDATE SET
            commits_30d = EXCLUDED.commits_30d,
            active_repos = EXCLUDED.active_repos,
            top_language = EXCLUDED.top_language,
            last_ci_status = EXCLUDED.last_ci_status,
            avg_ci_duration_sec = EXCLUDED.avg_ci_duration_sec,
            last_ci_run = EXCLUDED.last_ci_run;
    """

    cursor.execute(query, (
        metrics["snapshot_date"],
        metrics["commits_30d"],
        metrics["active_repos"],
        metrics["top_language"],
        metrics["last_ci_status"],
        metrics["avg_ci_duration_sec"],
        metrics["last_ci_run"]
    ))

    conn.commit()
    cursor.close()
    conn.close()

# -------------------- MAIN --------------------

if __name__ == "__main__":
    print("🚀 Running Engineering Metrics ETL...")
    metrics = calculate_metrics()
    upsert_metrics(metrics)
    print("✅ Metrics loaded successfully!")
