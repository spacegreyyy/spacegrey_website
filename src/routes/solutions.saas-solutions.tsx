import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/solutions/saas-solutions")({
  head: () => ({ meta: [{ title: "SaaS Solutions — SpaceGrey" }] }),
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
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">SaaS Solutions</h1>
            <p className="text-lg text-white/55 max-w-2xl leading-relaxed">Multi-tenant SaaS platforms built to scale from day one — with the architecture, billing, onboarding and security foundations that enterprise SaaS requires.</p>
          </Reveal>
        </div>
      </section>
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl space-y-12">
          <Reveal>
            <h2 className="text-2xl font-semibold text-gradient mb-6">What's included</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Multi-tenant Architecture","Subscription & Billing (Stripe)","User Auth & Team Management","Role-based Access Control","Admin Dashboard","Customer Onboarding Flows","Usage Analytics & Metering","API Access & Documentation","Self-serve & Sales-assisted Tiers","Scalable Cloud Infrastructure"].map(item => (
                <div key={item} className="flex items-start gap-3 glass rounded-2xl p-4"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" /><span className="text-sm text-white/75">{item}</span></div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-semibold text-gradient mb-4">How it works</h2>
            <p className="text-white/60 leading-relaxed">We design SaaS architecture that won't need a full rewrite at 1,000 customers. Billing, tenancy, auth and admin are handled correctly from the start. We build iteratively with frequent demos and ship a production-ready product with proper monitoring, CI/CD and documentation.</p>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-semibold text-gradient mb-4">Ideal for</h2>
            <p className="text-white/60 leading-relaxed">Founders building their first SaaS product. Companies converting an internal tool into a sellable product. Teams who need enterprise-grade SaaS foundations without assembling them piece by piece.</p>
          </Reveal>
        </div>
      </section>
      <CTAStrip />
    </PageShell>
  );
}
