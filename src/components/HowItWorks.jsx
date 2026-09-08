import React from 'react';
import { MessageSquare, Layout, Palette, Wrench, CheckCircle, Smile, ArrowDown } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'CONSULT',
      desc: 'Tell us about your property, lifestyle, automation expectations, electrical & plumbing requirements.',
      icon: MessageSquare,
    },
    {
      step: '02',
      title: 'PLAN',
      desc: 'Our engineering team conducts space studies, electrical load calculations, and structural planning.',
      icon: Layout,
    },
    {
      step: '03',
      title: 'DESIGN',
      desc: 'We map out custom schematic diagrams, selecting exact components based on aesthetics and budget.',
      icon: Palette,
    },
    {
      step: '04',
      title: 'INSTALL',
      desc: 'Licensed technicians professionally wire, mount, configure panels, and integrate all smart devices.',
      icon: Wrench,
    },
    {
      step: '05',
      title: 'TEST',
      desc: 'Rigorous stress-testing of electrical loads, pressure checks, and smart app scene calibrations.',
      icon: CheckCircle,
    },
    {
      step: '06',
      title: 'ENJOY',
      desc: 'Step into your newly transformed space — convenient, secure, efficient, and effortless.',
      icon: Smile,
    },
  ];

  return (
    <section className="py-24 relative bg-[#070c1b] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 font-['Outfit']">
            <span>THE 6-STEP TEZLA PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight mb-4">
            FROM IDEA TO <span className="text-gradient-cyan">SMART SPACE.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal">
            A clear, transparent, and structured execution pipeline from initial consultation to final handover.
          </p>
        </div>

        {/* 6 Steps Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-extrabold text-cyan-400 tracking-widest font-['Outfit'] uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                      STEP {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white font-['Outfit'] mb-3 tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow connector except last */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-end mt-4 text-cyan-500/40 group-hover:text-cyan-400 transition-colors">
                    <span className="text-xs font-mono font-bold mr-2">NEXT PHASE</span>
                    <ArrowDown className="w-4 h-4 transform -rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
