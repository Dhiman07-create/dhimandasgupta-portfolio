import os
import requests
import psycopg2
from datetime import datetime, timedelta
from dotenv import load_dotenv

load_dotenv()

# -------------------- CONFIG --------------------
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
GITHUB_USERNAME = os.getenv("GITHUB_USERNAME")

DB_CONFIG = {
    "host": os.getenv("DB_HOST"),
    "port": os.getenv("DB_PORT"),
    "dbname": os.getenv("DB_NAME"),
    "user": os.getenv("DB_USER"),
    "password": os.getenv("DB_PASSWORD"),
}

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


# -------------------- METRIC CALCULATION --------------------

def calculate_metrics():
    repos = get_repositories()

    total_commits = 0
    active_repos = 0
    language_usage = {}

    for repo in repos:
        repo_name = repo["name"]

        commits = get_commits_last_30_days(repo_name)
        if commits > 0:
            active_repos += 1
            total_commits += commits

        languages = get_languages(repo_name)
        for lang, bytes_count in languages.items():
            language_usage[lang] = language_usage.get(lang, 0) + bytes_count

    top_language = max(language_usage, key=language_usage.get) if language_usage else "N/A"

    return {
        "snapshot_date": TODAY,
        "commits_30d": total_commits,
        "active_repos": active_repos,
        "top_language": top_language,
        "last_ci_status": "Passing",  # placeholder (we'll enhance later)
        "avg_ci_duration_sec": 0,      # placeholder
        "last_ci_run": datetime.utcnow()
    }


# -------------------- LOAD TO POSTGRES --------------------

def upsert_metrics(metrics):
    conn = psycopg2.connect(**DB_CONFIG)
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
