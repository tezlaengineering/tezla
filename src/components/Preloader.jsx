import React, { useEffect, useState } from 'react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050811] transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Animated TEZLA Logo Icon */}
        <div className="w-24 h-24 mb-6 relative">
          <img
            src="/tezla-logo.svg"
            alt="TEZLA Loading"
            className="w-full h-full drop-shadow-[0_0_25px_rgba(0,240,255,0.6)] animate-float"
          />
        </div>

        {/* Brand Name */}
        <h1 className="text-3xl font-extrabold tracking-[0.25em] text-white font-['Outfit'] mb-2">
          TEZLA
        </h1>
        <p className="text-xs tracking-[0.3em] font-semibold text-cyan-400 uppercase mb-8">
          ENGINEERING & SOLUTIONS
        </p>

        {/* Progressive Loading Line */}
        <div className="w-full h-[3px] bg-slate-800 rounded-full overflow-hidden mb-4 relative">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 transition-all duration-75 ease-out shadow-[0_0_12px_#00F0FF]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between w-full text-[11px] text-slate-400 font-mono">
          <span>INITIALIZING SMART INFRASTRUCTURE</span>
          <span className="text-cyan-400 font-bold">{progress}%</span>
        </div>

        <p className="mt-6 text-xs text-slate-400 tracking-widest font-['Outfit'] uppercase animate-pulse">
          SMART SPACES. BRIGHTER LIVING.
        </p>
      </div>
    </div>
  );
}
