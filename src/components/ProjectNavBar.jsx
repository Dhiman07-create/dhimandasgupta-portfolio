import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import ThemeToggle from "./ThemeToggle";

function ProjectNavBar() {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
        fixed top-0 left-0 w-full z-50
        bg-gradient-to-br from-white/25 to-white/10
        dark:from-white/[0.08] dark:to-white/[0.02]
        backdrop-blur-sm
        shadow-[0_8px_30px_rgba(0,0,0,0.04),inset_0_-1px_0_0_#e4e4e7,inset_0_1px_0_0_rgba(255,255,255,0.5)]
        dark:shadow-[0_8px_30px_rgba(0,0,0,0.3),inset_0_-1px_0_0_#27272a,inset_0_1px_0_0_rgba(255,255,255,0.15)]
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="
            inline-flex items-center gap-2
            text-sm font-medium
            text-zinc-600 dark:text-zinc-300
            hover:text-blue-500
            transition-colors duration-300
          "
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <ThemeToggle className="w-11 h-11" iconSize={18} />
      </div>
    </motion.div>
  );
}

export default ProjectNavBar;
