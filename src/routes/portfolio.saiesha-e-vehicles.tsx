import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio/saiesha-e-vehicles")({
  head: () => ({
    meta: [
      { title: "Saiesha E-Vehicles — Case Study | SpaceGrey" },
      {
        name: "description",
        content:
          "How SpaceGrey built a complete sales analysis platform for Saiesha E-Vehicles, replacing manual spreadsheets with real-time intelligence.",
      },
    ],
  }),
  component: Page,
});

const PHASES = [
  {
    n: "01",
    title: "Data Discovery & Source Mapping",
    duration: "Week 1",
    desc: "Audited existing data sources: dealership sales records, marketing platforms, inventory systems. Identified inconsistencies and defined a unified data schema.",
  },
  {
    n: "02",
    title: "Data Pipeline & Warehouse Setup",
    duration: "Week 1–2",
    desc: "Built ETL pipelines to pull data from all channels into a centralised warehouse, ensuring clean, deduplicated, and reliably refreshed data.",
  },
  {
    n: "03",
    title: "Dashboard Architecture & Design",
    duration: "Week 2–3",
    desc: "Designed the analytics dashboard UX around the questions leadership actually needed answered: sales velocity by model, regional performance, channel ROI, and dealer-level breakdowns.",
  },
  {
    n: "04",
    title: "Dashboard Development",
    duration: "Week 3–5",
    desc: "Built the interactive analytics platform with real-time data refresh, drill-down filters, and exportable reports for leadership and dealer partners.",
  },
  {
    n: "05",
    title: "Testing & Stakeholder Training",
    duration: "Week 5–6",
    desc: "Validated data accuracy against manual reports, ran training sessions with the internal team, and set up automated weekly performance summaries via email.",
  },
];

const TECH = [
  "Python (ETL)",
  "PostgreSQL",
  "Power BI",
  "Looker Studio",
  "REST APIs",
  "Google Sheets Integration",
];

const OUTCOMES = [
  { n: "1", label: "Unified view of sales performance across all channels" },
  { n: "Minutes", label: "Manual reporting time cut from days to minutes" },
  { n: "Real-time", label: "Visibility into regional and model-level trends" },
  { n: "Zero", label: "Guesswork in inventory and marketing decisions" },
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
                "Automotive",
                "Analytics",
                "Sales Intelligence",
                "Dashboard Development",
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
              Complete Sales Analysis Platform
            </h1>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              From scattered spreadsheets to a single source of truth across
              every sales channel.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Meta pills */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl grid sm:grid-cols-4 gap-4">
          {[
            ["Client", "Saiesha E-Vehicles"],
            ["Industry", "Automotive / EV"],
            ["Duration", "6 Weeks"],
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
                Manual tracking across disconnected systems.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                Saiesha E-Vehicles was tracking sales performance manually
                across spreadsheets and disconnected dealer reports, with no
                unified view of what was working across channels — making it
                nearly impossible to make fast, data-backed decisions on
                inventory, marketing spend, or dealer performance.
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
            <div className="liquid-glass rounded-3xl p-10 border border-white/10">
              <p className="text-white/80 text-xl leading-relaxed italic mb-8">
                "The sales analysis platform they built gave us visibility we
                never had before. Data-driven decisions are now our default."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/15 grid place-items-center text-sm font-semibold text-gradient shrink-0">
                  MK
                </div>
                <div>
                  <div className="font-medium">Mahesh Kumar Nagpal</div>
                  <div className="text-sm text-white/40">
                    Founder, Saiesha E-Vehicles
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
