import React from 'react';
import { Cpu, ShieldCheck, Wrench, Sparkles, CheckCircle2, Layers, Compass } from 'lucide-react';

export default function IntroPhilosophy() {
  const features = [
    {
      title: 'Integrated Control',
      desc: 'Single app or wall-touch control over your entire property’s lighting, climate, security, and power systems.',
      icon: Cpu,
    },
    {
      title: 'Full Engineering Precision',
      desc: 'Expert electrical panel installations, standard-compliant wiring, and heavy-duty commercial/residential plumbing.',
      icon: Wrench,
    },
    {
      title: '360° Perimeter Security',
      desc: 'Intelligent AI-driven CCTV surveillance, digital door access, and remote video door monitoring 24/7.',
      icon: ShieldCheck,
    },
    {
      title: 'Architectural Interiors',
      desc: 'Tech solutions seamlessly woven into high-end interior aesthetics without messy cables or exposed conduits.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 relative bg-[#070c1b] border-y border-slate-800/80 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 font-['Outfit']">
            <Compass className="w-3.5 h-3.5" />
            <span>OUR CORE PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight mb-6">
            TECHNOLOGY THAT FEELS LIKE <span className="text-gradient-cyan">HOME.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Your home should work around you — not the other way around. At{' '}
            <strong className="text-white font-bold">TEZLA Engineering and Solutions</strong>, we combine smart technology, electrical engineering, security, plumbing, and modern interior solutions into one cohesive, effortless ecosystem.
          </p>
        </div>

        {/* Big Highlight Box */}
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-10 mb-16 relative overflow-hidden text-center bg-gradient-to-r from-cyan-950/40 via-slate-900/80 to-blue-950/40 border border-cyan-500/30">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-[0.25em] font-['Outfit'] block mb-2">
            THE TEZLA ADVANTAGE
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight mb-4">
            One Team. Multiple Solutions. Smarter Spaces.
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Eliminate the hassle of coordinating separate contractors for electrical, plumbing, security, and automation. TEZLA provides end-to-end consulting, planning, installation, and long-term support for your residential or commercial project in Kattappana, Kerala.
          </p>
        </div>

        {/* 4 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:bg-cyan-500 group-hover:text-black transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white font-['Outfit'] mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
