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
          bg-slate-50 dark:bg-slate-950
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
          <div className="mb-16">
            <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold mb-4">
              Let’s Connect
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl">
              Open to engineering opportunities,
              collaboration, and conversations
              around automation, cloud, and data systems.
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
                border border-slate-200 dark:border-slate-800
                bg-white/80 dark:bg-slate-900/70
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

                  <p className="text-slate-500 dark:text-slate-400">
                    Engineering-focused collaborations welcome.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                I’m always interested in discussing
                software engineering, automation frameworks,
                CI/CD systems, cloud workflows, and modern
                quality engineering practices.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                Whether it’s an SDET opportunity,
                data engineering role,
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
                      border border-slate-200 dark:border-slate-800
                      bg-white/80 dark:bg-slate-900/70
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
                          text-slate-400
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

                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
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
        </div>
      </section>
    </Reveal>
  );
}

export default Contact;