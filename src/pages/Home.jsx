import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MetricsStrip from "../components/MetricsStrip";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contacts";
import PageTransition from "../components/PageTransition";
import useSEO from "../hooks/useSEO";

function Home() {
  useSEO({
    title: "Dhiman Dasgupta | SDET & Test Automation Engineer",
    description:
      "Dhiman Dasgupta is an SDET and Test Automation Engineer specializing in Playwright, Selenium, Appium, REST Assured, and CI/CD pipelines. Explore case studies, skills, and experience.",
    path: "/",
  });

  return (
    <>
      <Navbar />
      <PageTransition>
        <Hero />
        <MetricsStrip />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </PageTransition>
    </>
  );
}

export default Home;
