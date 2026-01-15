import { useState, useEffect } from "react";

function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    const dark = document.documentElement.classList.contains("dark");
    setIsDark(dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  return (
    <nav className="flex items-center justify-between px-10 py-4 blue-500sticky top-0 z-50
  flex items-center justify-between
  px-10 py-4
  bg-white/70 dark:bg-slate-900/70
  backdrop-blur-md
  border-b border-slate-200 dark:border-slate-700
  transition-all duration-300 dark:bg-slate-900 text-gray-100 border-b border-slate-700 sticky top-0 z-50">
      <span className="text-lg font-semibold">Dhiman Dasgupta</span>

      <div className="flex items-center space-x-6 text-sm">
        <a href="#about" className="hover:text-blue-400 transition">About</a>
        <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
        <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
        <a href="#contact" className="hover:text-blue-400 transition">Contact</a>

        {/* 🌙☀️ Animated Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="relative w-10 h-10 flex items-center justify-center rounded-full
                     bg-black/20 dark:bg-white/10
                     transition-all duration-300
                     hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]"
          aria-label="Toggle Dark Mode"
        >
          <span
            className={`absolute text-lg transition-all duration-300 transform
              ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"}
            `}
          >
            ☀️
          </span>

          <span
            className={`absolute text-lg transition-all duration-300 transform
              ${isDark ? "opacity-0 -rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}
            `}
          >
            🌙
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
