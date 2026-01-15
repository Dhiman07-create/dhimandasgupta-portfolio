import Reveal from "./Reveal";

function Skills() {
  return (
    <Reveal>
    <section
      id="skills"
      className="px-10 py-20 bg-gray-200 dark:bg-gray-800"
    >
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        <div>
          <h4 className="text-xl font-semibold mb-2">Test Automation</h4>
          <p>Selenium, Appium, REST Assured, Selenide, TestNG, JUnit, Postman</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2">Programming & Scripting</h4>
          <p>Java, JavaScript, SQL</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2">CI/CD & DevOps</h4>
          <p>Git, GitHub, GitHub Actions, Maven, Jenkins (basic)</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2">Databases & Data</h4>
          <p>PostgreSQL, Database Validation, Data Modeling (beginner)</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2">Cloud & Tools</h4>
          <p>Google Cloud Platform (learning), JMeter, Docker (basic)</p>
        </div>
      </div>
    </section>
    </Reveal>
  );
}

export default Skills;
