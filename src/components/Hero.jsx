function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-start h-screen px-10 bg-slate-900 text-gray-100"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Dhiman Dasgupta
      </h1>
      <p className="text-xl md:text-2xl mb-6">
        Aspiring Data Engineer | SDET | Automation & Cloud Enthusiast
      </p>
      <a
        href="#contact"
        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Get in Touch
      </a>
    </section>
  );
}

export default Hero;
