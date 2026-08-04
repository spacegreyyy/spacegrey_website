import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/solutions/ai-solutions")({
    head: () => ({
        meta: [{ title: "AI Solutions — SpaceGrey" }],
    }),
    component: Page,
});

const INCLUDED = [
    "Custom LLM integration and fine-tuning guidance",
    "Retrieval-Augmented Generation (RAG) pipeline design",
    "AI agent development (task automation, customer-facing agents)",
    "Model evaluation frameworks and quality benchmarking",
    "Production monitoring for drift, latency, and cost",
    "Prompt engineering and system architecture",
];

const STEPS = [
    {
        n: "01",
        title: "Use-Case Audit",
        desc: "Identify where AI creates real leverage vs. where it adds unnecessary complexity.",
    },
    {
        n: "02",
        title: "Architecture Design",
        desc: "Model selection, retrieval setup, and agent scoping tailored to your workflow.",
    },
    {
        n: "03",
        title: "Build & Evaluate",
        desc: "Iterative development with built-in quality benchmarks at every milestone.",
    },
    {
        n: "04",
        title: "Deploy & Monitor",
        desc: "Production rollout with ongoing performance monitoring and cost tracking.",
    },
];

function Page() {
    return (
        <PageShell>
            <section className="relative pt-40 pb-16 px-6">
                <div className="mx-auto max-w-5xl">
                    <Reveal>
                        <Link
                            to="/solutions"
                            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"
                        >
                            <ArrowLeft className="h-4 w-4" /> All Solutions
                        </Link>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="rounded-full liquid-glass px-3 py-1 text-xs text-white/60">
                                Artificial Intelligence
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-4">
                            AI Solutions
                        </h1>
                        <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
                            Full-stack AI: models, retrieval, agents, evaluation and
                            monitoring.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="px-6 pb-24">
                <div className="mx-auto max-w-5xl space-y-20">
                    <Reveal>
                        <div>
                            <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                                Overview
                            </div>
                            <h2 className="text-3xl font-semibold text-gradient mb-6">
                                Built for production, not just demos.
                            </h2>
                            <p className="text-white/60 leading-relaxed max-w-3xl">
                                We build production-grade AI systems, not demos. From custom
                                model integration to retrieval-augmented pipelines and
                                autonomous agents, we handle the full lifecycle — including the
                                evaluation and monitoring infrastructure most AI projects skip
                                until it's too late.
                            </p>
                        </div>
                    </Reveal>

                    <div>
                        <Reveal>
                            <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                                What's Included
                            </div>
                            <h2 className="text-3xl font-semibold text-gradient mb-10">
                                What we deliver.
                            </h2>
                        </Reveal>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {INCLUDED.map((item, i) => (
                                <Reveal key={item} delay={i * 50}>
                                    <div className="liquid-glass rounded-2xl p-5 liquid-glass">
                                        <p className="text-sm text-white/75 leading-relaxed">
                                            {item}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <Reveal>
                        <div>
                            <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                                Who It's For
                            </div>
                            <h2 className="text-3xl font-semibold text-gradient mb-6">
                                Right for you if…
                            </h2>
                            <p className="text-white/60 leading-relaxed max-w-3xl">
                                Brands and startups that want to deploy AI beyond a chatbot demo
                                — companies needing reliable, monitored AI systems that hold up
                                in production, not just in a sandbox.
                            </p>
                        </div>
                    </Reveal>

                    <div>
                        <Reveal>
                            <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                                Our Approach
                            </div>
                            <h2 className="text-3xl font-semibold text-gradient mb-10">
                                How we work.
                            </h2>
                        </Reveal>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {STEPS.map((s, i) => (
                                <Reveal key={s.n} delay={i * 60}>
                                    <div className="liquid-glass rounded-3xl p-7 liquid-glass h-full">
                                        <span className="text-3xl font-bold text-gradient opacity-40">
                                            {s.n}
                                        </span>
                                        <div className="mt-4 text-base font-semibold mb-2">
                                            {s.title}
                                        </div>
                                        <p className="text-sm text-white/50 leading-relaxed">
                                            {s.desc}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <Reveal>
                        <div className="liquid-glass rounded-3xl p-12 text-center border border-white/10">
                            <h3 className="text-3xl font-semibold text-gradient mb-4">
                                Talk to us about AI Solutions
                            </h3>
                            <p className="text-white/50 mb-8 max-w-md mx-auto">
                                Let's figure out where AI creates real leverage in your
                                business.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:scale-[1.02] transition"
                            >
                                Get in touch <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            <CTAStrip />
        </PageShell>
    );
}
