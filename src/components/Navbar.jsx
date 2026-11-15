import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Code2,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              bg-gradient-to-br from-white/25 to-white/10
              dark:from-white/[0.08] dark:to-white/[0.02]
              backdrop-blur-sm
              shadow-[0_8px_30px_rgba(0,0,0,0.04),inset_0_-1px_0_0_#e4e4e7,inset_0_1px_0_0_rgba(255,255,255,0.5)]
              dark:shadow-[0_8px_30px_rgba(0,0,0,0.3),inset_0_-1px_0_0_#27272a,inset_0_1px_0_0_rgba(255,255,255,0.15)]
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

              <span className="text-xs text-zinc-500 dark:text-zinc-400 tracking-wide">
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
                border border-zinc-200 dark:border-zinc-800
                bg-white/70 dark:bg-zinc-900/70
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
                    text-zinc-600 dark:text-zinc-300

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
            <ThemeToggle className="w-12 h-12" iconSize={20} />

            {/* CTA */}
            <a
              href="#contact"
              className="
                px-5 py-3
                rounded-2xl
                text-sm font-semibold
                text-white
                bg-gradient-to-r from-blue-500 to-indigo-500
                shadow-lg shadow-blue-500/20
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]
                transition-all duration-300
              "
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden flex items-center gap-3">

            {/* theme toggle */}
            <ThemeToggle className="w-11 h-11" iconSize={18} />

            {/* mobile menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                w-11 h-11 rounded-2xl
                border border-zinc-200 dark:border-zinc-800
                bg-white/70 dark:bg-zinc-900/70
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
              border border-zinc-200 dark:border-zinc-800

              bg-white/80 dark:bg-zinc-900/80
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
                    text-zinc-700 dark:text-zinc-300

                    hover:bg-blue-500/10
                    hover:text-blue-500

                    transition-all duration-300
                  "
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="
                  mt-2 px-4 py-3 rounded-2xl
                  text-sm font-semibold text-center
                  text-white
                  bg-gradient-to-r from-blue-500 to-indigo-500
                  shadow-lg shadow-blue-500/20
                  transition-all duration-300
                "
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;