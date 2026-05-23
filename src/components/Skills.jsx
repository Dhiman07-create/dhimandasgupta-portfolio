import { motion } from "framer-motion";
import {
  TestTube2,
  Code2,
  Cloud,
  Database,
  Wrench,
  Cpu,
} from "lucide-react";

import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "Test Automation",
    icon: TestTube2,
    skills: [
      "Playwright",
      "Selenium",
      "Appium",
      "REST Assured",
      "Selenide",
      "TestNG",
    ],
  },
  {
    title: "Programming & Scripting",
    icon: Code2,
    skills: [
      "Java",
      "TypeScript",
      "Python",
      "SQL",
      "C++",
    ],
  },
  {
    title: "CI/CD & DevOps",
    icon: Cpu,
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Maven",
      "Jenkins",
    ],
  },
  {
    title: "Databases & Data",
    icon: Database,
    skills: [
      "PostgreSQL",
      "Database Validation",
      "ETL Pipelines",
      "Data Modeling",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      "Google Cloud Platform",
      "Docker",
      "Linux",
      "Cloud Workflows",
    ],
  },
  {
    title: "Performance & Tools",
    icon: Wrench,
    skills: [
      "JMeter",
      "Postman",
      "Allure Reports",
      "API Testing",
    ],
  },
];

function Skills() {
  return (
    <Reveal>
      <section
        id="skills"
        className="
          relative overflow-hidden
          px-6 md:px-10 py-24
          bg-slate-100 dark:bg-slate-900
          transition-colors duration-300
        "
      >
        {/* Background glow */}
        <div
          className="
            absolute bottom-0 left-0
            w-[450px] h-[450px]
            bg-blue-500/10
            blur-3xl rounded-full
            pointer-events-none
          "
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* HEADER */}
          <div className="mb-16">
            <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
              Technical Expertise
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl">
              Engineering skills focused on
              automation, quality systems,
              cloud workflows, and scalable tooling.
            </h2>
          </div>

          {/* SKILL GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="
                    group
                    rounded-3xl
                    border border-slate-200 dark:border-slate-800
                    bg-white/80 dark:bg-slate-950/70
                    backdrop-blur-xl
                    p-7
                    shadow-lg

                    hover:scale-[1.02]
                    hover:shadow-blue-500/10
                    hover:border-blue-500/40

                    transition-all duration-300
                  "
                >
                  {/* Top */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="
                        flex items-center justify-center
                        w-14 h-14 rounded-2xl
                        bg-blue-500/10
                        border border-blue-500/20
                      "
                    >
                      <Icon
                        className="text-blue-500"
                        size={26}
                      />
                    </div>

                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="w-2 h-2 rounded-full bg-blue-500/70" />
                      <span className="w-2 h-2 rounded-full bg-indigo-500/50" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold mb-5">
                    {group.title}
                  </h3>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="
                          px-4 py-2 rounded-xl
                          border border-slate-200 dark:border-slate-700
                          bg-slate-100 dark:bg-slate-800

                          text-sm font-medium
                          text-slate-700 dark:text-slate-300

                          group-hover:border-blue-500/30
                          group-hover:text-blue-500

                          transition-all duration-300
                        "
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default Skills;