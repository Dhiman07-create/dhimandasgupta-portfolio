import { useEffect, useState } from "react";
import { Github } from "lucide-react";

const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : "https://dhimandasgupta-portfolio.vercel.app";

function AnimatedNumber({ value, suffix = "" }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (value == null) return;

    let start = 0;
    const duration = 800;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(counter);
      } else {
        setDisplay(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

function EngineeringMetrics() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/engineering-metrics`)
      .then(res => res.json())
      .then(setData)
      .catch(err => {
        console.error("Metrics fetch failed:", err);
      });
  }, []);

  const isCiPassing = ["success", "passing", "passed"].includes(
    data?.last_ci_status?.toLowerCase()
  );

  if (!data) {
    return (
      <div
        className="
          group relative rounded-2xl p-6
          bg-white/60 dark:bg-slate-900/60
          backdrop-blur-xl
          border border-slate-200 dark:border-slate-700
          shadow-sm
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
          dark:hover:shadow-[0_20px_40px_rgba(15,23,42,0.6)]
        "
      >
        Loading metrics…
      </div>
    );
  }

  return (
    <div
      className="
        group relative rounded-2xl p-6
        bg-white/60 dark:bg-slate-900/60
        backdrop-blur-xl
        border border-slate-200 dark:border-slate-700
        shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
        dark:hover:shadow-[0_20px_40px_rgba(15,23,42,0.6)]
      "
    >
      {/* Header */}
      <div className="mb-6">
        <p className="text-xs uppercase tracking-widest text-blue-500 font-semibold">
          Live Engineering Telemetry
        </p>
        <div className="mt-2 h-px bg-gradient-to-r from-blue-500/40 to-transparent" />
      </div>

      {/* Metrics */}
      <div className="space-y-4 text-sm">
        <Metric label="Commits (30 days)">
          <AnimatedNumber value={data.commits_30d} />
        </Metric>

        <Metric label="Active Repositories">
          <AnimatedNumber value={data.active_repos} />
        </Metric>

        <Metric label="Top Language">
          {data.top_language}
        </Metric>

        <Metric label="Last CI Status">
          <span className="flex items-center gap-2 font-medium">
            <span
              className={`h-2 w-2 rounded-full ${
                isCiPassing ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span className={isCiPassing ? "text-green-500" : "text-red-500"}>
              {data.last_ci_status}
            </span>
          </span>
        </Metric>

        <Metric label="Avg CI Duration">
          <AnimatedNumber value={data.avg_ci_duration_sec} suffix="s" />
        </Metric>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <Github size={14} />
        <span>Live from GitHub</span>
      </div>
    </div>
  );
}

function Metric({ label, children }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-slate-600 dark:text-slate-400">{label}</span>
      <span className="font-semibold text-slate-900 dark:text-white">
        {children}
      </span>
    </div>
  );
}

export default EngineeringMetrics;
