import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, MapPin, Calendar, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SpaceGrey" },
      { name: "description", content: "Start a project, book a call or drop us a line." },
      { property: "og:title", content: "Contact — SpaceGrey" },
      { property: "og:description", content: "We reply within one business day." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Let's build something."
        subtitle="Tell us about your project. We'll come back within one business day with next steps. Based in Delhi, India."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-5 gap-6">
          <Reveal className="md:col-span-3">
            <div className="glass rounded-[2rem] p-8 md:p-10">
              <form className="grid grid-cols-2 gap-5">
                <Field label="Full name" placeholder="Ada Lovelace" />
                <Field label="Work email" placeholder="you@company.com" type="email" />
                <Field label="Company" placeholder="Company name" />
                <Field label="Budget" placeholder="₹2L – ₹20L" />
                <div className="col-span-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-white/40">What are you building?</label>
                  <textarea rows={5} placeholder="A few sentences about the project…" className="mt-2 w-full rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-white/30 resize-none" />
                </div>
                <div className="col-span-2 flex items-center justify-between mt-2">
                  <div className="text-xs text-white/40">We reply within one business day.</div>
                  <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:scale-[1.02] transition">
                    Send inquiry <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </Reveal>

          <div className="md:col-span-2 space-y-4">
            <Reveal delay={60}>
              <div className="glass rounded-3xl p-6 flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/40">Email</div>
                  <a href="mailto:spacegreyyy522@gmail.com" className="mt-1 block text-white/90 hover:text-white transition text-sm">spacegreyyy522@gmail.com</a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="glass rounded-3xl p-6 flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/40">Jatin Chhabra · CEO</div>
                  <a href="tel:+918287997180" className="mt-1 block text-white/90 hover:text-white transition text-sm">+91 82879 97180</a>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/40 mt-3">Ujjwal Verma · CTO</div>
                  <a href="tel:+918802824521" className="mt-1 block text-white/90 hover:text-white transition text-sm">+91 88028 24521</a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <Link to="/book-a-call" className="block glass rounded-3xl p-6 flex items-start gap-4 hover:border-white/20 transition group">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 group-hover:bg-white group-hover:text-black transition">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/40">Book a Call</div>
                  <div className="mt-1 text-white/90 text-sm">Discovery · 30 min</div>
                  <div className="mt-1 text-xs text-white/40 group-hover:text-white/60 transition">Free consultation →</div>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={180}>
              <div className="glass rounded-3xl p-6 flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/40">Office</div>
                  <div className="mt-1 text-white/90 text-sm">Delhi, India</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-white/40">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-white/30"
      />
    </div>
  );
}
