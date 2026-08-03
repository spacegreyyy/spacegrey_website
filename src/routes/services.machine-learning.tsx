import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/services/machine-learning")({
  head: () => ({ meta: [{ title: "Machine Learning — SpaceGrey" }] }),
  component: MLPage,
});

const PROJECTS = [
  {
    title: "Demand Forecasting Model",
    desc: "ML model predicting product demand/seasonality for e-commerce or retail brands to optimise inventory and reduce stockouts/overstock.",
  },
  {
    title: "Customer Churn Prediction Model",
    desc: "Predicts which customers are likely to churn based on behaviour patterns, enabling proactive retention campaigns — includes a scoring dashboard for the client's team.",
  },
  {
    title: "Personalised Recommendation Engine",
    desc: '"You might also like" style recommendation system for e-commerce or content platforms, built on collaborative filtering or embedding-based similarity.',
  },
  {
    title: "Image Recognition for Quality/Compliance Checks",
    desc: "Computer vision model for brands needing automated visual QA — e.g., product defect detection, brand-logo compliance in user-generated content.",
  },
  {
    title: "Dynamic Pricing Model",
    desc: "ML-driven pricing engine that adjusts prices based on demand, competitor pricing, and inventory levels for e-commerce clients.",
  },
];

function MLPage() {
  return (
    <PageShell>
      <section className="relative pt-40 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"
            >
              <ArrowLeft className="h-4 w-4" /> All Services
            </Link>
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">
              Service
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">
              Machine Learning
            </h1>
            <p className="text-lg text-white/55 max-w-2xl leading-relaxed">
              Forecasting, recommendations, NLP and computer vision. We build
              and deploy ML systems that create measurable business value — not
              just model experiments.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl space-y-16">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Example Projects
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-10">
                What we build.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {PROJECTS.map((p, i) => (
                <Reveal key={p.title} delay={i * 60}>
                  <div className="glass rounded-3xl p-7 border border-white/[0.08] h-full">
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

          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Our Approach
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-5">
                Models built for the real world.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                Every ML project starts with defining the business metric we're
                optimising for — not just model accuracy. We iterate on
                features, run offline and online evaluations, and ship models
                into production with monitoring, retraining pipelines, and drift
                detection built in.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Who It's For
              </div>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                E-commerce and retail brands looking to optimise inventory or
                personalise at scale. B2B companies wanting to predict churn or
                lifetime value. Any business with enough historical data to make
                predictions that improve decisions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <CTAStrip />
    </PageShell>
  );
}
