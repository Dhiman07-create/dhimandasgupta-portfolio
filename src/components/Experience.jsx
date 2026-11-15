import { motion } from "framer-motion";
import { Briefcase, MapPin, CheckCircle2 } from "lucide-react";

import Reveal from "./Reveal";

const experiences = [
  {
    company: "Tecsys Inc.",
    role: "Software Developer in Test",
    duration: "June 2026 – Present",
    durationMeta: "6 months",
    location: "Bengaluru, Karnataka, India",
    current: true,
    stack: ["Playwright", "TypeScript", "Python", "Azure DevOps", "GitLab CI/CD"],
    points: [
      "Built a Playwright + TypeScript automation framework from zero for the Warehouse Management System, cutting release-validation time from 80 hours to 4 hours per cycle (95% reduction) by architecting reusable fixtures, API clients, and reporting modules integrated with Azure DevOps and GitLab CI/CD.",
      "Prevented 20+ defects from reaching production during a PostgreSQL migration by designing automated regression suites that validated data integrity across 20 core tables and workflows.",
      "Standardized coding guidelines and Playwright best practices, establishing a shared automation foundation for future release cycles.",
      "Authored and ported automation tests from TypeScript to Python to integrate with Swift, Tecsys's proprietary test platform, using AI-assisted development (Kiro, Claude) to scaffold and refine production-ready test code.",
    ],
  },
  {
    company: "Cognizant",
    role: "Software Development Engineer in Test",
    duration: "September 2024 – May 2026",
    durationMeta: "1 year 9 months",
    location: "Bengaluru, Karnataka, India",
    current: false,
    stack: ["Playwright", "Selenium", "Appium", "GitHub Actions", "Agile/Scrum"],
    points: [
      "Cut regression execution time by 34+ hours per release cycle by rearchitecting the test suite for parallel execution across Playwright, Selenium, and Appium.",
      "Raised automation coverage from 40% to 70% by identifying real-world edge cases using usage analytics and AI-assisted development (GitHub Copilot).",
      "Held production defects near zero across 25 releases by building GitHub Actions CI/CD pipelines with automated quality gates that blocked merges on failed test runs.",
      "Owned test strategy and stakeholder sign-off for major feature releases, executing manual/exploratory testing alongside automated regression within an Agile/Scrum STLC process.",
      "Led a client-facing QA team of 4 engineers, mentoring junior QAs across web, mobile, and API platforms.",
      "Led QA ownership through major platform migrations (WebLogic → JBoss, Oracle → PostgreSQL, AIRP → SageMaker), ensuring zero critical post-release issues.",
    ],
  },
  {
    company: "Cognizant",
    role: "Programmer Analyst Trainee",
    duration: "September 2023 – September 2024",
    durationMeta: "1 year 1 month",
    location: "Bengaluru, Karnataka, India",
    current: false,
    stack: ["Java", "Selenium", "CITS"],
    points: [
      "Developed and maintained Java-based automation scripts for UI testing.",
      "Gained hands-on experience with Cognizant Intelligent Test Scripter (CITS).",
    ],
  },
  {
    company: "Cognizant",
    role: "Intern",
    duration: "March 2023 – August 2023",
    durationMeta: "6 months",
    location: "Bengaluru, Karnataka, India",
    current: false,
    stack: ["Java", "Selenium"],
    points: [
      "Led development of a Java + Selenium automation project to validate the Be.Cognizant website, focusing on functional and regression testing.",
    ],
  },
];

function ExperienceCard({ exp }) {
  return (
    <div
      className="
        rounded-3xl
        border border-zinc-200 dark:border-zinc-800
        bg-white/80 dark:bg-zinc-900/70
        backdrop-blur-xl
        p-7 md:p-8
        shadow-lg
        hover:shadow-blue-500/10
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      {/* Status / Duration */}
      <div className="flex items-center gap-2 mb-4">
        {exp.current ? (
          <>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-xs uppercase tracking-widest text-green-500 font-semibold">
              Current Role
            </span>
          </>
        ) : (
          <span className="text-xs uppercase tracking-widest text-blue-500 font-semibold">
            {exp.duration}
          </span>
        )}
      </div>

      {/* Role + Company */}
      <h3 className="text-xl md:text-2xl font-bold">
        {exp.role}
      </h3>

      <p className="mt-1 text-blue-500 font-medium">
        {exp.company}
      </p>

      {/* Meta row */}
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
        <span className="flex items-center gap-1.5">
          <Briefcase size={14} />
          {exp.current ? exp.duration : exp.durationMeta}
        </span>

        <span className="flex items-center gap-1.5">
          <MapPin size={14} />
          {exp.location}
        </span>
      </div>

      {/* Bullets */}
      <ul className="mt-5 space-y-3">
        {exp.points.map((point, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300"
          >
            <CheckCircle2
              className="text-blue-500 shrink-0 mt-0.5"
              size={16}
            />
            {point}
          </li>
        ))}
      </ul>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 mt-6">
        {exp.stack.map((tech) => (
          <span
            key={tech}
            className="
              px-3 py-1
              rounded-full
              text-xs font-medium
              bg-blue-500/10
              text-blue-500
              border border-blue-500/20
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ exp, index }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Dot */}
      <div
        className="
          absolute left-4 md:left-1/2
          top-6 md:top-10
          -translate-x-1/2
          z-10
        "
      >
        <span className="relative flex h-4 w-4">
          {exp.current && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
          )}
          <span
            className="
              relative inline-flex h-4 w-4 rounded-full
              bg-blue-500
              ring-4 ring-white dark:ring-zinc-950
            "
          />
        </span>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-12">
        {isLeft ? (
          <>
            <div className="pl-12 md:pl-0 md:pr-10">
              <ExperienceCard exp={exp} />
            </div>
            <div className="hidden md:block" />
          </>
        ) : (
          <>
            <div className="hidden md:block" />
            <div className="pl-12 md:pl-10">
              <ExperienceCard exp={exp} />
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

function Experience() {
  return (
    <Reveal>
      <section
        id="experience"
        className="
          relative overflow-hidden
          px-6 md:px-10 py-24
          bg-zinc-50 dark:bg-zinc-950
          transition-colors duration-300
        "
      >
        {/* Background glow */}
        <div
          className="
            absolute top-1/3 right-0
            w-[450px] h-[450px]
            bg-blue-500/10
            blur-3xl rounded-full
            pointer-events-none
          "
        />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
              Career Journey
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Professional experience across
              web, mobile, and API quality engineering.
            </h2>
          </div>

          {/* TIMELINE */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="
                absolute left-4 md:left-1/2
                top-0 bottom-0
                md:-translate-x-1/2
                w-0.5
                bg-gradient-to-b from-blue-500/80 via-blue-500/30 to-transparent
              "
            />

            <div className="space-y-14 md:space-y-16">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={`${exp.company}-${exp.role}-${exp.duration}`}
                  exp={exp}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default Experience;
