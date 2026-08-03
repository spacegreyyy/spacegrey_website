import { useEffect, useState } from "react";
import orbitLogo from "@/assets/spacegrey-orbit.png";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Animate progress bar from 0 → 100 over ~1.6s
    const steps = 60;
    const interval = 1600 / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1 + Math.random() * 2;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        // Short pause at 100%, then fade out
        setTimeout(() => {
          setLeaving(true);
          setTimeout(onDone, 500);
        }, 200);
      }
      setProgress(Math.min(current, 100));
    }, interval);

    return () => clearInterval(timer);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center transition-opacity duration-500"
      style={{
        opacity: leaving ? 0 : 1,
        pointerEvents: leaving ? "none" : "auto",
      }}
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-white/[0.05] blur-[140px] pointer-events-none" />

      {/* Stars */}
      {[
        { top: "15%", left: "20%", size: 1.5, delay: 0 },
        { top: "25%", left: "80%", size: 1, delay: 0.5 },
        { top: "70%", left: "15%", size: 1, delay: 1 },
        { top: "80%", left: "75%", size: 1.5, delay: 0.3 },
        { top: "45%", left: "90%", size: 1, delay: 0.8 },
        { top: "10%", left: "55%", size: 1, delay: 1.2 },
        { top: "60%", left: "60%", size: 1, delay: 0.6 },
        { top: "35%", left: "8%", size: 1.5, delay: 1.4 },
      ].map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      <div className="relative flex flex-col items-center gap-10">
        {/* Orbit logo */}
        <div
          style={{
            opacity: 1,
            animation: "reveal-up 0.7s cubic-bezier(0.2,0.7,0.2,1) both",
          }}
        >
          <img
            src={orbitLogo}
            alt=""
            className="h-[7.5rem] w-[7.5rem] invert opacity-90 animate-orbit-slow"
          />
        </div>

        {/* Big SPACEGREY wordmark */}
        <div
          style={{
            opacity: 1,
            animation: "reveal-up 0.9s cubic-bezier(0.2,0.7,0.2,1) 0.1s both",
          }}
        >
          <div className="text-[clamp(2.5rem,10vw,6rem)] font-bold tracking-[-0.05em] text-white leading-none select-none">
            SPACEGREY
          </div>
        </div>

        {/* Progress bar */}
        <div
          className="w-64 flex flex-col items-center gap-3"
          style={{
            animation: "reveal-up 1s cubic-bezier(0.2,0.7,0.2,1) 0.2s both",
          }}
        >
          <div className="w-full h-px bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 tabular-nums">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
}
