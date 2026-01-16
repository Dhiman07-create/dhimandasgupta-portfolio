import Reveal from "./Reveal";
import EngineeringMetrics from "./EngineeringMetrics";

function About() {
  return (
    <Reveal>
      <section
        id="about"
        className="
          px-10 py-20
          bg-gray-100 dark:bg-gray-900
          transition-colors duration-300
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* About Text */}
          <div className="lg:col-span-2">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-6">
                About Me
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                Hello! I’m{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  Dhiman Dasgupta
                </span>
                , an aspiring{" "}
                <span className="font-medium text-blue-500">
                  Data Engineer
                </span>{" "}
                and
                <span className="font-medium text-indigo-500">
                  {" "}SDET
                </span>{" "}
                with experience in automation testing, API validation, and cloud
                technologies.
                <br /><br />
                I’m passionate about building scalable automation frameworks,
                optimizing workflows, and learning cutting-edge technologies to
                solve real-world problems.
              </p>
            </div>
          </div>

          {/* Side Metrics Card */}
          <div className="lg:col-span-1 lg:pt-14">
            <EngineeringMetrics />
          </div>

        </div>
      </section>
    </Reveal>
  );
}

export default About;
