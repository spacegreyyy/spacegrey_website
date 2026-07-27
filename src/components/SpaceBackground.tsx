import { useMemo } from "react";

export function SpaceBackground({ withOrbits = false }: { withOrbits?: boolean }) {
  const stars = useMemo(
    () =>
      Array.from({ length: 90 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.6 + 0.4,
        delay: Math.random() * 4,
        duration: 3 + Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.6,
      })),
    [],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient glow */}
      <div className="absolute -top-[20%] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[140px] animate-glow-pulse" />
      <div className="absolute bottom-[-30%] right-[-10%] h-[700px] w-[700px] rounded-full bg-white/[0.03] blur-[160px]" />
      <div className="absolute top-1/3 left-[-15%] h-[600px] w-[600px] rounded-full bg-white/[0.025] blur-[160px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

      {/* Noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.35] mix-blend-overlay" />

      {/* Stars */}
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {withOrbits && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-orbit-slow">
            <div className="h-[720px] w-[720px] rounded-full border border-white/[0.05]" />
          </div>
          <div className="absolute inset-0 grid place-items-center animate-orbit-rev">
            <div className="h-[520px] w-[520px] rounded-full border border-white/[0.06]" />
          </div>
        </div>
      )}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.85)_100%)]" />
    </div>
  );
}
