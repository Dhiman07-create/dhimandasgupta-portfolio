import { motion } from "framer-motion";
import EngineeringMetrics from "./EngineeringMetrics";
import {
  FaGithub,
  FaCloud,
  FaCodeBranch,
  FaCheckCircle,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
      className="
        relative min-h-screen
        overflow-hidden
        will-change-transform
        transform-gpu
        bg-slate-100
        dark:bg-[#081120]
        transition-colors duration-300
      "
    >
      {/* ================= BACKGROUND ================= */}

      {/* Grid overlay */}
      <div
        className="
          absolute inset-0
          opacity-[0.04]
          dark:opacity-[0.06]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, #64748b 1px, transparent 1px),
            linear-gradient(to bottom, #64748b 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow Orbs */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-cyan-400/20 blur-3xl rounded-full" />

      {/* ================= MAIN CONTENT ================= */}

      <div
        className="
          relative z-10
          max-w-7xl
          mx-auto
          px-6 md:px-10
          py-24
          min-h-screen
          will-change-transform
          transform-gpu
          grid grid-cols-1 lg:grid-cols-2
          gap-16
          items-center
        "
      >
        {/* ================================================= */}
        {/* LEFT SIDE */}
        {/* ================================================= */}

        <div className="flex flex-col items-start">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              mb-6
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              border border-emerald-400/30
              bg-emerald-400/10
              backdrop-blur-md
            "
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-300">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Terminal Intro */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              mb-6
              w-full max-w-xl
              rounded-2xl
              border border-slate-300/60
              dark:border-slate-700
              bg-white/60
              dark:bg-slate-900/60
              backdrop-blur-md
              overflow-hidden
              shadow-xl
            "
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 dark:border-slate-800">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-sm md:text-base text-slate-700 dark:text-slate-300 space-y-2">
              <p>
                <span className="text-cyan-500">$</span> initializing_profile...
              </p>

              <p className="text-emerald-500">
                ✔ SDET & Automation Engineer
              </p>

              <p className="text-emerald-500">
                ✔ CI/CD & Test Infrastructure Builder
              </p>

              <p className="text-emerald-500">
                ✔ Data Engineering Enthusiast
              </p>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              text-5xl md:text-7xl
              font-black
              leading-tight
              tracking-tight
              mb-6
            "
          >
            <span className="text-slate-900 dark:text-white">
              Dhiman
            </span>

            <br />

            <span
              className="
                bg-gradient-to-r
                from-blue-500
                via-cyan-400
                to-indigo-500
                bg-clip-text
                text-transparent
              "
            >
              Dasgupta
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="
              max-w-2xl
              text-lg md:text-xl
              leading-relaxed
              text-slate-600
              dark:text-slate-300
              mb-8
            "
          >
            Building scalable automation frameworks, CI/CD systems,
            and data-driven engineering solutions using modern testing
            and cloud technologies.
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="
              flex flex-wrap gap-3 mb-10
            "
          >
            {[
              "Java",
              "Selenium",
              "Playwright",
              "Appium",
              "GitHub Actions",
              "PostgreSQL",
              "GCP",
              "REST APIs",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  px-4 py-2
                  rounded-full
                  text-sm font-medium
                  bg-white/70 dark:bg-slate-800/70
                  border border-slate-200 dark:border-slate-700
                  text-slate-700 dark:text-slate-200
                  backdrop-blur-md
                  shadow-sm
                  hover:border-blue-500/40
                  hover:shadow-lg
                  transition-all duration-300
                "
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-5"
          >
            {/* Resume */}
            <a
              href="/Dhiman_Dasgupta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex items-center gap-3
                px-7 py-4
                rounded-2xl
                font-semibold
                bg-gradient-to-r
                from-blue-500
                to-indigo-500
                text-white
                shadow-lg
                hover:border-blue-500/40
                hover:shadow-[0_0_30px_rgba(59,130,246,0.45)]
                transition-all duration-300
              "
            >
              📄 Resume
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="
                inline-flex items-center gap-2
                px-7 py-4
                rounded-2xl
                font-semibold
                border border-slate-300 dark:border-slate-700
                bg-white/50 dark:bg-slate-900/50
                backdrop-blur-md
                text-slate-700 dark:text-slate-200
                hover:border-blue-400
                hover:text-blue-500
                hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]
                transition-all duration-300
              "
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          {/* Main Console Card */}
          <div
            className="
              relative
              rounded-3xl
              border border-slate-200 dark:border-slate-800
              bg-white/60 dark:bg-slate-900/60
              backdrop-blur-2xl
              p-8
              shadow-lg
              shadow-md
              overflow-hidden
              will-change-transform
              transform-gpu
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-400/5 pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-widest">
                  Engineering Console
                </p>

                <h3 className="text-2xl font-bold mt-1">
                  Live System Metrics
                </h3>
              </div>

              <div
                className="
                  flex items-center gap-2
                  px-3 py-2
                  rounded-full
                  bg-emerald-500/10
                  border border-emerald-500/20
                "
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-emerald-500 font-medium">
                  Operational
                </span>
              </div>
            </div>

            {/* Live Engineering Metrics */}
            <div className="mb-8">
              <EngineeringMetrics variant="hero" />
            </div>

            {/* Pipeline Flow */}
            <div className="mb-8">
              <p className="text-sm uppercase tracking-widest text-slate-500 mb-4">
                Deployment Flow
              </p>

              <div className="flex items-center justify-between gap-3 flex-wrap">
                {["Commit", "Build", "Test", "Deploy"].map((step) => (
                  <div
                    key={step}
                    className="
                      flex-1 min-w-[70px]
                      text-center
                      px-3 py-3
                      rounded-xl
                      bg-slate-100 dark:bg-slate-800
                      border border-slate-200 dark:border-slate-700
                      text-sm font-medium
                    "
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Strength */}
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-500 mb-4">
                Engineering Stack
              </p>

              <div className="space-y-4">
                <StackBar label="Automation" width="92%" />
                <StackBar label="CI/CD" width="84%" />
                <StackBar label="Cloud & APIs" width="76%" />
                <StackBar label="Data Engineering" width="68%" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="
            text-2xl
            text-slate-500
            dark:text-slate-400
          "
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function MetricCard({ icon, title, value }) {
  return (
    <div
      className="
        rounded-2xl
        border border-slate-200 dark:border-slate-700
        bg-white/70 dark:bg-slate-800/70
        p-5
        backdrop-blur-md
        hover:border-blue-500/40
        hover:shadow-xl
        transition-all duration-300
      "
    >
      <div className="text-blue-500 text-xl mb-3">
        {icon}
      </div>

      <p className="text-sm text-slate-500 mb-1">
        {title}
      </p>

      <h4 className="text-xl font-bold">
        {value}
      </h4>
    </div>
  );
}

function StackBar({ label, width }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">
          {label}
        </span>

        <span className="text-sm text-slate-500">
          {width}
        </span>
      </div>

      <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width }}
          transition={{ duration: 1 }}
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-blue-500
            to-cyan-400
          "
        />
      </div>
    </div>
  );
}

export default Hero;