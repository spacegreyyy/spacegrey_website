import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio/bharat-fintech")({
  head: () => ({
    meta: [
      { title: "Bharat Fintech — Case Study | SpaceGrey" },
      {
        name: "description",
        content:
          "How SpaceGrey rebuilt Bharat Fintech's digital presence and replaced manual sales tracking with integrated analytics and automation.",
      },
    ],
  }),
  component: Page,
});

const PHASES = [
  {
    n: "01",
    title: "Audit & Strategy",
    duration: "Week 1",
    desc: "Audited the existing site's conversion funnel, reviewed current lead sources, and identified where automation could immediately reduce manual sales ops work.",
  },
  {
    n: "02",
    title: "Website Redesign & Rebuild",
    duration: "Week 1–3",
    desc: "Rebuilt the website with conversion-optimised landing pages, clearer product messaging, and faster load times, integrated directly with their CRM for lead capture.",
  },
  {
    n: "03",
    title: "Analytics Stack Integration",
    duration: "Week 3–4",
    desc: "Connected GA4, ad platforms, and CRM data into one integrated analytics view so the team could see which channels drove actual signed customers, not just clicks.",
  },
  {
    n: "04",
    title: "Sales & Marketing Automation",
    duration: "Week 4–6",
    desc: "Automated lead scoring, follow-up sequences, and internal handoff workflows between marketing and sales — eliminating manual spreadsheet tracking.",
  },
  {
    n: "05",
    title: "Testing & Rollout",
    duration: "Week 6–7",
    desc: "Ran the new stack in parallel with the old process for one week to validate accuracy before fully cutting over.",
  },
];

const TECH = [
  "React",
  "HubSpot CRM",
  "Zapier / Make",
  "GA4",
  "Google Ads API",
  "Meta Ads API",
];

const OUTCOMES = [
  { n: "Unified", label: "View of marketing spend vs. actual conversions" },
  { n: "Zero", label: "Manual sales tracking — fully automated" },
  { n: "Rebuilt", label: "Digital presence optimised for lead conversion" },
  { n: "Faster", label: "Lead response time through automated routing" },
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
                "Fintech",
                "Full-Stack",
                "Web Development",
                "Analytics",
                "Automation",
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
              Website, Sales Analysis & Automation
            </h1>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              Complete digital presence overhaul with integrated analytics and
              automation stack.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Meta pills */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl grid sm:grid-cols-4 gap-4">
          {[
            ["Client", "Bharat Fintech"],
            ["Industry", "Fintech"],
            ["Duration", "7 Weeks"],
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
                A site that wasn't converting and a team tracking everything
                manually.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                Bharat Fintech needed a complete digital presence overhaul —
                their existing site wasn't converting, they had no visibility
                into which channels were actually driving quality leads, and
                their sales team was manually tracking every follow-up in
                spreadsheets.
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
                "Their work on our digital infrastructure gave us the foundation
                to scale. Reliable, clean and exactly on brief."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/15 grid place-items-center text-sm font-semibold text-gradient shrink-0">
                  DV
                </div>
                <div>
                  <div className="font-medium">Deepak Verma</div>
                  <div className="text-sm text-white/40">
                    Founder, Bharat Fintech
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
