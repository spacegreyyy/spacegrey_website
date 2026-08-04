import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/services/data-analytics")({
  head: () => ({ meta: [{ title: "Data & Analytics — SpaceGrey" }] }),
  component: DataAnalyticsPage,
});

const PROJECTS = [
  {
    title: "Unified Marketing Analytics Dashboard",
    desc: "Pulls data from Google Ads, Meta Ads, GA4, and email platforms into one live dashboard (Looker Studio/custom BI tool) showing ROAS, CAC, and funnel metrics.",
  },
  {
    title: "Customer Segmentation & Cohort Analysis Tool",
    desc: "Analyses purchase/behaviour data to segment customers by value, churn risk, and lifecycle stage — feeding into targeted marketing campaigns.",
  },
  {
    title: "Sales Performance & Forecasting Dashboard",
    desc: "Real-time dashboard tracking pipeline health, rep performance, and revenue forecasts using historical CRM data and predictive trendlines.",
  },
  {
    title: "Data Warehouse & ETL Pipeline Setup",
    desc: "Building a clean data pipeline (using tools like dbt, Airflow, or BigQuery) that consolidates data from multiple sources into a single source of truth.",
  },
  {
    title: "Competitive & Market Benchmarking Reports",
    desc: "Automated data collection and visualisation comparing a brand's key metrics (pricing, social engagement, SEO rankings) against competitors on a recurring basis.",
  },
];

function DataAnalyticsPage() {
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
              Data & Analytics
            </h1>
            <p className="text-lg text-white/55 max-w-2xl leading-relaxed">
              Pipelines, warehouses, dashboards and BI. We turn fragmented data
              into decisions — clean, fast, and always up to date.
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
                  <div className="liquid-glass rounded-3xl p-7 liquid-glass h-full">
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
                One source of truth.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                We start with the decisions you need to make, then work
                backwards to the data. Every pipeline we build is documented,
                monitored, and designed for the team's actual reporting cadence
                — not just an analytics demo.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Who It's For
              </div>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                Teams making decisions on gut feel because their data is too
                scattered to use. Growth companies needing a single marketing
                attribution view. Operations teams spending hours on manual
                reporting.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <CTAStrip />
    </PageShell>
  );
}
