import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import orbit from "@/assets/spacegrey-orbit.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SpaceGrey" },
      { name: "description", content: "SpaceGrey is an AI-first digital engineering company based in Delhi, India." },
      { property: "og:title", content: "About — SpaceGrey" },
      { property: "og:description", content: "Our story, mission, team and values." },
    ],
  }),
  component: AboutPage,
});

const TIMELINE = [
  ["2025", "Founded in Delhi, India by Jatin Chhabra and Ujjwal Verma."],
  ["2025", "First clients onboarded — Sage Media, Finn Fintech, Bharat Fintech."],
  ["2025", "Expanded to serve clients across media, EV, healthcare and travel."],
  ["2025", "Delivered 6+ projects across 5 industries. Established as a trusted AI & software partner in India."],
];

const VALUES = [
  ["Craft", "We treat software like precision instruments."],
  ["Clarity", "Simple systems outlive clever ones."],
  ["Compounding", "Every ship makes the next one faster and safer."],
  ["Trust", "Predictable delivery. Honest communication. Long-term partnerships."],
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="A studio built for the AI era."
        subtitle="SpaceGrey is a team of engineers and designers building AI systems and enterprise software from Delhi, India — for the world."
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-px bg-white/[0.06] rounded-3xl overflow-hidden border border-white/10">
          {[
            [6, "+", "Projects Delivered"],
            [5, "+", "Industries Served"],
            [100, "%", "Client Satisfaction"],
            [2025, "", "Est."],
          ].map(([n, s, l], i) => (
            <Reveal key={l as string} delay={i * 60}>
              <div className="bg-black/70 p-10 text-center h-full">
                <div className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-gradient">
                  <Counter to={n as number} suffix={s as string} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">{l as string}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent">
              <img src={orbit} alt="" className="absolute inset-0 m-auto w-3/4 invert opacity-90 animate-orbit-slow" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,black_85%)]" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40">Journey</div>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-gradient">From studio to global engineering partner.</h2>
            </Reveal>
            <div className="mt-10 space-y-4">
              {TIMELINE.map(([y, t], i) => (
                <Reveal key={y} delay={100 + i * 80}>
                  <div className="flex gap-6 pb-4 border-b border-white/[0.08]">
                    <div className="text-sm text-white/40 w-16 pt-1">{y}</div>
                    <div className="flex-1 text-white/80">{t}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-white/40 text-center">Values</div>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-[-0.03em] text-gradient text-center">What we optimise for.</h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-4 gap-4">
            {VALUES.map(([t, d], i) => (
              <Reveal key={t} delay={i * 80}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 h-full">
                  <div className="text-2xl font-semibold text-gradient">{t}</div>
                  <div className="mt-3 text-sm text-white/55 leading-relaxed">{d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-white/40 text-center">Leadership</div>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-[-0.03em] text-gradient text-center">The people behind SpaceGrey.</h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Reveal delay={80}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 hover:bg-white/[0.04] hover:border-white/20 transition">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/15 flex items-center justify-center text-2xl font-semibold text-gradient">
                  JC
                </div>
                <div className="mt-6 text-2xl font-semibold">Jatin Chhabra</div>
                <div className="mt-1 text-sm text-white/50 uppercase tracking-[0.15em]">Co-founder & CEO</div>
                <div className="mt-5 space-y-2 text-sm text-white/60">
                  <div>📧 jatin.chhabra22jc@gmail.com</div>
                  <div>📱 +91 82879 97180</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 hover:bg-white/[0.04] hover:border-white/20 transition">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/15 flex items-center justify-center text-2xl font-semibold text-gradient">
                  UV
                </div>
                <div className="mt-6 text-2xl font-semibold">Ujjwal Verma</div>
                <div className="mt-1 text-sm text-white/50 uppercase tracking-[0.15em]">Co-founder & CTO</div>
                <div className="mt-5 space-y-2 text-sm text-white/60">
                  <div>📧 ujjwalvermauv2004@gmail.com</div>
                  <div>📱 +91 88028 24521</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
