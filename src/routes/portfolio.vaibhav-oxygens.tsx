import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio/vaibhav-oxygens")({
  head: () => ({
    meta: [
      { title: "Vaibhav Oxygens — Case Study | SpaceGrey" },
      {
        name: "description",
        content:
          "How SpaceGrey delivered a full digital transformation for Vaibhav Oxygens — website, sales analytics and operational automation for a healthcare equipment supplier.",
      },
    ],
  }),
  component: Page,
});

const PHASES = [
  {
    n: "01",
    title: "Discovery & Compliance Review",
    duration: "Week 1",
    desc: "Understood healthcare-specific requirements around messaging accuracy, certifications display, and trust signals needed for medical equipment buyers — hospitals, clinics, distributors.",
  },
  {
    n: "02",
    title: "Website Design & Development",
    duration: "Week 1–4",
    desc: "Built a website establishing credibility with certifications, product catalogs, and clear B2B inquiry pathways for bulk and institutional buyers.",
  },
  {
    n: "03",
    title: "Sales Analytics Setup",
    duration: "Week 4–5",
    desc: "Built a dashboard tracking inquiry volume, product-line demand trends, and regional order patterns to inform inventory and production planning.",
  },
  {
    n: "04",
    title: "Operational Automation",
    duration: "Week 5–7",
    desc: "Automated the inquiry-to-quote workflow, internal notifications for urgent/bulk orders, and follow-up sequences for pending client conversations — reducing manual coordination between sales and operations.",
  },
  {
    n: "05",
    title: "Testing & Full Rollout",
    duration: "Week 7–8",
    desc: "Validated automation workflows against real order scenarios, trained the internal team, and launched with monitoring in place.",
  },
];

const TECH = [
  "React",
  "Node.js",
  "PostgreSQL",
  "Zapier / Make",
  "WhatsApp Business API",
  "Power BI / Looker",
];

const OUTCOMES = [
  {
    n: "Full",
    label: "Digital transformation from offline-first to digital-first",
  },
  {
    n: "Fast",
    label: "Automated inquiry-to-quote reducing response time significantly",
  },
  {
    n: "Real-time",
    label: "Demand visibility across product lines and regions",
  },
  { n: "Reduced", label: "Manual coordination between sales and operations" },
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
                "Healthcare",
                "Full-Stack",
                "Web Development",
                "Analytics",
                "Automation",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-4">
              Website, Sales Analysis & Automation
            </h1>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              A full digital transformation for a healthcare equipment supplier
              — from offline-first to digital-first operations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Meta pills */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl grid sm:grid-cols-4 gap-4">
          {[
            ["Client", "Vaibhav Oxygens"],
            ["Industry", "Healthcare / Medical Equipment"],
            ["Duration", "8 Weeks"],
            ["Year", "2025"],
          ].map(([k, v]) => (
            <Reveal key={k}>
              <div className="glass rounded-2xl p-5">
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
                A full digital transformation for a healthcare supplier.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                Vaibhav Oxygens needed a full digital transformation — a
                professional web presence appropriate for a healthcare/medical
                equipment supplier, visibility into sales and demand patterns,
                and automation to reduce manual work in order processing and
                client follow-ups.
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
                  <div className="glass rounded-3xl p-7 border border-white/[0.08] h-full">
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
                    className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm text-white/80 font-medium"
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
                  <div className="glass rounded-3xl p-8 text-center border border-white/[0.08]">
                    <div className="text-3xl font-bold text-gradient mb-3">
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
            <div className="glass rounded-3xl p-10 border border-white/10">
              <p className="text-white/80 text-xl leading-relaxed italic mb-8">
                "SpaceGrey digitised our operations end-to-end. Website,
                analytics, automation — delivered without a single hiccup."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/15 grid place-items-center text-sm font-semibold text-gradient shrink-0">
                  VA
                </div>
                <div>
                  <div className="font-medium">Vaibhav Arora</div>
                  <div className="text-sm text-white/40">
                    Director, Vaibhav Oxygens
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <Reveal>
          <div className="mx-auto max-w-5xl glass rounded-3xl p-12 text-center border border-white/10">
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
