import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/solutions/enterprise-solutions")({
  head: () => ({ meta: [{ title: "Enterprise Solutions — SpaceGrey" }] }),
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
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">Enterprise Solutions</h1>
            <p className="text-lg text-white/55 max-w-2xl leading-relaxed">Mission-critical software for large organisations — built with the reliability, security and scalability that enterprise operations demand.</p>
          </Reveal>
        </div>
      </section>
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl space-y-12">
          <Reveal>
            <h2 className="text-2xl font-semibold text-gradient mb-6">What's included</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Enterprise Platform Engineering","Legacy System Modernisation","ERP & CRM Implementation","Custom Enterprise Portals","Role-based Access & Security","Compliance-ready Architecture","Multi-tenant System Design","SSO & Identity Management","Enterprise API Gateway","24/7 SLA Support"].map(item => (
                <div key={item} className="flex items-start gap-3 glass rounded-2xl p-4"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" /><span className="text-sm text-white/75">{item}</span></div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-semibold text-gradient mb-4">How it works</h2>
            <p className="text-white/60 leading-relaxed">Enterprise engagements start with a thorough discovery phase — understanding your existing systems, integration requirements and compliance constraints before we write a line of code. We embed a dedicated senior team and deliver through structured milestones with weekly reporting to stakeholders.</p>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-semibold text-gradient mb-4">Ideal for</h2>
            <p className="text-white/60 leading-relaxed">Large organisations modernising legacy infrastructure. Enterprises needing bespoke internal tooling. Companies requiring SOC/ISO-compliant software with enterprise-grade SLAs.</p>
          </Reveal>
        </div>
      </section>
      <CTAStrip />
    </PageShell>
  );
}
