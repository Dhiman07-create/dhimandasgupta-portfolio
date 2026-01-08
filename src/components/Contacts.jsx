function Contact() {
  return (
    <section
      id="contact"
      className="px-10 py-20 bg-gray-800 text-gray-100"
    >
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

      <p className="mb-6 text-lg md:text-xl max-w-3xl">
        I’m always open to new opportunities, collaborations, or just a chat about tech. 
        Feel free to reach out to me via email or connect on LinkedIn.
      </p>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
        <a
          href="mailto:dasguptadhiman5@gmail.com"
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition text-center"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/dhiman-dasgupta/"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition text-center"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/Dhiman07-create"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition text-center"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
