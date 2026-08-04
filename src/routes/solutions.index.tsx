import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/solutions/")({
    head: () => ({
        meta: [
            { title: "Solutions — SpaceGrey" },
            {
                name: "description",
                content:
                    "Enterprise AI, RAG, agents, automation, SaaS and analytics solutions.",
            },
        ],
    }),
    component: SolutionsPage,
});

// Cloud Solutions removed intentionally
const S = [
    {
        slug: "ai-solutions",
        title: "AI Solutions",
        desc: "Full-stack AI: models, retrieval, agents, evaluation and monitoring.",
    },
    {
        slug: "enterprise-solutions",
        title: "Enterprise Solutions",
        desc: "Mission-critical software for regulated, high-scale organisations.",
    },
    {
        slug: "startup-solutions",
        title: "Startup Solutions",
        desc: "0→1 products for founders — fast, safe, investor-ready.",
    },
    {
        slug: "saas-solutions",
        title: "SaaS Solutions",
        desc: "Multi-tenant SaaS platforms engineered for scale from day one.",
    },
    {
        slug: "automation-solutions",
        title: "Automation Solutions",
        desc: "Workflow, browser, API and ops automation across your stack.",
    },
    {
        slug: "analytics-solutions",
        title: "Analytics Solutions",
        desc: "Warehouses, dashboards and decision intelligence.",
    },
    {
        slug: "digital-transformation",
        title: "Digital Transformation",
        desc: "Legacy → modern. Monoliths → services. Manual → automated.",
    },
    {
        slug: "business-intelligence",
        title: "Business Intelligence",
        desc: "BI systems that answer questions leadership actually asks.",
    },
    {
        slug: "custom-software",
        title: "Custom Software",
        desc: "Bespoke systems designed around your workflow — not the other way around.",
    },
];

function SolutionsPage() {
    return (
        <PageShell>
            <PageHero
                eyebrow="Solutions"
                title="Systems, not deliverables."
                subtitle="Business-shaped solutions across AI, automation, data and enterprise software."
            />
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-4">
                    {S.map((s, i) => (
                        <Reveal key={s.slug} delay={i * 50}>
                            <Link
                                to={`/solutions/${s.slug}` as any}
                                className="group relative rounded-3xl liquid-glass p-8 hover:bg-white/[0.04] transition-all duration-300 block hover:-translate-y-1 h-full"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="text-xl md:text-2xl font-semibold tracking-[-0.02em] text-gradient">
                                            {s.title}
                                        </div>
                                        <p className="mt-3 text-white/55 text-sm leading-relaxed">
                                            {s.desc}
                                        </p>
                                    </div>
                                    <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition shrink-0 mt-1" />
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>
            <CTAStrip />
        </PageShell>
    );
}
