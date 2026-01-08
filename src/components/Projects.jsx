function Projects() {
  return (
    <section
      id="projects"
      className="px-10 py-20 bg-gray-900 text-gray-100"
    >
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
        {/* Project 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h4 className="text-2xl font-semibold mb-3">🛒 Flipkart E-commerce Automation</h4>
          <p className="mb-3">
            End-to-end automation framework for Flipkart covering UI, API,
            and regression scenarios using Selenium, REST Assured, and TestNG.
          </p>
          <p className="mb-3">
            Integrated CI/CD using GitHub Actions with scheduled runs and detailed test reporting.
          </p>
          <a
            href="https://github.com/Dhiman07-create/flipkart-regression"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-500 transition"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h4 className="text-2xl font-semibold mb-3">📱 Mobile Automation Testing (Android)</h4>
          <p className="mb-3">
            Automated Android app flows using Appium, Selenium, and Java including login, field assignments, image uploads, and estimate validation.
          </p>
          <p className="mb-3">
            Executed tests remotely via GitHub Actions with emulator setup and result assertions.
          </p>
          <a
            href="https://github.com/Dhiman07-create/ecommerce-mobile-app-automation"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-500 transition"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h4 className="text-2xl font-semibold mb-3">⚙️ API Automation & DB Validation</h4>
          <p className="mb-3">
            API automation suite built using REST Assured with request/response validation, schema checks, and database verification using PostgreSQL.
          </p>
          <p className="mb-3">
            Focused on data consistency, backend validation, and reusable test utilities.
          </p>
          <a
            href="https://github.com/Dhiman07-create/ecommerce-api-automation"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-500 transition"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
