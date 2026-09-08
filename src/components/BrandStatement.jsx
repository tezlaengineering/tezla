import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function BrandStatement({ onOpenQuote }) {
  return (
    <section className="relative py-32 bg-[#050811] overflow-hidden flex items-center justify-center border-y border-slate-800">
      {/* Background Image with Cinematic Dark Gradient */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="/assets/images/hero_smart_villa.jpg"
          alt="Cinematic TEZLA Living"
          className="w-full h-full object-cover filter saturate-150 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050811] via-[#050811]/90 to-[#050811]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-[#050811]" />
      </div>

      {/* Ambient Blue Glowing Orbs */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[180px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 text-xs font-bold uppercase tracking-[0.25em] mb-8 font-['Outfit'] shadow-[0_0_20px_rgba(0,240,255,0.2)]">
          <Sparkles className="w-4 h-4" />
          <span>TEZLA VISION</span>
        </div>

        {/* Big Typography Stack */}
        <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight font-['Outfit'] leading-[1.05] text-white mb-8">
          AUTOMATE. <br />
          <span className="text-gradient-cyan">SECURE.</span> ENHANCE. <br />
          <span className="text-white drop-shadow-[0_0_35px_rgba(0,240,255,0.5)]">LIVE SMARTER.</span>
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-2xl font-light text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-['Outfit']">
          The future of living isn’t somewhere far away.{' '}
          <strong className="text-cyan-400 font-extrabold">It’s the space around you.</strong>
        </p>

        <button
          onClick={onOpenQuote}
          className="btn-primary text-sm font-extrabold py-4 px-9 uppercase tracking-widest inline-flex items-center gap-3"
        >
          <span>BUILD YOUR SMART SPACE</span>
          <ArrowUpRight className="w-5 h-5" />
        </button>

      </div>
    </section>
  );
}
