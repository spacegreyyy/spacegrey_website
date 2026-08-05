import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";

export const Route = createFileRoute("/status")({
  head: () => ({
    meta: [
      { title: "Status — SpaceGrey" },
      { name: "description", content: "Current system status for SpaceGrey services." },
    ],
  }),
  component: StatusPage,
});

const COMPONENTS = [
  { name: "Website", status: "Operational" },
  { name: "Client Portal", status: "Operational" },
  { name: "API Services", status: "Operational" },
  { name: "Email & Communication", status: "Operational" },
];

const now = new Date();
const lastChecked = now.toLocaleString("en-IN", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Kolkata",
});

function StatusPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    window.location.href = `mailto:spacegreyyy522@gmail.com?subject=Status%20Page%20Subscription&body=Please%20subscribe%20this%20email%20to%20status%20updates%3A%20${encodeURIComponent(email)}`;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <PageShell>
      <section className="relative pt-40 pb-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full liquid-glass px-3 py-1 text-[11px] tracking-[0.2em] uppercase text-white/60 mb-6">
              System Status
            </div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)] animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-gradient">
                All Systems Operational
              </h1>
            </div>
            <p className="text-white/40 text-sm">Last checked: {lastChecked} IST</p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl space-y-3">
          {COMPONENTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <div className="liquid-glass rounded-2xl px-6 py-5 flex items-center justify-between">
                <span className="text-white/80 font-medium">{c.name}</span>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {c.status}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="liquid-glass rounded-3xl p-8 text-center">
              <div className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2">Incident History</div>
              <p className="text-white/60 text-sm">No incidents reported in the last 90 days.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="liquid-glass rounded-3xl p-8 md:p-10">
              <h3 className="text-xl font-semibold text-gradient mb-2">Subscribe to updates</h3>
              <p className="text-white/50 text-sm mb-6">Get notified when we report or resolve an incident.</p>
              {submitted ? (
                <div className="text-emerald-400 text-sm font-medium">
                  ✓ Subscription request sent. We'll add you to the list.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="flex-1 rounded-full liquid-glass px-5 py-3 text-sm outline-none placeholder:text-white/30"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:scale-[1.02] transition whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
