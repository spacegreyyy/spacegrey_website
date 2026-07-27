import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/solutions/startup-solutions")({
  head: () => ({ meta: [{ title: "Startup Solutions — SpaceGrey" }] }),
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
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">Startup Solutions</h1>
            <p className="text-lg text-white/55 max-w-2xl leading-relaxed">0 to 1, fast. We build investor-ready products for founders — combining product thinking, design and engineering in a single engaged team.</p>
          </Reveal>
        </div>
      </section>
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl space-y-12">
          <Reveal>
            <h2 className="text-2xl font-semibold text-gradient mb-6">What's included</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["MVP Development (4–8 weeks)","Product Strategy & Validation","UI/UX Design from Scratch","Frontend & Backend Engineering","Auth, Payments & Integrations","App Store / Web Deployment","Investor Demo Preparation","Post-launch Iteration","CTO-as-a-Service","Technical Co-founder Support"].map(item => (
                <div key={item} className="flex items-start gap-3 glass rounded-2xl p-4"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" /><span className="text-sm text-white/75">{item}</span></div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-semibold text-gradient mb-4">How it works</h2>
            <p className="text-white/60 leading-relaxed">We run lean, fast sprints. Week one is discovery and design. By week three you have a working prototype. By week eight you have something you can show investors or put in front of real users. We challenge bad assumptions early so you don't waste build time.</p>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-semibold text-gradient mb-4">Ideal for</h2>
            <p className="text-white/60 leading-relaxed">Non-technical founders who need a reliable engineering partner. Early-stage startups validating their idea. Teams that want to ship fast without cutting corners on quality.</p>
          </Reveal>
        </div>
      </section>
      <CTAStrip />
    </PageShell>
  );
}
