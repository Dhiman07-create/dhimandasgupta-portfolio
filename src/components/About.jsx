import Reveal from "./Reveal";

function About() {
  return (
    <Reveal>
    <section
      id="about"
      className="px-10 py-20 bg-gray-100 dark:bg-gray-900"
    >
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
        Hello! I’m Dhiman Dasgupta, an aspiring Data Engineer and SDET with experience in automation testing, API validation, and cloud technologies. I’m passionate about building scalable automation frameworks, optimizing workflows, and learning cutting-edge technologies to solve real-world problems.
      </p>
    </section>
    </Reveal>
  );
}

export default About;
