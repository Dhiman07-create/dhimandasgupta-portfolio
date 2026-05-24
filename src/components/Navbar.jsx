import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Moon,
  Sun,
  Menu,
  X,
  Code2,
} from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");

    const dark = document.documentElement.classList.contains("dark");

    setIsDark(dark);

    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300

        ${
          scrolled
            ? `
              bg-white/75 dark:bg-slate-950/75
              backdrop-blur-2xl
              border-b border-slate-200 dark:border-slate-800
              shadow-[0_8px_30px_rgba(0,0,0,0.04)]
            `
            : `
              bg-transparent
            `
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-20 flex items-center justify-between">

          {/* LEFT LOGO */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3"
          >
            <div
              className="
                relative
                flex items-center justify-center
                w-11 h-11 rounded-2xl
                bg-gradient-to-br from-blue-500 to-indigo-600
                shadow-lg shadow-blue-500/20
              "
            >
              <Code2 size={22} className="text-white" />

              {/* pulse */}
              <span
                className="
                  absolute inset-0 rounded-2xl
                  animate-ping
                  bg-blue-400/20
                "
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-sm md:text-base">
                Dhiman Dasgupta
              </span>

              <span className="text-xs text-slate-500 dark:text-slate-400 tracking-wide">
                SOFTWARE ENGINEER · SDET
              </span>
            </div>
          </motion.a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-3">

            {/* nav pill */}
            <div
              className="
                flex items-center gap-1
                px-2 py-2
                rounded-2xl
                border border-slate-200 dark:border-slate-800
                bg-white/70 dark:bg-slate-900/70
                backdrop-blur-xl
                shadow-lg
              "
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    relative
                    px-4 py-2 rounded-xl
                    text-sm font-medium
                    text-slate-600 dark:text-slate-300

                    hover:text-blue-500
                    hover:bg-blue-500/10

                    transition-all duration-300
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="
                relative
                w-12 h-12
                rounded-2xl

                border border-slate-200 dark:border-slate-800
                bg-white/70 dark:bg-slate-900/70

                backdrop-blur-xl
                shadow-lg

                flex items-center justify-center

                hover:scale-105
                hover:shadow-blue-500/20

                transition-all duration-300
              "
              aria-label="Toggle Theme"
            >
              <motion.div
                key={isDark ? "dark" : "light"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {isDark ? (
                  <Sun className="text-yellow-400" size={20} />
                ) : (
                  <Moon className="text-slate-700" size={20} />
                )}
              </motion.div>
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden flex items-center gap-3">

            {/* theme toggle */}
            <button
              onClick={toggleDarkMode}
              className="
                w-11 h-11 rounded-2xl
                border border-slate-200 dark:border-slate-800
                bg-white/70 dark:bg-slate-900/70
                backdrop-blur-xl
                flex items-center justify-center
              "
            >
              {isDark ? (
                <Sun className="text-yellow-400" size={18} />
              ) : (
                <Moon className="text-slate-700" size={18} />
              )}
            </button>

            {/* mobile menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                w-11 h-11 rounded-2xl
                border border-slate-200 dark:border-slate-800
                bg-white/70 dark:bg-slate-900/70
                backdrop-blur-xl
                flex items-center justify-center
              "
            >
              {mobileOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden
              mb-4 p-4

              rounded-3xl
              border border-slate-200 dark:border-slate-800

              bg-white/80 dark:bg-slate-900/80
              backdrop-blur-2xl

              shadow-2xl
            "
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                    px-4 py-3 rounded-2xl

                    text-sm font-medium
                    text-slate-700 dark:text-slate-300

                    hover:bg-blue-500/10
                    hover:text-blue-500

                    transition-all duration-300
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;