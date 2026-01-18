import { Link } from "react-router-dom";
import Reveal from "./Reveal";

function Projects() {
  return (
    <Reveal>
    <section
      id="projects"
      className="px-10 py-20 bg-gray-100 dark:bg-gray-900"
    >
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
        {/* Project 1 */}
        <div className="bg-slate-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h4 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">🛒 Flipkart E-commerce Automation</h4>
          <p className="mb-3 text-slate-600 dark:text-white">
            End-to-end automation framework for Flipkart covering UI, and regression scenarios 
            using Selenide and TestNG.
          </p>
          <p className="mb-3 text-slate-600 dark:text-white">
            Integrated CI/CD using GitHub Actions with scheduled runs and detailed test reporting.
          </p>
          <div className="flex items-center justify-between mt-4">
          <a
            href="https://github.com/Dhiman07-create/flipkart-regression"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-500 transition"
          >
            View on GitHub →
          </a>
          <Link
            to="/projects/flipkart-automation"
            className="text-red-400 hover:text-red-500 transition"
          >
            View Details →
        </Link>
        </div>
        </div>

        {/* Project 2 */}
        {/* <div className="bg-slate-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h4 className="text-2xl font-semibold mb-3 text-slate-600 dark:text-white">📱 Mobile Automation Testing (Android)</h4>
          <p className="mb-3 text-slate-600 dark:text-white">
            Automated Android app flows using Appium, Selenium, and Java including login, field assignments, image uploads, and estimate validation.
          </p>
          <p className="mb-3 text-slate-600 dark:text-white">
            Executed tests remotely via GitHub Actions with emulator setup and result assertions.
          </p>
          <div className="flex items-center justify-between mt-4">
          <a
            href="https://github.com/Dhiman07-create/ecommerce-mobile-app-automation"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-500 transition"
          >
            View on GitHub →
          </a>
          <Link
            to="/projects/ecommerce-mobile-app-automation"
            className="text-red-400 hover:text-red-500 transition"
          >
            View Details →
        </Link>
        </div>
        </div> */}

        {/* Project 3 */}
        <div className="bg-slate-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h4 className="text-2xl font-semibold mb-3 text-slate-600 dark:text-white">⚙️ E-commerce API Automation</h4>
          <p className="mb-3 text-slate-600 dark:text-white">
            API automation suite built using REST Assured with request/response validation, schema checks.
          </p>
          <p className="mb-3 text-slate-600 dark:text-white">
            Focused on data consistency, backend validation, and reusable test utilities.
          </p>
          <div className="flex items-center justify-between mt-4">
          <a
            href="https://github.com/Dhiman07-create/ecommerce-api-automation"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-500 transition"
          >
            View on GitHub →
          </a>
          <Link
            to="/projects/ecommerce-api-automation"
            className="text-red-400 hover:text-red-500 transition"
          >
            View Details →
        </Link>
        </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
}

export default Projects;
