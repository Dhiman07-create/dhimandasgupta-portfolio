import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import {
  FaGithub,
  FaArrowRight,
  FaCircle,
} from "react-icons/fa";

const projects = [
  {
    title: "Playwright Automation Framework",
    icon: "🎭",
    category: "UI + API Automation",
    image: "/projects/playwright/allure-report.png",
    description:
      "Enterprise-grade Playwright framework supporting scalable UI + API automation with TypeScript and CI/CD integration.",
    stack: ["Playwright", "TypeScript", "CI/CD", "API Testing"],
    metrics: [
      "120+ Automated Tests",
      "GitHub Actions CI",
      "UI + API Coverage",
    ],
    github:
      "https://github.com/Dhiman07-create/playwright-e2e-framework",
    details: "/projects/playwright-automation",
    status: "ACTIVE",
  },

  {
    title: "Flipkart E-commerce Automation",
    icon: "🛒",
    category: "E-commerce Regression Suite",
    image: "/projects/flipkart/allure-report.png",
    description:
      "End-to-end regression automation suite for Flipkart using Selenide and TestNG with scheduled executions and reporting.",
    stack: ["Java", "Selenide", "TestNG", "GitHub Actions"],
    metrics: [
      "Regression Coverage",
      "Parallel Execution",
      "CI Scheduled Runs",
    ],
    github:
      "https://github.com/Dhiman07-create/flipkart-regression",
    details: "/projects/flipkart-automation",
    status: "ACTIVE",
  },

  {
    title: "E-commerce API Automation",
    icon: "⚙️",
    category: "API Test Framework",
    image: "/projects/api/allure-report.png",
    description:
      "REST Assured API framework with schema validation, reusable utilities, and backend consistency verification.",
    stack: ["REST Assured", "Java", "API Testing", "JSON Schema"],
    metrics: [
      "Schema Validation",
      "Reusable Utilities",
      "Backend Verification",
    ],
    github:
      "https://github.com/Dhiman07-create/ecommerce-api-automation",
    details: "/projects/ecommerce-api-automation",
    status: "ACTIVE",
  },
];

function Projects() {
  return (
    <Reveal>
      <section
        id="projects"
        className="
          relative
          px-6 md:px-10 py-24
          bg-zinc-100 dark:bg-zinc-950
          overflow-hidden
        "
      >
        {/* Section Header */}
        <div className="max-w-6xl mx-auto mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-3">
            Engineering Showcase
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Scalable automation systems, CI/CD pipelines, API frameworks,
            and engineering-focused projects built with reliability,
            observability, and performance in mind.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                relative
                rounded-3xl
                border border-zinc-200 dark:border-zinc-700
                bg-white/70 dark:bg-zinc-900
                backdrop-blur-xl
                transition-shadow duration-500
                hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]
                overflow-hidden
              "
            >
              {/* Preview mockup */}
              <div className="relative bg-zinc-950">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-zinc-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>

                {/* Screenshot */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-zinc-950">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="
                      w-full h-full
                      object-cover object-top
                      opacity-90
                      group-hover:opacity-100
                      transition-opacity duration-500
                    "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent" />
                </div>
              </div>

              <div className="relative p-7">
                {/* Glow Effect */}
                <div
                  className="
                    absolute inset-0 opacity-0
                    group-hover:opacity-100
                    transition duration-500
                    bg-gradient-to-br
                    from-blue-500/5
                    via-indigo-500/5
                    to-transparent
                  "
                />

                {/* Status + Category */}
                <div className="flex items-center justify-between flex-wrap gap-2 mb-5 relative z-10">
                  <span
                    className="
                      px-3 py-1 rounded-full
                      text-xs font-medium
                      border border-zinc-300 dark:border-zinc-700
                      text-zinc-600 dark:text-zinc-300
                    "
                  >
                    {project.category}
                  </span>

                  <div className="flex items-center gap-2">
                    <FaCircle className="text-green-500 text-[10px] animate-pulse" />

                    <span className="text-xs tracking-widest text-green-500 font-semibold">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 relative z-10">
                  {project.icon} {project.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 relative z-10">
                  {project.description}
                </p>

                {/* Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3 py-1
                        rounded-full
                        text-xs
                        font-medium
                        bg-blue-500/10
                        text-blue-500
                        border border-blue-500/20
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="space-y-2 mb-8 relative z-10">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="
                        flex items-center gap-2
                        text-sm text-zinc-600 dark:text-zinc-400
                      "
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {metric}
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between relative z-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      text-zinc-700 dark:text-zinc-300
                      hover:text-blue-500
                      transition
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <Link
                    to={project.details}
                    className="
                      flex items-center gap-2
                      text-blue-500
                      hover:gap-3
                      transition-all
                      font-medium
                    "
                  >
                    Case Study
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

export default Projects;
