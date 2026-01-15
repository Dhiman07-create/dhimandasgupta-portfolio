import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-start h-screen px-10 bg-slate-900 text-gray-100"
    >
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Dhiman Dasgupta
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="text-xl md:text-2xl mb-8 text-gray-300"
      >
        Aspiring Data Engineer | SDET | Automation & Cloud Enthusiast
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex space-x-5"
      >
        {/* Resume Button */}
        <a
          href="/Dhiman_Dasgupta_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => window.gtag?.("event", "resume_click")}
          className="
            group inline-flex items-center gap-2
            px-7 py-3
            rounded-lg font-medium
            bg-gradient-to-r from-blue-500 to-indigo-500
            text-white
            shadow-md
            transition-all duration-300 ease-out
            hover:scale-105
            hover:shadow-[0_10px_30px_rgba(59,130,246,0.45)]
            active:scale-95
          "
        >
          📄 Resume
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* Get in Touch Button */}
        <a
          href="#contact"
          onClick={() => window.gtag?.("event", "get_in_touch")}
          className="
            inline-flex items-center
            px-7 py-3
            rounded-lg font-medium
            border border-slate-600
            text-gray-200
            transition-all duration-300
            hover:border-blue-400
            hover:text-blue-400
            hover:shadow-[0_0_12px_rgba(96,165,250,0.35)]
          "
        >
          Get in Touch
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}

/* Scroll indicator component */
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="text-gray-400 text-2xl"
      >
        ↓
      </motion.div>
    </motion.div>
  );
}

export default Hero;
