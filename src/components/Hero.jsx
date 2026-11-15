import { motion } from "framer-motion";

const floatingStats = [
  { value: "3+", label: "Years Experience", position: "top-10 left-0 sm:-left-6 md:-left-14" },
  { value: "95%", label: "Faster Releases", position: "top-0 right-0 sm:-right-4 md:-right-12" },
  { value: "70%", label: "Coverage Achieved", position: "bottom-0 left-0 sm:-left-4 md:-left-12" },
  { value: "25+", label: "Releases Shipped", position: "bottom-10 right-0 sm:-right-6 md:-right-14" },
];

function Hero() {
  return (
    <section
      id="hero"
      className="
        relative min-h-screen
        overflow-hidden
        bg-zinc-100
        dark:bg-zinc-950
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

      {/* Dramatic right-side wash, matching the reference's bright blue bleed */}
      <div
        className="
          absolute top-1/2 right-0
          -translate-y-1/2 translate-x-1/4
          w-[700px] h-[700px]
          rounded-full
          blur-[100px]
          pointer-events-none
          bg-[radial-gradient(circle,rgba(59,130,246,0.35)_0%,rgba(37,99,235,0.16)_40%,transparent_70%)]
          dark:bg-[radial-gradient(circle,rgba(59,130,246,0.55)_0%,rgba(37,99,235,0.3)_40%,transparent_70%)]
        "
      />

      {/* ================= MAIN CONTENT ================= */}

      <div
        className="
          relative z-10
          max-w-7xl
          mx-auto
          px-6 md:px-10
          py-24
          min-h-screen
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

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              text-4xl md:text-6xl
              font-bold
              leading-tight
              tracking-tight
              mb-6
            "
          >
            <span className="text-zinc-900 dark:text-white">
              Hi! I&apos;m Dhiman, building
            </span>

            <br />

            <span
              className="
                pr-2
                font-black italic
                bg-gradient-to-r
                from-blue-500
                via-cyan-400
                to-indigo-500
                bg-clip-text
                text-transparent
              "
            >
              code you can trust.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              max-w-xl
              text-lg md:text-xl
              leading-relaxed
              text-zinc-600
              dark:text-zinc-300
              mb-10
            "
          >
            SDET specializing in automation, CI/CD, and quality
            engineering across web, mobile, and API platforms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
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
                border border-zinc-300 dark:border-zinc-700
                bg-white/50 dark:bg-zinc-900/50
                backdrop-blur-md
                text-zinc-700 dark:text-zinc-200
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
        {/* RIGHT SIDE — PHOTO + FLOATING STATS */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          {/* Defined circular glow halo, offset toward the right */}
          <div
            className="
              absolute
              top-1/2 right-[-15%]
              -translate-y-1/2
              w-[85%] h-[85%]
              rounded-full
              blur-2xl
              pointer-events-none
            "
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0.18) 45%, transparent 72%)",
            }}
          />

          <div
            className="
              relative
              rounded-full
              overflow-hidden
              aspect-square
            "
          >
            <img
              src="/profile.png"
              alt="Dhiman Dasgupta"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Stat Badges */}
          {floatingStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              className={`
                absolute ${stat.position}
                px-4 py-3
                rounded-2xl
                border border-white/40 dark:border-white/20
                bg-gradient-to-br from-white/25 to-white/5
                dark:from-white/[0.08] dark:to-white/[0.01]
                backdrop-blur-sm
                shadow-[0_10px_30px_-8px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.5)]
                dark:shadow-[0_15px_35px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.3)]
              `}
            >
              <p className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white leading-none">
                {stat.value}
              </p>

              <p className="mt-1 text-xs text-zinc-600 dark:text-white/70 whitespace-nowrap">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
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
            text-zinc-500
            dark:text-zinc-400
          "
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
