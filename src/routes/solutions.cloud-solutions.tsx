import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/solutions/cloud-solutions")({
  head: () => ({ meta: [{ title: "Cloud Solutions — SpaceGrey" }] }),
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
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">Cloud Solutions</h1>
            <p className="text-lg text-white/55 max-w-2xl leading-relaxed">Modern cloud infrastructure on AWS, Azure or GCP — designed for scale, cost-efficiency and operational reliability from day one.</p>
          </Reveal>
        </div>
      </section>
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl space-y-12">
          <Reveal>
            <h2 className="text-2xl font-semibold text-gradient mb-6">What's included</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Cloud Architecture Design","AWS / Azure / GCP Setup","Kubernetes & Container Orchestration","Serverless Architecture","Infrastructure as Code (Terraform)","CI/CD Pipeline Implementation","Cloud Cost Optimisation","Security & Compliance Hardening","Monitoring & Observability Stack","Disaster Recovery & Backup"].map(item => (
                <div key={item} className="flex items-start gap-3 glass rounded-2xl p-4"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" /><span className="text-sm text-white/75">{item}</span></div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-semibold text-gradient mb-4">How it works</h2>
            <p className="text-white/60 leading-relaxed">We assess your current infrastructure, application architecture and growth trajectory before recommending a cloud strategy. Everything we build is codified in Terraform so your infra is reproducible and version-controlled. We hand over with full documentation and runbooks.</p>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-semibold text-gradient mb-4">Ideal for</h2>
            <p className="text-white/60 leading-relaxed">Companies moving from on-premise to cloud. Startups whose infrastructure has grown organically and needs to be properly architected. Teams that want cloud-native performance without a full-time platform engineering team.</p>
          </Reveal>
        </div>
      </section>
      <CTAStrip />
    </PageShell>
  );
}
