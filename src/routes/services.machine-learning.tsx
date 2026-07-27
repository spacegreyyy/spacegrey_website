import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/services/machine-learning")({
    head: () => ({ meta: [{ title: "Machine Learning — SpaceGrey" }] }),
    component: MachineLearningPage,
});
function MachineLearningPage() {
    return (
        <PageShell>
            <section className="relative pt-40 pb-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"><ArrowLeft className="h-4 w-4" /> All Services</Link>
                        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">Service</div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">Machine Learning</h1>
                        <p className="text-lg text-white/55 max-w-2xl leading-relaxed">Custom ML models that solve real business problems — from predicting churn to detecting fraud, classifying documents and forecasting demand.</p>
                    </Reveal>
                </div>
            </section>
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl space-y-12">
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-6">What we deliver</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {["Predictive Modelling", "Natural Language Processing (NLP)", "Recommendation Systems", "Fraud Detection Models", "Optical Character Recognition (OCR)", "Demand Forecasting", "Customer Churn Prediction", "Anomaly Detection", "Model Training & Fine-tuning", "ML Pipeline Deployment"].map(item => (
                                <div key={item} className="flex items-start gap-3 glass rounded-2xl p-4"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" /><span className="text-sm text-white/75">{item}</span></div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Our approach</h2>
                        <p className="text-white/60 leading-relaxed">We define success metrics before writing a line of code. Every model ships with evaluation results, baseline comparisons and a plan for monitoring performance in production. We build ML systems that improve over time — not ones that degrade silently.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Who it's for</h2>
                        <p className="text-white/60 leading-relaxed">Businesses with data that's being underused. Teams that need predictive intelligence without hiring a full ML team. Products that would benefit from personalisation, classification or forecasting built in.</p>
                    </Reveal>
                </div>
            </section>
            <CTAStrip />
        </PageShell>
    );
}
