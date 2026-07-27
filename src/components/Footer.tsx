import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import orbit from "@/assets/spacegrey-orbit.png";

const SOCIALS = [
  { Icon: Twitter, href: "https://x.com/Space_Grey225", label: "X / Twitter" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/spacegreyyy", label: "LinkedIn" },
  { Icon: Github, href: "https://github.com/spacegrey", label: "GitHub" },
];

const cols = [
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Pricing", "/pricing"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Services",
    links: [
      ["Artificial Intelligence", "/services/artificial-intelligence"],
      ["Software Development", "/services/software-development"],
      ["Automation", "/services/automation"],
      ["Cloud & DevOps", "/services/cloud-devops"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["AI Solutions", "/solutions/ai-solutions"],
      ["Enterprise Solutions", "/solutions/enterprise-solutions"],
      ["SaaS Solutions", "/solutions/saas-solutions"],
      ["Analytics Solutions", "/solutions/analytics-solutions"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Portfolio", "/portfolio"],
      ["Industries", "/industries"],
      ["Book a Call", "/book-a-call"],
      ["Start a Project", "/contact"],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] mt-32">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Newsletter */}
        <div className="glass rounded-3xl p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gradient max-w-lg">
              Signals from deep space.
            </h3>
            <p className="mt-3 text-sm text-white/50 max-w-md">
              Monthly dispatch on AI, engineering and product craft. No noise.
            </p>
          </div>
          <form className="flex w-full md:w-auto items-center gap-2 glass-strong rounded-full p-1.5 pl-5 min-w-[320px]">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-white/30"
            />
            <button className="rounded-full bg-white text-black px-4 py-2 text-xs font-medium hover:scale-[1.02] transition">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <img src={orbit} alt="SpaceGrey" className="h-12 w-12 invert opacity-90" />
            </div>
            <p className="mt-5 text-sm text-white/50 max-w-xs">
              We design and engineer AI systems, enterprise software and automation platforms for
              teams building the future.
            </p>
            <div className="mt-4 text-sm text-white/40 space-y-1">
              <div>Delhi, India</div>
              <a href="mailto:spacegreyyy522@gmail.com" className="hover:text-white/70 transition">spacegreyyy522@gmail.com</a>
            </div>
            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-sm text-white/70 hover:text-white transition inline-flex items-center gap-1 group"
                    >
                      {label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} SpaceGrey. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>

        {/* Big wordmark */}
        <div className="mt-16 select-none overflow-hidden">
          <div className="text-[18vw] leading-none font-bold tracking-tighter text-white/[0.12] text-center transition-all duration-700 hover:text-white/[0.22] cursor-default">
            SPACEGREY
          </div>
        </div>
      </div>
    </footer>
  );
}
