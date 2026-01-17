import os
import requests
import psycopg2
from datetime import datetime, timedelta
from dotenv import load_dotenv

load_dotenv()

# -------------------- LANGUAGE WEIGHTING --------------------

IGNORED_LANGUAGES = {"HTML", "CSS", "Markdown"}
PREFERRED_LANGUAGES = {"Java", "JavaScript", "Python"}

# -------------------- CI FILTERING --------------------

CI_WORKFLOW_NAME = "CI"          # 👈 your real CI workflow
EXCLUDED_WORKFLOWS = {"ETL"}     # 👈 ignore self-triggered workflows

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

def get_ci_runs(repo_name, per_page=50):
    url = f"https://api.github.com/repos/{GITHUB_USERNAME}/{repo_name}/actions/runs"
    params = {"per_page": per_page}
    res = requests.get(url, headers=HEADERS, params=params)

    if res.status_code == 404:
        return []

    res.raise_for_status()
    runs = res.json().get("workflow_runs", [])

    filtered = []

    for run in runs:
        if run.get("status") != "completed":
            continue

        workflow_name = run.get("name")

        if workflow_name in EXCLUDED_WORKFLOWS:
            continue

        if workflow_name != CI_WORKFLOW_NAME:
            continue

        filtered.append(run)

    return filtered

# -------------------- CI METRICS --------------------

def calculate_avg_ci_duration(repo_name):
    runs = get_ci_runs(repo_name)
    durations = []

    for run in runs:
        created_at = run.get("created_at")
        updated_at = run.get("updated_at")

        if not created_at or not updated_at:
            continue

        try:
            created = datetime.fromisoformat(created_at.replace("Z", "+00:00"))
            updated = datetime.fromisoformat(updated_at.replace("Z", "+00:00"))
        except ValueError:
            continue

        duration_sec = (updated - created).total_seconds()

        # realistic CI window: 30s → 2h
        if 30 < duration_sec < 7200:
            durations.append(duration_sec)

    if not durations:
        return 0

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
        for lang, bytes_count in get_languages(repo_name).items():
            language_usage[lang] = language_usage.get(lang, 0) + bytes_count

        # ---- Avg CI duration ----
        avg_repo_ci = calculate_avg_ci_duration(repo_name)
        if avg_repo_ci > 0:
            ci_durations.append(avg_repo_ci)

        # ---- Last CI status ----
        runs = get_ci_runs(repo_name, per_page=1)
        if runs:
            run = runs[0]
            created_at = run.get("created_at")

            if created_at:
                run_time = datetime.fromisoformat(created_at.replace("Z", "+00:00"))
                if not last_ci_run_time or run_time > last_ci_run_time:
                    last_ci_run_time = run_time
                    last_ci_status = run.get("conclusion", "unknown").capitalize()

    # -------------------- TOP LANGUAGE --------------------

    filtered_languages = {
        lang: bytes
        for lang, bytes in language_usage.items()
        if lang not in IGNORED_LANGUAGES
    }

    preferred = {
        lang: bytes
        for lang, bytes in filtered_languages.items()
        if lang in PREFERRED_LANGUAGES
    }

    if preferred:
        top_language = max(preferred, key=preferred.get)
    elif filtered_languages:
        top_language = max(filtered_languages, key=filtered_languages.get)
    else:
        top_language = "N/A"

    avg_ci_duration_sec = int(sum(ci_durations) / len(ci_durations)) if ci_durations else 0

    return {
        "snapshot_date": TODAY,
        "commits_30d": total_commits,
        "active_repos": active_repos,
        "top_language": top_language,
        "last_ci_status": last_ci_status,
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
