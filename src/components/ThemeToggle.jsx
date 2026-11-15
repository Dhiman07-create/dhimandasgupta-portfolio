import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

import useDarkMode from "../hooks/useDarkMode";

function ThemeToggle({ className = "", iconSize = 20 }) {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle Theme"
      className={`
        relative
        rounded-2xl
        border border-zinc-200 dark:border-zinc-800
        bg-white/70 dark:bg-zinc-900/70
        backdrop-blur-xl
        shadow-lg
        flex items-center justify-center
        hover:scale-105
        hover:shadow-blue-500/20
        transition-all duration-300
        ${className}
      `}
    >
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? (
          <Sun className="text-yellow-400" size={iconSize} />
        ) : (
          <Moon className="text-zinc-700" size={iconSize} />
        )}
      </motion.div>
    </button>
  );
}

export default ThemeToggle;
