import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio/finn-fintech")({
  head: () => ({
    meta: [
      { title: "Finn Fintech — Case Study | SpaceGrey" },
      {
        name: "description",
        content:
          "How SpaceGrey built Finn Fintech's complete digital presence — website, analytics dashboard and marketing automation — from zero to one.",
      },
    ],
  }),
  component: Page,
});

const PHASES = [
  {
    n: "01",
    title: "Discovery & Requirements Mapping",
    duration: "Week 1",
    desc: "Defined the three core deliverables (website, analytics, automation) as independent workstreams with shared data infrastructure, given the compliance-sensitive nature of fintech.",
  },
  {
    n: "02",
    title: "Website UX & Trust-Focused Design",
    duration: "Week 1–3",
    desc: "Designed a website prioritising credibility signals — security badges, clear compliance messaging, transparent pricing — critical for fintech conversion.",
  },
  {
    n: "03",
    title: "Website Development",
    duration: "Week 2–4",
    desc: "Built a responsive, secure website with SSL, form validation, and integrated lead capture feeding directly into their CRM.",
  },
  {
    n: "04",
    title: "Analytics Dashboard Build",
    duration: "Week 4–6",
    desc: "Built a growth analytics dashboard tracking signups, activation rate, funnel drop-off points, and channel-level acquisition cost.",
  },
  {
    n: "05",
    title: "Growth Automation Setup",
    duration: "Week 6–7",
    desc: "Automated lead nurture sequences, internal Slack alerts for high-value signups, and a weekly automated performance digest to the founding team.",
  },
  {
    n: "06",
    title: "QA, Security Review & Launch",
    duration: "Week 7–8",
    desc: "Security audit of forms and data handling, load testing, and phased launch with monitoring in place.",
  },
];

const TECH = [
  "React",
  "Node.js",
  "PostgreSQL",
  "Stripe",
  "Zapier / Make",
  "Mixpanel",
  "HubSpot CRM",
];

const OUTCOMES = [
  { n: "8 wks", label: "Zero-to-one digital presence launched" },
  { n: "~70%", label: "Reduction in manual lead follow-up" },
  { n: "Real-time", label: "Funnel visibility for the founding team" },
  { n: "Scalable", label: "Infrastructure ready for the next growth stage" },
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
              A zero-to-one build — a new fintech brand needed everything at
              once.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Meta pills */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl grid sm:grid-cols-4 gap-4">
          {[
            ["Client", "Finn Fintech"],
            ["Industry", "Fintech"],
            ["Duration", "8 Weeks"],
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
                A new brand needing everything, built right.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                Finn Fintech was a zero-to-one build — a new fintech brand
                needing a trustworthy public-facing website, an internal
                analytics dashboard to track user acquisition and conversion,
                and automated workflows to reduce manual work in their growth
                operations.
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
                "SpaceGrey built our website from scratch, set up our analytics
                and automated key sales workflows — all in record time."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/15 grid place-items-center text-sm font-semibold text-gradient shrink-0">
                  PS
                </div>
                <div>
                  <div className="font-medium">Panjak Saluja</div>
                  <div className="text-sm text-white/40">CEO, Finn Fintech</div>
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
