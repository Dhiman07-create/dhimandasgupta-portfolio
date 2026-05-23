import { useEffect, useState } from "react";
import { Github } from "lucide-react";
import {
  LineChart,
  Line,
  ResponsiveContainer
} from "recharts";

// const API_URL =
//   import.meta.env.MODE === "development"
//     ? "http://localhost:5000"
//     : "https://dhimandasgupta-portfolio.vercel.app";

const API_URL = "https://dhimandasgupta-portfolio.vercel.app";
const sparkData = [
  { value: 3 },
  { value: 5 },
  { value: 4 },
  { value: 7 },
  { value: 6 },
  { value: 9 },
  { value: 8 },
];

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
            ${
              isHero
                ? "grid grid-cols-1 gap-3"
                : "space-y-4 text-sm"
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
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={`
                  absolute inline-flex h-full w-full rounded-full
                  animate-ping opacity-75
                  ${
                    isCiPassing
                      ? "bg-green-400"
                      : "bg-red-400"
                  }
                `}
              />

              <span
                className={`
                  relative inline-flex rounded-full h-2.5 w-2.5
                  ${
                    isCiPassing
                      ? "bg-green-500"
                      : "bg-red-500"
                  }
                `}
              />
            </span>
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
          flex items-center justify-between
          text-slate-500 dark:text-slate-400

          ${
            isHero
              ? "mt-4 pt-3 text-[11px]"
              : "mt-6 pt-4 text-xs border-t border-slate-200 dark:border-slate-700"
          }
        `}
      >
        <div className="flex items-center gap-2">
          <div className="relative">
            <Github size={isHero ? 12 : 14} />

            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
          </div>

          <span>
            Live engineering metrics · auto-updated
          </span>
        </div>
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
