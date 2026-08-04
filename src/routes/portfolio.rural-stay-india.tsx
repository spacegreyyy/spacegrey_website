import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio/rural-stay-india")({
  head: () => ({
    meta: [
      { title: "Rural Stay India — Case Study | SpaceGrey" },
      {
        name: "description",
        content:
          "How SpaceGrey built Rural Stay India's booking-capable hospitality platform and became their long-term technology partner.",
      },
    ],
  }),
  component: Page,
});

const PHASES = [
  {
    n: "01",
    title: "Discovery & Platform Architecture",
    duration: "Week 1",
    desc: "Mapped the core platform requirements: listing management, location-based search, booking inquiry flow, and admin control for adding and editing properties.",
  },
  {
    n: "02",
    title: "UX Design for Discovery & Booking",
    duration: "Week 1–3",
    desc: "Designed an intuitive property discovery experience — filters by location, price, amenities — optimised for a largely mobile, first-time-booking audience.",
  },
  {
    n: "03",
    title: "Platform Development",
    duration: "Week 3–5",
    desc: "Built the platform with an admin panel for the Rural Stay India team to manage listings independently, plus a booking inquiry system connected to their operations team.",
  },
  {
    n: "04",
    title: "Testing & Launch",
    duration: "Week 5–6",
    desc: "Tested booking flows end-to-end, optimised for low-bandwidth mobile users (a key consideration for rural/travel audiences), and launched.",
  },
  {
    n: "05",
    title: "Ongoing Tech Partnership",
    duration: "Continuous",
    desc: "Moved into a retainer relationship: monthly feature additions, performance monitoring, uptime support, and platform scaling as new locations were onboarded.",
  },
];

const TECH = [
  "React / Next.js",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Cloudinary",
  "Admin CMS Panel",
];

const OUTCOMES = [
  { n: "Self-mgd", label: "Fully self-manageable property listing platform" },
  { n: "Mobile-first", label: "Booking flow optimised for mobile users" },
  {
    n: "Ongoing",
    label: "Technical partnership ensuring continuous evolution",
  },
  {
    n: "Scalable",
    label: "Architecture supporting new locations without rebuild",
  },
];

function Page() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"
            >
              <ArrowLeft className="h-4 w-4" /> All Projects
            </Link>
          </Reveal>
          <Reveal delay={60}>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Travel",
                "Platform",
                "Web Development",
                "Ongoing Partnership",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full liquid-glass px-3 py-1 text-xs text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-4">
              Website & Ongoing Tech Support
            </h1>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              A booking-capable hospitality platform built for a mobile-first,
              rural-travel audience — with a long-term partnership to back it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Meta pills */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl grid sm:grid-cols-4 gap-4">
          {[
            ["Client", "Rural Stay India"],
            ["Industry", "Hospitality / Travel"],
            ["Duration", "6 wks + retainer"],
            ["Year", "2025"],
          ].map(([k, v]) => (
            <Reveal key={k}>
              <div className="liquid-glass rounded-2xl p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                  {k}
                </div>
                <div className="mt-1.5 font-medium text-white">{v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl space-y-20">
          {/* Challenge */}
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                The Challenge
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-6">
                A platform to showcase, manage and book rural stays.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                Rural Stay India needed a booking-capable hospitality platform
                to showcase and manage rural stay listings across multiple
                locations — plus a long-term technical partner, since they
                didn't have in-house engineering to maintain and evolve the
                platform post-launch.
              </p>
            </div>
          </Reveal>

          {/* Workflow */}
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Our Workflow
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-10">
                How we got there.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PHASES.map((p, i) => (
                <Reveal key={p.n} delay={i * 60}>
                  <div className="liquid-glass rounded-3xl p-7 liquid-glass h-full">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-bold text-gradient opacity-40">
                        {p.n}
                      </span>
                      <span className="text-xs text-white/35 border border-white/10 rounded-full px-2.5 py-1">
                        {p.duration}
                      </span>
                    </div>
                    <div className="text-base font-semibold mb-3">
                      {p.title}
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Tech Stack
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-8">
                Tools we shipped with.
              </h2>
              <div className="flex flex-wrap gap-3">
                {TECH.map((t) => (
                  <span
                    key={t}
                    className="rounded-full liquid-glass px-5 py-2.5 text-sm text-white/80 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Outcomes */}
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                The Outcome
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-10">
                Results delivered.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {OUTCOMES.map((o, i) => (
                <Reveal key={o.label} delay={i * 60}>
                  <div className="liquid-glass rounded-3xl p-8 text-center liquid-glass">
                    <div className="text-2xl font-bold text-gradient mb-3">
                      {o.n}
                    </div>
                    <div className="text-sm text-white/50 leading-snug">
                      {o.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <Reveal>
            <div className="liquid-glass rounded-3xl p-10 border border-white/10">
              <p className="text-white/80 text-xl leading-relaxed italic mb-8">
                "They understood our hospitality vision immediately. The website
                is beautiful and the tech support ongoing has been excellent."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/15 grid place-items-center text-sm font-semibold text-gradient shrink-0">
                  AS
                </div>
                <div>
                  <div className="font-medium">Ashish Sharma</div>
                  <div className="text-sm text-white/40">
                    Founder, Rural Stay India
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <Reveal>
          <div className="mx-auto max-w-5xl liquid-glass rounded-3xl p-12 text-center border border-white/10">
            <h3 className="text-3xl font-semibold text-gradient mb-4">
              Want results like this?
            </h3>
            <p className="text-white/50 mb-8 max-w-md mx-auto">
              Let's build something exceptional together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:scale-[1.02] transition"
            >
              Let's talk <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
