import { Mail, Linkedin, Github } from "lucide-react";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: Mail, href: "mailto:dasguptadhiman5@gmail.com", label: "Email" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/dhiman-dasgupta/",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/Dhiman07-create",
    label: "GitHub",
  },
];

function Footer() {
  return (
    <footer
      className="
        relative overflow-hidden
        bg-zinc-100 dark:bg-zinc-950
        border-t border-zinc-200 dark:border-zinc-800
        pt-16 pb-8
        px-6 md:px-10
        transition-colors duration-300
      "
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Wordmark */}
        <h2
          className="
            text-center
            whitespace-nowrap
            font-black
            leading-none
            tracking-tight
            text-transparent
            bg-clip-text
            bg-gradient-to-b
            from-zinc-400/60 to-zinc-400/0
            dark:from-zinc-600/60 dark:to-zinc-600/0
            text-[clamp(2.25rem,9vw,8rem)]
            select-none
          "
        >
          DHIMAN{"  "}DASGUPTA
        </h2>

        {/* Nav links */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="mt-8 flex justify-center gap-4">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="
                  w-11 h-11 rounded-xl
                  flex items-center justify-center
                  border border-zinc-200 dark:border-zinc-800
                  bg-white/70 dark:bg-zinc-900/70
                  text-zinc-600 dark:text-zinc-300
                  hover:text-blue-500 hover:border-blue-500/40
                  transition-all duration-300
                "
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} Dhiman Dasgupta. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
