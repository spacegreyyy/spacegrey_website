import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/services/cloud-devops")({
    head: () => ({ meta: [{ title: "Cloud & DevOps — SpaceGrey" }] }),
    component: CloudDevOpsPage,
});
function CloudDevOpsPage() {
    return (
        <PageShell>
            <section className="relative pt-40 pb-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"><ArrowLeft className="h-4 w-4" /> All Services</Link>
                        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">Service</div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">Cloud & DevOps</h1>
                        <p className="text-lg text-white/55 max-w-2xl leading-relaxed">Modern cloud infrastructure that scales automatically, deploys continuously and costs what it should. We build the platform your engineering team needs to move fast without breaking things.</p>
                    </Reveal>
                </div>
            </section>
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl space-y-12">
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-6">What we deliver</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {["AWS / Azure / GCP Architecture", "Docker Containerisation", "Kubernetes Orchestration", "CI/CD Pipeline Setup", "Infrastructure as Code (Terraform)", "Serverless Architecture", "Cloud Cost Optimisation", "Security Hardening", "Monitoring & Alerting", "Disaster Recovery Planning"].map(item => (
                                <div key={item} className="flex items-start gap-3 liquid-glass rounded-2xl p-4"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" /><span className="text-sm text-white/75">{item}</span></div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Our approach</h2>
                        <p className="text-white/60 leading-relaxed">Infrastructure should be invisible when it's working and loud when it isn't. We build cloud systems with observability baked in — proper logging, alerting and runbooks. Everything is codified so your infra is reproducible, auditable and version-controlled just like your application code.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Who it's for</h2>
                        <p className="text-white/60 leading-relaxed">Teams deploying to the cloud for the first time. Startups scaling beyond single-server architectures. Enterprises modernising from legacy infra to cloud-native platforms.</p>
                    </Reveal>
                </div>
            </section>
            <CTAStrip />
        </PageShell>
    );
}
