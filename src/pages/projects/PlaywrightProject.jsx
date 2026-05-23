import Reveal from "../../components/Reveal";
import {
  FaGithub,
  FaCodeBranch,
  FaCheckCircle,
  FaBolt,
  FaLayerGroup,
  FaBug,
  FaServer,
  FaArrowRight,
} from "react-icons/fa";
import {
  Github,
  ArrowLeft,
  ShoppingCart,
  Zap,
  Database,
  ShieldCheck,
  Workflow,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";

const metrics = [
  {
    label: "Automated Tests",
    value: "120+",
  },
  {
    label: "Parallel Workers",
    value: "8",
  },
  {
    label: "Execution Reduction",
    value: "40%",
  },
  {
    label: "CI Stability",
    value: "95%",
  },
];

const features = [
  {
    icon: <FaBolt />,
    title: "Parallel Execution",
    description:
      "Optimized execution using Playwright workers for faster regression cycles.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Reusable Fixtures",
    description:
      "Shared fixtures and utilities for scalable and maintainable test design.",
  },
  {
    icon: <FaServer />,
    title: "API + UI Validation",
    description:
      "Integrated backend API checks alongside end-to-end UI workflows.",
  },
  {
    icon: <FaBug />,
    title: "Flake Reduction",
    description:
      "Improved test stability using resilient locators and retry strategies.",
  },
];

const stack = [
  "Playwright",
  "TypeScript",
  "GitHub Actions",
  "Allure Reports",
  "Node.js",
  "REST APIs",
  "CI/CD",
  "Page Object Model",
];

const problemsSolved = [
  "Reduced flaky test failures using resilient locator strategy",
  "Improved regression execution speed via parallel workers",
  "Centralized reusable fixtures for maintainability",
  "Integrated API validations into UI automation flow",
];

function PlaywrightProject() {
  return (
    <Reveal>
      <section className="bg-slate-100 dark:bg-slate-900 min-h-screen transition-colors duration-300">

        {/* HERO */}
        <div className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24">

            {/* Back button */}
            <Link
              to="/"
              className="
                inline-flex items-center gap-2
                text-slate-500 hover:text-blue-500
                transition mb-10
              "
            >
              <ArrowLeft size={18} />
              Back to Portfolio
            </Link>

            <div className="grid lg:grid-cols-2 gap-16 items-center"></div>

            {/* Status */}
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>

              <span className="uppercase tracking-[0.25em] text-green-500 text-xs font-semibold">
                Production Ready Framework
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
              Playwright
              <span className="text-blue-500"> Automation </span>
              System
            </h1>

            {/* Subtitle */}
            <p className="mt-8 max-w-3xl text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Enterprise-grade UI + API automation framework engineered
              for scalable end-to-end validation pipelines with CI/CD,
              observability, and maintainability at its core.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="https://github.com/Dhiman07-create/playwright-e2e-framework"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-3
                  px-6 py-3 rounded-2xl
                  bg-gradient-to-r from-blue-500 to-indigo-500
                  text-white font-medium
                  shadow-lg
                  hover:scale-105
                  transition-all duration-300
                "
              >
                <FaGithub />
                View Repository
              </a>

              <a
                href="#architecture"
                className="
                  inline-flex items-center gap-3
                  px-6 py-3 rounded-2xl
                  border border-slate-300 dark:border-slate-700
                  hover:border-blue-500
                  hover:text-blue-500
                  transition-all duration-300
                "
              >
                Explore Architecture
                <FaArrowRight />
              </a>
            </div>

            {/* Telemetry Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">

              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="
                    rounded-3xl
                    border border-slate-200 dark:border-slate-700
                    bg-white/70 dark:bg-slate-800/60
                    backdrop-blur-xl
                    p-6
                    hover:-translate-y-1
                    hover:shadow-[0_15px_50px_rgba(59,130,246,0.15)]
                    transition-all duration-300
                  "
                >
                  <p className="text-3xl md:text-4xl font-bold text-blue-500">
                    {metric.value}
                  </p>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {metric.label}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* ENGINEERING OVERVIEW */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">

          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
              Engineering Overview
            </p>

            <h2 className="text-4xl font-bold mb-8">
              Built for Scale, Stability & CI Reliability
            </h2>

            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              The framework was designed to support scalable UI and API
              automation workflows while maintaining reliability,
              maintainability, and observability across CI/CD pipelines.
              The architecture emphasizes reusable fixtures, modular page
              objects, parallel execution, and resilient locator
              strategies to reduce flaky tests and improve execution
              efficiency.
            </p>
          </div>

        </div>

        {/* ARCHITECTURE */}
        <div
          id="architecture"
          className="max-w-7xl mx-auto px-6 md:px-10 pb-24"
        >
          <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
            System Architecture
          </p>

          <h2 className="text-4xl font-bold mb-12">
            Framework Flow
          </h2>

          <div className="grid md:grid-cols-5 gap-5">

            {[
              "Test Specs",
              "Fixtures",
              "Page Objects",
              "Utilities",
              "CI/CD + Reporting",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  relative
                  rounded-3xl
                  border border-slate-200 dark:border-slate-700
                  bg-white/70 dark:bg-slate-800/60
                  backdrop-blur-xl
                  p-6 text-center
                  hover:shadow-xl
                  transition-all duration-300
                "
              >
                <div className="text-blue-500 text-2xl mb-3">
                  <FaCodeBranch className="mx-auto" />
                </div>

                <p className="font-semibold">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* TECH STACK */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">

          <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
            Stack Breakdown
          </p>

          <h2 className="text-4xl font-bold mb-12">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-4">

            {stack.map((tech, index) => (
              <div
                key={index}
                className="
                  px-5 py-3 rounded-2xl
                  bg-blue-500/10
                  border border-blue-500/20
                  text-blue-500
                  font-medium
                  hover:scale-105
                  transition-all duration-300
                "
              >
                {tech}
              </div>
            ))}

          </div>

        </div>

        {/* FEATURES */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">

          <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
            Framework Features
          </p>

          <h2 className="text-4xl font-bold mb-12">
            Core Engineering Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {features.map((feature, index) => (
              <div
                key={index}
                className="
                  rounded-3xl
                  border border-slate-200 dark:border-slate-700
                  bg-white/70 dark:bg-slate-800/60
                  backdrop-blur-xl
                  p-8
                  hover:-translate-y-2
                  hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]
                  transition-all duration-300
                "
              >
                <div className="text-blue-500 text-3xl mb-5">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* CI/CD FLOW */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">

          <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
            CI/CD Pipeline
          </p>

          <h2 className="text-4xl font-bold mb-12">
            Automated Validation Flow
          </h2>

          <div className="grid md:grid-cols-5 gap-5">

            {[
              "Code Push",
              "Install Dependencies",
              "Execute Tests",
              "Generate Reports",
              "Upload Artifacts",
            ].map((step, index) => (
              <div
                key={index}
                className="
                  rounded-3xl
                  border border-slate-200 dark:border-slate-700
                  bg-white/70 dark:bg-slate-800/60
                  backdrop-blur-xl
                  p-6 text-center
                  relative
                "
              >
                <div className="text-blue-500 text-2xl mb-4">
                  <FaCheckCircle className="mx-auto" />
                </div>

                <p className="font-medium">
                  {step}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* ENGINEERING DECISIONS */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">

          <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
            Engineering Decisions
          </p>

          <h2 className="text-4xl font-bold mb-12">
            Architectural Choices
          </h2>

          <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">

            <div className="grid grid-cols-2 bg-slate-200/60 dark:bg-slate-800/60 p-5 font-semibold">
              <div>Decision</div>
              <div>Reason</div>
            </div>

            {[
              ["Playwright over Selenium", "Better speed and stability"],
              ["TypeScript", "Improved maintainability and type safety"],
              ["POM Architecture", "Reusable and scalable design"],
              ["GitHub Actions", "Integrated CI/CD workflows"],
            ].map((row, index) => (
              <div
                key={index}
                className="
                  grid grid-cols-2
                  p-5
                  border-t border-slate-200 dark:border-slate-700
                  bg-white/60 dark:bg-slate-800/40
                "
              >
                <div className="font-medium">
                  {row[0]}
                </div>

                <div className="text-slate-600 dark:text-slate-400">
                  {row[1]}
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* LEARNINGS */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">

          <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
            Key Learnings
          </p>

          <h2 className="text-4xl font-bold mb-12">
            Engineering Takeaways
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Scalable automation architecture design",
              "Parallel execution optimization",
              "CI observability and reporting",
              "Resilient locator strategies",
              "Reusable fixtures and utilities",
              "Efficient API + UI validation patterns",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  flex items-center gap-4
                  rounded-2xl
                  border border-slate-200 dark:border-slate-700
                  bg-white/70 dark:bg-slate-800/60
                  backdrop-blur-xl
                  p-5
                "
              >
                <div className="text-green-500">
                  <FaCheckCircle />
                </div>

                <p>{item}</p>
              </div>
            ))}

          </div>

        </div>

        {/* Screenshots */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">

        <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
            Execution Evidence
        </p>

        <h2 className="text-4xl font-bold mb-12">
            Framework In Action
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
            <img
                src="/projects/playwright/allure-report.png"
                alt="Allure Report"
                className="w-full object-cover"
            />

            <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                Allure Reporting Dashboard
                </h3>

                <p className="text-slate-600 dark:text-slate-400">
                Automated reporting with execution insights,
                failure analytics, and test trends.
                </p>
            </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
            <img
                src="/projects/playwright/github-actions.png"
                alt="GitHub Actions"
                className="w-full object-cover"
            />

            <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                GitHub Actions Pipeline
                </h3>

                <p className="text-slate-600 dark:text-slate-400">
                Fully automated CI execution with artifact uploads
                and scheduled regression workflows.
                </p>
            </div>
            </div>

        </div>
        </div>
      </section>
    </Reveal>
  );
}

export default PlaywrightProject;