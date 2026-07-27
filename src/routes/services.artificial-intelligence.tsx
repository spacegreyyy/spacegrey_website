import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services/artificial-intelligence")({
    head: () => ({ meta: [{ title: "Artificial Intelligence — SpaceGrey" }] }),
    component: AIServicePage,
});

function AIServicePage() {
    return (
        <PageShell>
            <section className="relative pt-40 pb-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10">
                            <ArrowLeft className="h-4 w-4" /> All Services
                        </Link>
                        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">Service</div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">Artificial Intelligence</h1>
                        <p className="text-lg text-white/55 max-w-2xl leading-relaxed">We build production-grade AI systems — from LLM integrations and RAG pipelines to autonomous agents and computer vision. Every system is designed for reliability, not just demos.</p>
                    </Reveal>
                </div>
            </section>
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl space-y-12">
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-6">What we deliver</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {["AI Strategy & Consulting", "Custom LLM Applications", "RAG Systems (Retrieval-Augmented Generation)", "AI Agents & Autonomous Workflows", "Chatbots & Conversational AI", "Voice AI Interfaces", "Computer Vision Systems", "LLM Fine-tuning & Evaluation", "AI API Integrations (OpenAI, Anthropic, Gemini)", "Production AI Monitoring & Observability"].map(item => (
                                <div key={item} className="flex items-start gap-3 glass rounded-2xl p-4">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" />
                                    <span className="text-sm text-white/75">{item}</span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Our approach</h2>
                        <p className="text-white/60 leading-relaxed">We start with your business problem, not the technology. Every AI engagement begins with a discovery phase where we map the workflow, define success metrics and identify the right model architecture. We build iteratively with weekly demos, and every system ships with evaluation pipelines, monitoring and documentation.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Who it's for</h2>
                        <p className="text-white/60 leading-relaxed">Startups building AI-native products. Enterprises automating knowledge work. Teams that have tried LLM APIs but need a production system that actually works at scale.</p>
                    </Reveal>
                </div>
            </section>
            <CTAStrip />
        </PageShell>
    );
}
