import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — SpaceGrey" },
      {
        name: "description",
        content:
          "Transparent pricing for AI, software and product engineering.",
      },
      { property: "og:title", content: "Pricing — SpaceGrey" },
    ],
  }),
  component: PricingPage,
});

/*
 * PRICING PAGE — Temporarily commented out. Re-enable when pricing is finalized.
 *
 * const PLANS = [
 *   { name: "Starter Sprint", tag: "Startups & MVPs", price: "₹2L", period: "starting from",
 *     desc: "For founders who need to validate fast. A focused 4–6 week sprint.",
 *     features: ["MVP or prototype", "UI/UX design included", "1 core integration", "Basic deployment", "2 weeks post-launch support"],
 *     cta: "Get a Quote", highlight: false },
 *   { name: "Growth Build", tag: "Scale-ups & Products", price: "₹8L", period: "starting from",
 *     desc: "For companies that have validated and need to scale. 8–16 week program.",
 *     features: ["Full-stack product development", "AI/ML integration", "Multiple service integrations", "CI/CD & cloud deployment", "3 months support & SLA", "Dedicated team of 3–5"],
 *     cta: "Start a Project", highlight: true },
 *   { name: "Enterprise Program", tag: "Enterprises & Scale", price: "Custom", period: "tailored to scope",
 *     desc: "Mission-critical platforms, AI transformation and long-term engineering partnerships.",
 *     features: ["Dedicated senior team", "Enterprise AI & automation", "Security & compliance built-in", "Multi-phase delivery", "12-month support & evolution", "CTO advisory included"],
 *     cta: "Book a Call", highlight: false },
 * ];
 *
 * const ADDONS = [
 *   ["AI Strategy Workshop", "2-day deep dive with your leadership team.", "₹75,000"],
 *   ["Security Audit", "Full stack penetration testing and report.", "₹1,00,000"],
 *   ["UI/UX Design Sprint", "End-to-end design system + prototypes.", "₹1,50,000"],
 *   ["Dedicated AI Engineer", "Monthly retainer for an embedded AI engineer.", "₹1,20,000 / mo"],
 *   ["Maintenance Plan", "24/7 monitoring, updates and bug fixes.", "₹40,000 / mo"],
 *   ["Technical Consulting", "Ad hoc CTO advisory and architecture reviews.", "₹12,000 / hr"],
 * ];
 *
 * function FullPricingPage() {
 *   return (
 *     <PageShell>
 *       <PageHero eyebrow="Pricing" title="Transparent, outcome-driven pricing."
 *         subtitle="Every project is scoped honestly. No surprise invoices. No scope creep without sign-off." />
 *       ... (plans + addons sections) ...
 *       <CTAStrip />
 *     </PageShell>
 *   );
 * }
 */

function PricingPage() {
  return (
    <PageShell>
      {/* Pricing temporarily hidden — content preserved in comments above */}
      <section className="relative pt-40 pb-32 px-6 min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] tracking-[0.2em] uppercase text-white/60 mb-8">
              Pricing
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">
              Coming Soon.
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              We're finalizing our pricing structure. In the meantime, reach out
              and we'll put together a custom quote for your project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:scale-[1.02] transition"
            >
              Get a Custom Quote
            </Link>
          </Reveal>
        </div>
      </section>
      <CTAStrip />
    </PageShell>
  );
}
