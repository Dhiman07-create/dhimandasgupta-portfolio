import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";

import Reveal from "./Reveal";

const contactCards = [
  {
    title: "Email",
    description: "For opportunities, collaborations, or technical discussions.",
    href: "mailto:dasguptadhiman5@gmail.com",
    label: "Send Email",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    description: "Connect professionally and explore my engineering journey.",
    href: "https://www.linkedin.com/in/dhiman-dasgupta/",
    label: "View Profile",
    icon: Linkedin,
  },
  {
    title: "GitHub",
    description: "Explore automation frameworks, pipelines, and engineering projects.",
    href: "https://github.com/Dhiman07-create",
    label: "View Repositories",
    icon: Github,
  },
];

function Contact() {
  return (
    <Reveal>
      <section
        id="contact"
        className="
          relative overflow-hidden
          px-6 md:px-10 py-24
          bg-zinc-50 dark:bg-zinc-950
          transition-colors duration-300
        "
      >
        {/* Background glow */}
        <div
          className="
            absolute top-0 left-0
            w-[450px] h-[450px]
            bg-blue-500/10
            blur-3xl rounded-full
            pointer-events-none
          "
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* HEADER */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
              Let’s Connect
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Open to engineering opportunities,
              collaboration, and conversations
              around automation, cloud, and quality engineering.
            </h2>
          </div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            
            {/* LEFT PANEL */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="
                rounded-3xl
                border border-zinc-200 dark:border-zinc-800
                bg-white/80 dark:bg-zinc-900/70
                backdrop-blur-xl
                p-8 md:p-10
                shadow-xl
              "
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="
                    flex items-center justify-center
                    w-14 h-14 rounded-2xl
                    bg-blue-500/10
                    border border-blue-500/20
                  "
                >
                  <MessageSquare
                    className="text-blue-500"
                    size={28}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    Contact Me
                  </h3>

                  <p className="text-zinc-500 dark:text-zinc-400">
                    Engineering-focused collaborations welcome.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                I’m always interested in discussing
                software engineering, automation frameworks,
                CI/CD systems, test infrastructure, and modern
                quality engineering practices.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                Whether it’s an SDET opportunity,
                automation engineering role,
                collaboration,
                or technical discussion —
                feel free to reach out.
              </p>

              {/* Availability indicator */}
              <div
                className="
                  mt-10
                  flex items-center gap-3
                  px-5 py-4 rounded-2xl
                  border border-green-500/20
                  bg-green-500/5
                "
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />

                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>

                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  Currently open to engineering opportunities
                </span>
              </div>
            </motion.div>

            {/* RIGHT CARDS */}
            <div className="grid gap-6">
              {contactCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.a
                    key={card.title}
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="
                      group
                      rounded-3xl
                      border border-zinc-200 dark:border-zinc-800
                      bg-white/80 dark:bg-zinc-900/70
                      backdrop-blur-xl
                      p-7
                      shadow-lg

                      hover:scale-[1.02]
                      hover:shadow-blue-500/10
                      hover:border-blue-500/40

                      transition-all duration-300
                    "
                  >
                    <div className="flex items-start justify-between">
                      
                      <div
                        className="
                          flex items-center justify-center
                          w-14 h-14 rounded-2xl
                          bg-blue-500/10
                          border border-blue-500/20
                        "
                      >
                        <Icon
                          className="text-blue-500"
                          size={26}
                        />
                      </div>

                      <ArrowUpRight
                        className="
                          text-zinc-400
                          group-hover:text-blue-500
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          transition-all duration-300
                        "
                        size={22}
                      />
                    </div>

                    <div className="mt-8">
                      <h3 className="text-2xl font-semibold mb-3">
                        {card.title}
                      </h3>

                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {card.description}
                      </p>

                      <div
                        className="
                          mt-6 inline-flex items-center gap-2
                          text-blue-500 font-medium
                        "
                      >
                        {card.label}
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* CLOSING CTA BANNER */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              relative overflow-hidden
              mt-10
              rounded-3xl
              border border-zinc-200 dark:border-zinc-800
              bg-white/80 dark:bg-zinc-900
              backdrop-blur-xl
              shadow-xl
              p-10 md:p-14
            "
          >
            {/* Glow */}
            <div className="absolute -top-24 -right-24 w-[320px] h-[320px] bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-[320px] h-[320px] bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white leading-tight max-w-xl">
                Hiring an SDET? Let&apos;s build{" "}
                <span className="text-blue-500 dark:text-blue-400">reliable systems</span>{" "}
                together.
              </h3>

              <a
                href="mailto:dasguptadhiman5@gmail.com"
                className="
                  shrink-0
                  inline-flex items-center gap-2
                  px-7 py-4
                  rounded-2xl
                  font-semibold
                  bg-gradient-to-r from-blue-500 to-indigo-500
                  text-white
                  shadow-lg
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.45)]
                  transition-all duration-300
                "
              >
                <Mail size={18} />
                Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Reveal>
  );
}

export default Contact;