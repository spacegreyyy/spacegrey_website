import { useEffect, useState } from "react";
import orbitLogo from "@/assets/spacegrey-orbit.png";
import loadingBg from "@/assets/loading.mp4";
import loadingMobile from "@/assets/loading-mobile.png";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const steps = 60;
    const interval = 1600 / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1 + Math.random() * 2;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
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
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center transition-opacity duration-500 overflow-hidden"
      style={{
        opacity: leaving ? 0 : 1,
        pointerEvents: leaving ? "none" : "auto",
      }}
      aria-hidden="true"
    >
      {/* Video background — all devices */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src={loadingBg}
      />
      {/* Mobile static image fallback */}
      <div
        className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${loadingMobile})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content — centered */}
      <div className="relative z-10 flex flex-col items-center gap-10">
        {/* Orbit logo — large and centered */}
        <div
          style={{
            animation: "reveal-up 0.7s cubic-bezier(0.2,0.7,0.2,1) both",
          }}
        >
          <img
            src={orbitLogo}
            alt="SpaceGrey"
            className="h-48 w-48 invert opacity-90 animate-orbit-slow"
          />
        </div>

        {/* Progress bar */}
        <div
          className="w-64 flex flex-col items-center gap-3"
          style={{
            animation: "reveal-up 1s cubic-bezier(0.2,0.7,0.2,1) 0.2s both",
          }}
        >
          <div className="w-full h-px bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 tabular-nums">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
}
