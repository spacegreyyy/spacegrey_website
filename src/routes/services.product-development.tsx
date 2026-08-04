import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/services/product-development")({
  head: () => ({ meta: [{ title: "Product Development — SpaceGrey" }] }),
  component: ProductDevPage,
});

const PROJECTS = [
  {
    title: "MVP Development for Early-Stage Startups",
    desc: "End-to-end 0-to-1 build: user research, wireframes, tech architecture, and a shippable MVP in 6–8 weeks — for founders validating an idea.",
  },
  {
    title: "Mobile App Product Build (iOS/Android)",
    desc: "Cross-platform app (React Native/Flutter) for a brand launching a loyalty programme, booking system, or D2C companion app.",
  },
  {
    title: "Product Roadmap & Feature Prioritisation System",
    desc: "A structured discovery-to-launch process including user interviews, competitive analysis, roadmap docs, and a phased release plan — packaged as a consulting + build deliverable.",
  },
  {
    title: "White-Label Product for Agencies to Resell",
    desc: "Building a reusable product (e.g., a booking widget, review-collection tool) that an agency can white-label and resell to their own client base.",
  },
  {
    title: "Product Analytics & Feedback Loop Integration",
    desc: "Embedding analytics (Mixpanel/Amplitude), in-app feedback widgets, and A/B testing infra into an existing product to drive iterative improvement.",
  },
];

function ProductDevPage() {
  return (
    <PageShell>
      <section className="relative pt-40 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"
            >
              <ArrowLeft className="h-4 w-4" /> All Services
            </Link>
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">
              Service
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">
              Product Development
            </h1>
            <p className="text-lg text-white/55 max-w-2xl leading-relaxed">
              MVPs, 0→1 products and CTO-as-a-Service. We compress the gap
              between a validated idea and a product in users' hands.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl space-y-16">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Example Projects
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-10">
                What we build.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {PROJECTS.map((p, i) => (
                <Reveal key={p.title} delay={i * 60}>
                  <div className="liquid-glass rounded-3xl p-7 liquid-glass h-full">
                    <div className="text-base font-semibold mb-3">
                      {p.title}
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Our Approach
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-5">
                Ship fast, iterate smarter.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                We start with discovery to ensure we're building the right
                thing, not just the requested thing. Then we move into rapid
                iterations — weekly demos, continuous feedback, early user
                testing — so the product keeps improving in the hands of real
                users.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Who It's For
              </div>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                Non-technical founders who need an engineering partner.
                Growth-stage companies shipping new products. Teams who want
                CTO-level thinking without a full-time hire.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <CTAStrip />
    </PageShell>
  );
}
