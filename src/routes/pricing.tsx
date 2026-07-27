import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
    head: () => ({
        meta: [
            { title: "Pricing — SpaceGrey" },
            { name: "description", content: "Transparent pricing for AI, software and product engineering. From startup sprints to enterprise programs." },
            { property: "og:title", content: "Pricing — SpaceGrey" },
            { property: "og:description", content: "No hidden fees. Honest scoping. Custom quotes for serious projects." },
        ],
    }),
    component: PricingPage,
});

const PLANS = [
    {
        name: "Starter Sprint",
        tag: "Startups & MVPs",
        price: "₹2L",
        period: "starting from",
        desc: "For founders who need to validate fast. A focused 4–6 week sprint.",
        features: [
            "MVP or prototype",
            "UI/UX design included",
            "1 core integration",
            "Basic deployment",
            "2 weeks post-launch support",
        ],
        cta: "Get a Quote",
        highlight: false,
    },
    {
        name: "Growth Build",
        tag: "Scale-ups & Products",
        price: "₹8L",
        period: "starting from",
        desc: "For companies that have validated and need to scale. 8–16 week program.",
        features: [
            "Full-stack product development",
            "AI/ML integration",
            "Multiple service integrations",
            "CI/CD & cloud deployment",
            "3 months support & SLA",
            "Dedicated team of 3–5",
        ],
        cta: "Start a Project",
        highlight: true,
    },
    {
        name: "Enterprise Program",
        tag: "Enterprises & Scale",
        price: "Custom",
        period: "tailored to scope",
        desc: "Mission-critical platforms, AI transformation and long-term engineering partnerships.",
        features: [
            "Dedicated senior team",
            "Enterprise AI & automation",
            "Security & compliance built-in",
            "Multi-phase delivery",
            "12-month support & evolution",
            "CTO advisory included",
        ],
        cta: "Book a Call",
        highlight: false,
    },
];

const ADDONS = [
    ["AI Strategy Workshop", "2-day deep dive with your leadership team.", "₹75,000"],
    ["Security Audit", "Full stack penetration testing and report.", "₹1,00,000"],
    ["UI/UX Design Sprint", "End-to-end design system + prototypes.", "₹1,50,000"],
    ["Dedicated AI Engineer", "Monthly retainer for an embedded AI engineer.", "₹1,20,000 / mo"],
    ["Maintenance Plan", "24/7 monitoring, updates and bug fixes.", "₹40,000 / mo"],
    ["Technical Consulting", "Ad hoc CTO advisory and architecture reviews.", "₹12,000 / hr"],
];

function PricingPage() {
    return (
        <PageShell>
            <PageHero
                eyebrow="Pricing"
                title="Transparent, outcome-driven pricing."
                subtitle="Every project is scoped honestly. No surprise invoices. No scope creep without sign-off."
            />

            <section className="px-6 pb-16">
                <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-6">
                    {PLANS.map((plan, i) => (
                        <Reveal key={plan.name} delay={i * 80}>
                            <div className={`relative h-full rounded-3xl border p-10 flex flex-col transition ${plan.highlight
                                    ? "border-white/30 bg-white/[0.06] shadow-[0_0_60px_-20px_rgba(255,255,255,0.15)]"
                                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                                }`}>
                                {plan.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <div className="rounded-full bg-white text-black text-[10px] font-semibold uppercase tracking-[0.15em] px-3 py-1">
                                            Most Popular
                                        </div>
                                    </div>
                                )}
                                <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">{plan.tag}</div>
                                <div className="text-2xl font-semibold mb-1">{plan.name}</div>
                                <div className="flex items-end gap-1 mt-4 mb-1">
                                    <span className="text-4xl font-bold tracking-tight text-gradient">{plan.price}</span>
                                </div>
                                <div className="text-xs text-white/40 mb-4">{plan.period}</div>
                                <p className="text-sm text-white/55 leading-relaxed mb-8">{plan.desc}</p>
                                <ul className="space-y-3 flex-1 mb-8">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-start gap-3 text-sm text-white/75">
                                            <Check className="h-4 w-4 mt-0.5 shrink-0 text-white/60" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to="/contact"
                                    className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${plan.highlight
                                            ? "bg-white text-black hover:bg-white/90"
                                            : "border border-white/15 text-white hover:bg-white/[0.06]"
                                        }`}
                                >
                                    {plan.cta} <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Add-ons */}
            <section className="px-6 py-16">
                <div className="mx-auto max-w-5xl">
                    <Reveal>
                        <div className="text-xs uppercase tracking-[0.3em] text-white/40 text-center mb-3">Add-ons</div>
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-center text-gradient mb-12">
                            Extend your engagement.
                        </h2>
                    </Reveal>
                    <div className="rounded-3xl border border-white/10 overflow-hidden">
                        {ADDONS.map(([name, desc, price], i) => (
                            <Reveal key={name as string} delay={i * 40}>
                                <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/[0.06] last:border-0 hover:bg-white/[0.02] transition">
                                    <div className="flex-1">
                                        <div className="text-base font-medium">{name as string}</div>
                                        <div className="mt-1 text-sm text-white/50">{desc as string}</div>
                                    </div>
                                    <div className="text-sm font-medium text-white/70 ml-6 shrink-0">{price as string}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <CTAStrip />
        </PageShell>
    );
}
