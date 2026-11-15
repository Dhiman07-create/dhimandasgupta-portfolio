import { motion } from "framer-motion";

function PageTransition({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
