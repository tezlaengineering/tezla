import React from 'react';
import { Cpu, Layers, ShieldCheck, Sliders, Headphones, Rocket, CheckCircle } from 'lucide-react';

export default function WhyTezla() {
  const pillars = [
    {
      num: '01',
      title: 'SMART TECHNOLOGY',
      desc: "Modern automation solutions designed specifically for today's connected lifestyle.",
      icon: Cpu,
    },
    {
      num: '02',
      title: 'COMPLETE SOLUTIONS',
      desc: 'From smart automation to complete electrical & plumbing infrastructure — multiple services under one trusted roof.',
      icon: Layers,
    },
    {
      num: '03',
      title: 'PROFESSIONAL EXECUTION',
      desc: 'Meticulous planning, standard-compliant cabling, rigorous testing, and flawless implementation.',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'CUSTOMIZED APPROACH',
      desc: 'Every property is unique. We tailor engineering solutions specifically to your architectural layout and budget.',
      icon: Sliders,
    },
    {
      num: '05',
      title: 'RELIABLE SUPPORT',
      desc: "Our customer relationship doesn't end after handover. We provide ongoing maintenance and prompt support.",
      icon: Headphones,
    },
    {
      num: '06',
      title: 'FUTURE READY',
      desc: 'Build your space today with modular technology that expands effortlessly with tomorrow’s smart innovations.',
      icon: Rocket,
    },
  ];

  return (
    <section id="why-tezla" className="py-24 relative bg-[#050811] overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 font-['Outfit']">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>THE TEZLA COMMITMENT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight mb-4">
            WHY CHOOSE <span className="text-gradient-cyan">TEZLA?</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal">
            We bridge high-tech home automation with grounded, heavy-duty electrical and plumbing engineering.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-3xl p-8 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 relative group hover:-translate-y-1 overflow-hidden"
              >
                {/* Number Watermark */}
                <div className="absolute top-4 right-6 text-5xl font-black font-['Outfit'] text-slate-800/40 group-hover:text-cyan-500/10 transition-colors pointer-events-none">
                  {item.num}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-black transition-all shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-black text-white font-['Outfit'] mb-3 tracking-wide group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
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
