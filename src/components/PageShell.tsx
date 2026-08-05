import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SpaceBackground } from "./SpaceBackground";
import { Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.mp4";
import heroBgMobile from "@/assets/hero-bg-mobile.png";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-clip">
      {/* Video background — all devices */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block fixed inset-0 w-full h-full object-cover z-0"
        src={heroBg}
      />
      {/* Mobile static image fallback */}
      <div
        className="md:hidden fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBgMobile})` }}
      />
      {/* Dark overlay for legibility */}
      <div className="fixed inset-0 z-[1] bg-black/30" />
      <SpaceBackground />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative pt-40 pb-24 px-6">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full liquid-glass px-3 py-1 text-[11px] tracking-[0.2em] uppercase text-white/60">
            <span className="h-1 w-1 rounded-full bg-white/60" />
            {eyebrow}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95]">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-8 mx-auto max-w-2xl text-lg text-white/55 leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function CTAStrip() {
  return (
    <section className="relative z-10 px-6 py-24">
      <Reveal>
        <div className="mx-auto max-w-6xl liquid-glass-strong rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-white/[0.06] blur-[120px]" />
          <div className="relative text-center">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] text-gradient">
              Ready to build what's next?
            </h2>
            <p className="mt-5 text-white/55 max-w-xl mx-auto">
              Tell us about your product. We'll come back with a plan, a team and a timeline.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/book-a-call"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:scale-[1.02] transition"
              >
                Book a Call <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm text-white hover:bg-white/[0.06] transition"
              >
                View our work
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
