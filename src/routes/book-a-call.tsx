import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/book-a-call")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — SpaceGrey" },
      { name: "description", content: "Book a free discovery call with SpaceGrey. Talk to Jatin or Ujjwal about your project." },
    ],
  }),
  component: BookACallPage,
});

const TEAM = [
  {
    initials: "JC",
    name: "Jatin Chhabra",
    role: "Co-founder & CEO",
    email: "jatin.chhabra22jc@gmail.com",
    phone: "+91 82879 97180",
    tel: "tel:+918287997180",
    note: "Product, business & AI strategy",
  },
  {
    initials: "UV",
    name: "Ujjwal Verma",
    role: "Co-founder & CTO",
    email: "ujjwalvermauv2004@gmail.com",
    phone: "+91 88028 24521",
    tel: "tel:+918802824521",
    note: "Architecture, engineering & technical scoping",
  },
];

function BookACallPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Book a Consultation"
        title="Let's talk about what you're building."
        subtitle="Pick who you'd like to speak with. The button dials them directly — no forms, no waiting."
      />

      {/* Single merged consultation box */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="liquid-glass-strong rounded-[2rem] p-10 md:p-14">
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2">Free consultation</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-gradient mb-4">
                Book a Discovery Call
              </h2>
              <p className="text-white/55 leading-relaxed max-w-2xl mb-8">
                Whether you're exploring an AI idea, need a technical deep-dive on architecture, or want to scope an enterprise project — we're available to talk. No commitments, just clarity.
              </p>

              {/* What to expect */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {[
                  ["AI & Product Discovery", "30 min", "For founders and teams exploring AI or software ideas."],
                  ["Technical Deep Dive", "45 min", "Architecture, stack and team structure for CTOs and engineers."],
                  ["Enterprise Consultation", "60 min", "Scope, timeline and commercial terms for large-scale projects."],
                ].map(([title, duration, desc]) => (
                  <div key={title as string} className="liquid-glass rounded-2xl p-5">
                    <div className="text-sm font-semibold mb-1">{title}</div>
                    <div className="text-xs text-white/40 mb-2">{duration}</div>
                    <p className="text-xs text-white/55 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Two call buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+918287997180"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-4 text-sm font-medium hover:scale-[1.02] transition"
                >
                  <Phone className="h-4 w-4" />
                  Call Jatin — CEO
                </a>
                <a
                  href="tel:+918802824521"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full liquid-glass px-6 py-4 text-sm font-medium text-white hover:bg-white/[0.06] transition"
                >
                  <Phone className="h-4 w-4" />
                  Call Ujjwal — CTO
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Meet the founders */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-white/40 text-center mb-3">Who you'll speak with</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-center text-gradient mb-12">Meet the founders.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {TEAM.map((person, i) => (
              <Reveal key={person.name} delay={i * 100}>
                <div className="liquid-glass rounded-3xl p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="h-14 w-14 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/15 flex items-center justify-center text-lg font-semibold text-gradient">
                      {person.initials}
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{person.name}</div>
                      <div className="text-xs text-white/40 uppercase tracking-[0.15em]">{person.role}</div>
                    </div>
                  </div>
                  <div className="text-xs text-white/35 mb-5 italic">{person.note}</div>
                  <div className="space-y-2.5">
                    <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition">
                      <Mail className="h-3.5 w-3.5 shrink-0" /> {person.email}
                    </a>
                    <a href={person.tel} className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition">
                      <Phone className="h-3.5 w-3.5 shrink-0" /> {person.phone}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Email fallback */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="liquid-glass rounded-3xl p-10 text-center">
              <div className="text-white/50 text-sm mb-3">Prefer email?</div>
              <a href="mailto:spacegreyyy522@gmail.com" className="text-xl font-semibold hover:text-white/70 transition">
                spacegreyyy522@gmail.com
              </a>
              <div className="mt-3 text-white/40 text-sm">We reply within one business day.</div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
