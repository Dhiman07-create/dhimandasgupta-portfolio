import { useEffect, useState } from "react";
import { Github } from "lucide-react";

// const API_URL =
//   import.meta.env.MODE === "development"
//     ? "http://localhost:5000"
//     : "https://dhimandasgupta-portfolio.vercel.app";

const API_URL = "https://dhimandasgupta-portfolio.vercel.app";

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

function EngineeringMetrics({ variant = "default" }) {
  const [data, setData] = useState(null);
  const isHero = variant === "hero";
  const isCompact = variant === "compact";

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
        className={`
          rounded-3xl
          border
          border-slate-200 dark:border-slate-700
          bg-white/70 dark:bg-slate-900/70
          backdrop-blur-xl
          transition-all duration-300

          ${
            isHero
              ? "p-5 shadow-none bg-transparent border-none"
              : isCompact
              ? "p-5 shadow-lg"
              : "p-7 shadow-xl"
          }
        `}
      >
        Loading metrics…
      </div>
    );
  }

  return (
    <div
      className={`
        rounded-3xl
        border
        border-slate-200 dark:border-slate-700
        bg-white/70 dark:bg-slate-900/70
        backdrop-blur-xl
        transition-all duration-300

        ${
          isHero
            ? "p-5 shadow-none bg-transparent border-none"
            : isCompact
            ? "p-5 shadow-lg"
            : "p-7 shadow-xl"
        }
      `}
    >
      {/* Header */}
      <div className={isHero ? "mb-4" : "mb-6"}>
        <p
          className={`
            uppercase tracking-widest text-blue-500 font-semibold

            ${
              isHero
                ? "text-[10px]"
                : "text-xs"
            }
          `}
        >
          Live Engineering Telemetry
        </p>

        <div
          className={`
            mt-2 h-px
            bg-gradient-to-r
            from-blue-500/40
            to-transparent

            ${isHero ? "opacity-70" : ""}
          `}
        />
      </div>

      {/* Metrics */}
      <div
        className={`
          text-sm

          ${
            isHero
              ? "space-y-3"
              : "space-y-4"
          }
        `}
      >
        <Metric label="Commits (30 days)" isHero={isHero}>
          <AnimatedNumber value={data.commits_30d} />
        </Metric>

        <Metric label="Active Repositories" isHero={isHero}>
          <AnimatedNumber value={data.active_repos} />
        </Metric>

        <Metric label="Top Language" isHero={isHero}>
          {data.top_language}
        </Metric>

        <Metric label="Last CI Status" isHero={isHero}>
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

        <Metric label="Avg CI Duration" isHero={isHero}>
          <AnimatedNumber value={data.avg_ci_duration_sec} suffix="s" />
        </Metric>
      </div>

      {/* Footer */}
      <div
        className={`
          flex items-center gap-2
          text-slate-500 dark:text-slate-400

          ${
            isHero
              ? "mt-4 pt-3 text-[11px]"
              : "mt-6 pt-4 text-xs border-t border-slate-200 dark:border-slate-700"
          }
        `}
      >
        <Github size={isHero ? 12 : 14} />

        <span>
          Live engineering metrics · auto-updated
        </span>
      </div>
    </div>
  );
}

function Metric({ label, children, isHero = false }) {
  return (
    <div
      className={`
        flex justify-between items-center
        rounded-2xl
        border border-slate-200 dark:border-slate-700
        bg-white/70 dark:bg-slate-800/60
        backdrop-blur-xl
        transition-all duration-300

        hover:scale-[1.02]
        hover:shadow-lg

        ${
          isHero
            ? "px-3 py-2"
            : "px-4 py-3"
        }
      `}
    >
      <span
        className={`
          text-slate-600 dark:text-slate-400

          ${
            isHero
              ? "text-xs"
              : "text-sm"
          }
        `}
      >
        {label}
      </span>

      <span
        className={`
          font-semibold text-slate-900 dark:text-white

          ${
            isHero
              ? "text-sm"
              : "text-base"
          }
        `}
      >
        {children}
      </span>
    </div>
  );
}

export default EngineeringMetrics;
