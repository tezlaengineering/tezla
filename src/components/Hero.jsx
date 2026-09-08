import React, { useState } from 'react';
import { ArrowRight, Phone, ShieldCheck, Zap, Home, Sparkles, SlidersHorizontal, Play } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const [activeScene, setActiveScene] = useState('dusk'); // dusk, night, party
  const [lightsOn, setLightsOn] = useState(true);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#050811]">
      {/* Dynamic Background Image & Particle Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero_smart_villa.jpg"
          alt="TEZLA Smart Architectural Villa"
          className={`w-full h-full object-cover transition-all duration-1000 transform scale-105 ${
            lightsOn ? 'brightness-[0.75] contrast-[1.1]' : 'brightness-[0.35] contrast-[1.2]'
          }`}
        />
        {/* Dark Radial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/60 to-[#050811]/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050811]/70 to-[#050811]" />
        
        {/* Electric Light Overlay when Lights ON */}
        {lightsOn && (
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-transparent pointer-events-none animate-pulse-glow" />
        )}
      </div>

      {/* Floating Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Headline Column (Col 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-bold font-['Outfit'] uppercase tracking-widest mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.2)] animate-float">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>SMART HOME • ELECTRICAL • SECURITY • PLUMBING • INTERIORS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-['Outfit'] leading-[1.08] mb-6">
              SMART SPACES. <br />
              <span className="text-gradient-cyan drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
                BRIGHTER LIVING.
              </span>
            </h1>

            {/* Subheading & Description */}
            <p className="text-lg sm:text-xl font-semibold text-cyan-300 font-['Outfit'] mb-3">
              Intelligent technology. Professional engineering. Complete solutions.
            </p>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              Transform your home or business into a smarter, safer, more connected space with{' '}
              <strong className="text-white font-bold">TEZLA Engineering and Solutions</strong>. From full automation & smart lighting to high-end CCTV, access control, electrical panels, and plumbing systems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#services"
                className="btn-primary flex items-center justify-center gap-2 text-sm font-bold uppercase py-3.5 px-7"
              >
                <span>EXPLORE SOLUTIONS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenQuote}
                className="btn-secondary flex items-center justify-center gap-2 text-sm font-bold uppercase py-3.5 px-7"
              >
                <span>GET A SMART QUOTE</span>
              </button>

              <a
                href="tel:8921223532"
                className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-cyan-400 transition-colors px-4 py-3 rounded-full bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call 89212 23532</span>
              </a>
            </div>

            {/* Trust Metrics Pill Bar */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/80 w-full max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">100%</div>
                <div className="text-xs text-slate-400 font-medium">Integrated Automation</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-['Outfit']">24/7</div>
                <div className="text-xs text-slate-400 font-medium">Security & Monitoring</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">Kattappana</div>
                <div className="text-xs text-slate-400 font-medium">Kerala Operations</div>
              </div>
            </div>

          </div>

          {/* Interactive Villa Simulation Card (Col 5) */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel-glow rounded-3xl p-6 relative overflow-hidden group">
              {/* Card Top Label */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase font-['Outfit']">
                    LIVE SYSTEM SIMULATOR
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                  TEZLA HUB OS v4.2
                </span>
              </div>

              {/* Interactive Villa Canvas Frame */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-cyan-500/20 mb-5 group">
                <img
                  src="/assets/images/smart_living_room.jpg"
                  alt="Smart Living Room Interactive"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    lightsOn ? 'brightness-110 saturate-110' : 'brightness-50 saturate-50'
                  }`}
                />
                
                {/* Overlay Lighting Rays */}
                {lightsOn && (
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent pointer-events-none" />
                )}

                {/* Hotspot Indicators */}
                <div className="absolute top-1/3 left-1/4 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-400/40 shadow-lg text-[11px] font-bold text-white">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Smart Mood Lights</span>
                </div>

                <div className="absolute bottom-1/3 right-1/4 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-400/40 shadow-lg text-[11px] font-bold text-white">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span>CCTV Live Feed Active</span>
                </div>

                {/* Quick Toggle On Image */}
                <button
                  onClick={() => setLightsOn(!lightsOn)}
                  className="absolute bottom-4 left-4 bg-slate-900/90 hover:bg-cyan-500 hover:text-black border border-cyan-400/40 text-cyan-400 text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-xl flex items-center gap-2"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>{lightsOn ? 'TURN OFF SCENE' : 'ACTIVATE SMART SCENE'}</span>
                </button>
              </div>

              {/* Controls Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-medium text-slate-300">Power Grid</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-500/10">
                    OPTIMAL
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-medium text-slate-300">Security</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10">
                    ARMED
                  </span>
                </div>
              </div>

              {/* Bottom Interactive Message */}
              <p className="text-[11px] text-center text-slate-400 mt-4 font-['Outfit']">
                💡 Click <strong className="text-cyan-400">ACTIVATE SMART SCENE</strong> to see lighting automation in action
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
