import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/solutions/ai-solutions")({
    head: () => ({ meta: [{ title: "AI Solutions — SpaceGrey" }] }),
    component: Page,
});
function Page() {
    return (
        <PageShell>
            <section className="relative pt-40 pb-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <Link to="/solutions" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"><ArrowLeft className="h-4 w-4" /> All Solutions</Link>
                        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">Solution</div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">AI Solutions</h1>
                        <p className="text-lg text-white/55 max-w-2xl leading-relaxed">End-to-end AI systems — from strategy and architecture to production deployment and monitoring. We build AI that works in the real world, not just in demos.</p>
                    </Reveal>
                </div>
            </section>
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl space-y-12">
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-6">What's included</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {["AI Strategy & Roadmapping", "LLM Application Development", "RAG Pipeline Architecture", "AI Agent Design & Deployment", "Model Evaluation & Testing", "Production Monitoring & Alerting", "Fine-tuning & Custom Models", "AI Integration with Existing Systems", "Prompt Engineering & Optimisation", "Responsible AI & Guardrails"].map(item => (
                                <div key={item} className="flex items-start gap-3 glass rounded-2xl p-4"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" /><span className="text-sm text-white/75">{item}</span></div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">How it works</h2>
                        <p className="text-white/60 leading-relaxed">We start with a discovery sprint to understand your business context, identify the highest-value AI use cases, and design the right architecture. We build iteratively — delivering working systems at each milestone — and stay engaged through production to ensure the system performs as expected in real conditions.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Ideal for</h2>
                        <p className="text-white/60 leading-relaxed">Companies looking to embed AI into their products or operations. Teams that have explored AI but haven't shipped anything production-ready. Enterprises wanting to move from proof-of-concept to full deployment.</p>
                    </Reveal>
                </div>
            </section>
            <CTAStrip />
        </PageShell>
    );
}
