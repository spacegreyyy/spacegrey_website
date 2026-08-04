import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Clock, Video, Phone, Calendar, Mail } from "lucide-react";

export const Route = createFileRoute("/book-a-call")({
    head: () => ({
        meta: [
            { title: "Book a Consultation — SpaceGrey" },
            { name: "description", content: "Book a free discovery call with SpaceGrey. Talk to Jatin or Ujjwal about your project." },
        ],
    }),
    component: BookACallPage,
});

const MEETING_TYPES = [
    {
        icon: Video,
        title: "AI & Product Discovery",
        duration: "30 min",
        desc: "Discuss your AI or software idea. We'll map out a realistic plan and tell you exactly what's feasible.",
        cta: "Call Jatin",
        tel: "tel:+918287997180",
        person: "Jatin Chhabra · CEO",
    },
    {
        icon: Phone,
        title: "Technical Deep Dive",
        duration: "45 min",
        desc: "Architecture, stack, team structure. Best for CTOs and technical leads who want specifics.",
        cta: "Call Ujjwal",
        tel: "tel:+918802824521",
        person: "Ujjwal Verma · CTO",
    },
    {
        icon: Calendar,
        title: "Enterprise Consultation",
        duration: "60 min",
        desc: "Full assessment for enterprise projects. Covers scope, timeline, team and commercial terms.",
        cta: "Call Jatin",
        tel: "tel:+918287997180",
        person: "Jatin Chhabra · CEO",
    },
];

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
                subtitle="Pick a call type below. The button dials the right person directly — no forms, no waiting."
            />

            {/* Meeting type cards */}
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-5xl grid md:grid-cols-3 gap-4">
                    {MEETING_TYPES.map((m, i) => (
                        <Reveal key={m.title} delay={i * 80}>
                            <div className="rounded-3xl liquid-glass p-8 hover:bg-white/[0.04] transition h-full flex flex-col">
                                <div className="grid h-12 w-12 place-items-center rounded-2xl liquid-glass mb-6">
                                    <m.icon className="h-5 w-5" />
                                </div>
                                <div className="text-xl font-semibold mb-1">{m.title}</div>
                                <div className="flex items-center gap-1.5 text-xs text-white/40 mb-4">
                                    <Clock className="h-3 w-3" /> {m.duration}
                                </div>
                                <p className="text-sm text-white/55 leading-relaxed flex-1">{m.desc}</p>
                                <div className="mt-2 text-xs text-white/30 italic">{m.person}</div>
                                <a
                                    href={m.tel}
                                    className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 hover:scale-[1.01] transition"
                                >
                                    <Phone className="h-3.5 w-3.5" /> {m.cta}
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Meet the founders */}
            <section className="px-6 py-16">
                <div className="mx-auto max-w-5xl">
                    <Reveal>
                        <div className="text-xs uppercase tracking-[0.3em] text-white/40 text-center mb-3">Who you'll speak with</div>
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-center text-gradient mb-12">Meet the founders.</h2>
                    </Reveal>
                    <div className="grid md:grid-cols-2 gap-6">
                        {TEAM.map((person, i) => (
                            <Reveal key={person.name} delay={i * 100}>
                                <div className="rounded-3xl liquid-glass p-8 transition">
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

            {/* Direct email fallback */}
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-3xl">
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
