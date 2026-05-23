import { motion } from "framer-motion";
import {
  Github,
  ArrowLeft,
  Server,
  ShieldCheck,
  Workflow,
  Database,
  CheckCircle2,
  Zap,
  Braces,
} from "lucide-react";

import { Link } from "react-router-dom";

const metrics = [
  {
    label: "API Test Cases",
    value: "150+",
    icon: Braces,
  },
  {
    label: "Avg Execution",
    value: "6 mins",
    icon: Zap,
  },
  {
    label: "Validation Layers",
    value: "Schema + DB",
    icon: ShieldCheck,
  },
  {
    label: "CI/CD",
    value: "GitHub Actions",
    icon: Workflow,
  },
];

const techStack = [
  "Java",
  "REST Assured",
  "TestNG",
  "Maven",
  "JSON Schema Validation",
  "GitHub Actions",
  "Postman",
  "Allure Reports",
  "SQL",
  "Git",
];

const engineeringHighlights = [
  "Designed reusable API client utilities for scalable automation",
  "Implemented schema validation for strict contract verification",
  "Built dynamic payload generation utilities for data-driven testing",
  "Integrated response time assertions and backend validation",
  "Configured CI/CD execution using GitHub Actions workflows",
  "Added reporting and execution insights using Allure Reports",
];

function EcommerceApiAutomationProject() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        min-h-screen
        bg-slate-50
        dark:bg-slate-950
        text-slate-900
        dark:text-white
      "
    >
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-transparent" />

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

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-sm mb-6">
                <Server size={16} />
                Backend API Validation
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                E-commerce
                <span className="block text-blue-500">
                  API Automation
                </span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                Developed a scalable backend automation framework
                using REST Assured and TestNG for validating APIs,
                schema contracts, backend workflows, and
                data consistency across e-commerce services.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://github.com/Dhiman07-create/ecommerce-api-automation"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2
                    px-6 py-3 rounded-xl
                    bg-blue-500 hover:bg-blue-600
                    text-white font-medium
                    transition
                  "
                >
                  <Github size={18} />
                  View Repository
                </a>

                <a
                  href="#architecture"
                  className="
                    inline-flex items-center gap-2
                    px-6 py-3 rounded-xl
                    border border-slate-300 dark:border-slate-700
                    hover:border-blue-500
                    transition
                  "
                >
                  Explore Architecture
                </a>
              </div>
            </div>

            {/* RIGHT METRICS */}
            <div className="grid sm:grid-cols-2 gap-5">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;

                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="
                      rounded-3xl
                      border border-slate-200 dark:border-slate-800
                      bg-white/80 dark:bg-slate-900/70
                      backdrop-blur-xl
                      p-6
                      shadow-lg
                      hover:shadow-blue-500/10
                      hover:scale-[1.02]
                      transition-all duration-300
                    "
                  >
                    <div className="flex items-center justify-between mb-5">
                      <Icon className="text-blue-500" size={24} />

                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    </div>

                    <p className="text-3xl font-bold mb-2">
                      {metric.value}
                    </p>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {metric.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section
        id="architecture"
        className="max-w-7xl mx-auto px-6 md:px-10 py-24"
      >
        <div className="mb-16">
          <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
            Framework Architecture
          </p>

          <h2 className="text-4xl font-bold">
            API Automation Design
          </h2>
        </div>

        <div
          className="
            rounded-3xl
            border border-slate-200 dark:border-slate-800
            bg-white dark:bg-slate-900
            p-10
            shadow-xl
          "
        >
          <div className="grid md:grid-cols-5 gap-6 items-center">
            
            {[
              "API Test Suites",
              "Request Builders",
              "Validation Layer",
              "REST Assured Engine",
              "Reports & CI",
            ].map((item, index) => (
              <div
                key={item}
                className="
                  relative
                  rounded-2xl
                  border border-slate-200 dark:border-slate-700
                  bg-slate-50 dark:bg-slate-800
                  p-6
                  text-center
                  font-medium
                "
              >
                {item}

                {index !== 4 && (
                  <div className="hidden md:flex
                absolute
                top-1/2
                left-full
                -translate-y-1/2
                translate-x-[12px]

                items-center justify-center

                w-8 h-8
                rounded-full

                bg-white dark:bg-slate-900
                border border-slate-200 dark:border-slate-700

                text-blue-500
                shadow-lg
                z-20">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="mb-12">
          <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
            Technology Stack
          </p>

          <h2 className="text-4xl font-bold">
            Tools & Frameworks
          </h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="
                px-5 py-3 rounded-2xl
                border border-slate-200 dark:border-slate-700
                bg-white dark:bg-slate-900
                shadow-sm
                hover:shadow-lg
                hover:border-blue-500
                transition-all duration-300
              "
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* ENGINEERING DECISIONS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="mb-12">
          <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
            Engineering Decisions
          </p>

          <h2 className="text-4xl font-bold">
            Problems Solved
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {engineeringHighlights.map((item) => (
            <div
              key={item}
              className="
                rounded-3xl
                border border-slate-200 dark:border-slate-800
                bg-white dark:bg-slate-900
                p-6
                flex items-start gap-4
                shadow-sm
                hover:shadow-xl
                transition-all duration-300
              "
            >
              <CheckCircle2
                className="text-green-500 mt-1"
                size={20}
              />

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VALIDATION FLOW */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="mb-12">
          <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
            Validation Pipeline
          </p>

          <h2 className="text-4xl font-bold">
            API Execution Flow
          </h2>
        </div>

        <div
          className="
            rounded-3xl
            border border-slate-200 dark:border-slate-800
            bg-white dark:bg-slate-900
            p-10
            shadow-xl
          "
        >
          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Payload Builder",
              "Request Execution",
              "Response Validation",
              "Schema Verification",
              "Reports & Logs",
            ].map((step, index) => (
              <div
                key={step}
                className="
                  relative
                  rounded-2xl
                  border border-slate-200 dark:border-slate-700
                  bg-slate-50 dark:bg-slate-800
                  p-6
                  text-center
                  font-medium
                "
              >
                <div className="text-blue-500 text-sm mb-3">
                  Step {index + 1}
                </div>

                {step}

                {index !== 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-7 text-blue-500">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="mb-12">
          <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
            Execution Evidence
          </p>

          <h2 className="text-4xl font-bold">
            Framework In Action
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg">
            <img
              src="/projects/api/allure-report.png"
              alt="Allure Report"
              className="w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">
                API Execution Dashboard
              </h3>

              <p className="text-slate-600 dark:text-slate-400">
                Rich reporting for execution status,
                request validation, and debugging insights.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg">
            <img
              src="/projects/api/github-actions.png"
              alt="GitHub Actions"
              className="w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">
                CI Automation Pipeline
              </h3>

              <p className="text-slate-600 dark:text-slate-400">
                Automated API execution integrated
                with GitHub Actions workflows.
              </p>
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
}

export default EcommerceApiAutomationProject;