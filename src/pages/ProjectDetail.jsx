import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectDetail() {
  const { id } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
    <section className="px-10 py-20 bg-slate-100 dark:bg-slate-900">
      <h1 className="text-4xl font-bold mb-6">{id}</h1>

      <p className="max-w-3xl text-lg leading-relaxed">
        Detailed explanation of the problem, approach, tech stack,
        CI/CD setup, challenges, and learnings.
      </p>
    </section>
    </motion.div>
  );
}

export default ProjectDetail;
