import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/services/software-development")({
  head: () => ({ meta: [{ title: "Software Development — SpaceGrey" }] }),
  component: SoftwareDevPage,
});

const PROJECTS = [
  {
    title: "Multi-Tenant SaaS Platform (B2B)",
    desc: "Full-stack SaaS with org-level user management, role-based access, billing (Stripe), and admin dashboards — built as a template that can be adapted for any vertical.",
  },
  {
    title: "Custom CRM / Client Portal",
    desc: "Bespoke CRM for agencies to manage clients, projects, invoices, and communication in one place, replacing spreadsheets and disconnected tools.",
  },
  {
    title: "E-commerce Storefront with Custom Checkout Logic",
    desc: "Headless commerce build (e.g., Shopify headless or custom Next.js storefront) with custom pricing rules, subscription products, and personalised recommendations.",
  },
  {
    title: "Internal Tools / Admin Dashboard Builder",
    desc: "Rapid internal tool development — inventory trackers, approval workflows, ops dashboards — for brands that need lightweight software without hiring a full dev team.",
  },
  {
    title: "API Development & Integration Layer",
    desc: "Building and documenting REST/GraphQL APIs that connect a brand's disparate systems (ERP, CRM, marketing tools) into a single unified data layer.",
  },
];

function SoftwareDevPage() {
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
              Software Development
            </h1>
            <p className="text-lg text-white/55 max-w-2xl leading-relaxed">
              Enterprise-grade web applications, SaaS platforms, APIs and mobile
              apps — built with modern stacks and engineered to scale without
              rewrites.
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
                Code as a long-term asset.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                We build with TypeScript on the frontend and backend by default
                — it reduces bugs, improves collaboration and makes future
                maintenance significantly cheaper. Every project ships with
                automated tests, CI/CD pipelines and observability from day one.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Who It's For
              </div>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                Founders building their first product. Enterprises replacing
                legacy systems. Teams that need senior engineering muscle to
                ship something complex, fast.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <CTAStrip />
    </PageShell>
  );
}
