import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Heart, Landmark, ShoppingBag, Factory, GraduationCap, Building2, Scale, Home, Truck, Clapperboard, ShieldCheck, Car } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — SpaceGrey" },
      { name: "description", content: "Domain expertise across healthcare, finance, retail, manufacturing and more." },
      { property: "og:title", content: "Industries — SpaceGrey" },
      { property: "og:description", content: "Twelve industries. Deep domain fluency." },
    ],
  }),
  component: IndustriesPage,
});

const I = [
  ["Healthcare", Heart], ["Finance", Landmark], ["Retail", ShoppingBag], ["Manufacturing", Factory],
  ["Education", GraduationCap], ["Government", Building2], ["Legal", Scale], ["Real Estate", Home],
  ["Logistics", Truck], ["Media", Clapperboard], ["Insurance", ShieldCheck], ["Automotive", Car],
] as const;

function IndustriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Industries"
        title="Domain-fluent, end-to-end."
        subtitle="We embed with your team, learn your domain, and ship software that speaks your language."
      />
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {I.map(([name, Icon], i) => (
            <Reveal key={name} delay={i * 40}>
              <div className="group rounded-3xl liquid-glass p-8 hover:bg-white/[0.04] transition aspect-[4/5] flex flex-col justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl liquid-glass">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-2xl font-semibold tracking-[-0.01em]">{name}</div>
                  <div className="mt-2 text-xs text-white/40 uppercase tracking-[0.2em]">Practice</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTAStrip />
    </PageShell>
  );
}
