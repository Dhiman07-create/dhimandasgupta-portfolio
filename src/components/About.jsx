import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Workflow,
  Cloud,
} from "lucide-react";

import Reveal from "./Reveal";

const highlights = [
  {
    icon: Workflow,
    title: "Automation Engineering",
    desc: "Scalable UI, API & mobile automation frameworks",
  },
  {
    icon: Database,
    title: "Data Engineering",
    desc: "ETL pipelines, analytics workflows & cloud data systems",
  },
  {
    icon: Cloud,
    title: "Cloud & CI/CD",
    desc: "GitHub Actions, cloud integrations & deployment workflows",
  },
  {
    icon: Code2,
    title: "Engineering Mindset",
    desc: "Focused on reliability, observability & system quality",
  },
];

function About() {
  return (
    <Reveal>
      <section
        id="about"
        className="
          relative overflow-hidden
          px-6 md:px-10 py-24
          bg-slate-50 dark:bg-slate-950
          transition-colors duration-300
        "
      >
        {/* Background glow */}
        <div
          className="
            absolute top-0 right-0
            w-[500px] h-[500px]
            bg-blue-500/10
            blur-3xl
            rounded-full
            pointer-events-none
          "
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* SECTION HEADER */}
          <div className="mb-16">
            <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl">
              Building scalable automation systems,
              modern testing infrastructure,
              and data-driven engineering workflows.
            </h2>
          </div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div
                className="
                  rounded-3xl
                  border border-slate-200 dark:border-slate-800
                  bg-white/80 dark:bg-slate-900/70
                  backdrop-blur-xl
                  p-8 md:p-10
                  shadow-xl
                "
              >
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  Hello! I’m{" "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Dhiman Dasgupta
                  </span>
                  , an aspiring{" "}
                  <span className="text-blue-500 font-medium">
                    Data Engineer
                  </span>{" "}
                  and{" "}
                  <span className="text-indigo-500 font-medium">
                    SDET
                  </span>{" "}
                  with hands-on experience in automation testing,
                  API validation, CI/CD pipelines, and cloud-focused
                  engineering workflows.
                </p>

                <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  I enjoy building scalable frameworks,
                  improving engineering reliability,
                  and designing systems that blend
                  automation, observability, and modern
                  software engineering practices.
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {[
                    "Playwright",
                    "Selenium",
                    "REST Assured",
                    "Python",
                    "Java",
                    "GCP",
                    "GitHub Actions",
                    "PostgreSQL",
                  ].map((tech) => (
                    <div
                      key={tech}
                      className="
                        px-4 py-2 rounded-xl
                        border border-slate-200 dark:border-slate-700
                        bg-slate-100 dark:bg-slate-800
                        text-sm font-medium
                        hover:border-blue-500
                        hover:text-blue-500
                        transition-all duration-300
                      "
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <div className="grid sm:grid-cols-2 gap-5">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="
                      rounded-3xl
                      border border-slate-200 dark:border-slate-800
                      bg-white/80 dark:bg-slate-900/70
                      backdrop-blur-xl
                      p-6
                      shadow-lg

                      hover:scale-[1.02]
                      hover:shadow-blue-500/10
                      transition-all duration-300
                    "
                  >
                    <div className="flex items-center justify-between mb-5">
                      <Icon
                        className="text-blue-500"
                        size={26}
                      />

                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    </div>

                    <h3 className="text-lg font-semibold mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default About;