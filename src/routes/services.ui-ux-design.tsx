import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/services/ui-ux-design")({
  head: () => ({ meta: [{ title: "UI/UX Design — SpaceGrey" }] }),
  component: UIUXPage,
});

const PROJECTS = [
  {
    title: "Full Brand Website Redesign (UX Audit + Redesign)",
    desc: "Complete UX audit identifying friction points, followed by a redesigned, conversion-focused website with a full design system/component library.",
  },
  {
    title: "SaaS Product Onboarding Flow Redesign",
    desc: "Redesigning a product's first-run experience to improve activation rates — includes user flow mapping, wireframes, and interactive prototypes.",
  },
  {
    title: "Mobile App UI Kit & Design System",
    desc: "A comprehensive, reusable design system (components, tokens, guidelines) for a brand scaling their app across multiple features and teams.",
  },
  {
    title: "E-commerce Conversion Rate Optimisation (CRO) Design",
    desc: "Redesigning product pages, cart, and checkout flow based on heatmap/session data to reduce drop-off and increase conversions.",
  },
  {
    title: "Design System & Component Library for Agencies",
    desc: "Building a scalable Figma + code (Storybook) design system that an agency can reuse across multiple client projects to speed up delivery.",
  },
];

function UIUXPage() {
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
              UI / UX Design
            </h1>
            <p className="text-lg text-white/55 max-w-2xl leading-relaxed">
              Product design, dashboard engineering, design systems and
              conversion-focused interfaces. We design software that people
              actually want to use.
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
                What we design.
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
                Design that ships.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                We design with the handoff in mind — every component is built to
                translate directly into code. We deliver Figma files with design
                tokens, a documented component library, and interactive
                prototypes for key flows before development starts.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Who It's For
              </div>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                Brands whose current UI is hurting conversion. Product teams
                whose design system has become inconsistent. Agencies who want a
                reusable design foundation across client work.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <CTAStrip />
    </PageShell>
  );
}
