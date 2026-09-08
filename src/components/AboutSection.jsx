import React from 'react';
import { MapPin, Phone, Mail, Award, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const steps = [
    { title: 'Understand', desc: 'Deeply analyzing your property architecture and daily lifestyle needs.' },
    { title: 'Design', desc: 'Crafting precise electrical, plumbing, and automation blueprints.' },
    { title: 'Integrate', desc: 'Installing high-grade hardware with clean cabling & smart protocol sync.' },
    { title: 'Deliver', desc: 'Thorough testing, user training, and long-term ongoing maintenance.' },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#050811] overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Info Column (Col 7) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 font-['Outfit']">
              <Award className="w-3.5 h-3.5" />
              <span>ABOUT TEZLA ENGINEERING</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight mb-6">
              ENGINEERING A <span className="text-gradient-cyan">SMARTER FUTURE.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-6">
              <strong className="text-white font-bold">TEZLA Engineering and Solutions</strong> is a modern technology and engineering firm based in Kattappana, Kerala. We focus on transforming homes, villas, offices, and commercial spaces into intelligent, secure, and energy-efficient environments.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 font-normal">
              We believe technology should simplify life rather than complicate it. That’s why we focus on practical, user-friendly solutions that are professionally installed and built to last.
            </p>

            {/* Approach Framework */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 mb-8">
              <h4 className="text-xs font-extrabold text-cyan-400 uppercase tracking-widest font-['Outfit'] mb-4">
                OUR SIMPLE 4-WORD METHODOLOGY:
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {steps.map((st, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-lg font-black text-white font-['Outfit'] flex items-center gap-1.5">
                      <span className="text-cyan-400 text-sm">{idx + 1}.</span> {st.title}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-1 leading-snug font-normal">
                      {st.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Local presence card */}
            <div className="flex flex-wrap items-center gap-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Ambalakavala, Kattappana, Kerala</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>89212 23532 / 86063 50505</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>info@tezlaengineering.in</span>
              </div>
            </div>

          </div>

          {/* Right Architectural Image Showcase (Col 5) */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel-glow rounded-3xl p-4 border border-cyan-500/30 relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-800">
                <img
                  src="/assets/images/hero_smart_villa.jpg"
                  alt="TEZLA Engineering HQ Vision"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent" />

                {/* Overlaid Pill Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-cyan-500/30">
                  <div className="text-xs font-extrabold text-cyan-400 font-['Outfit'] uppercase mb-1">
                    KATTAPPANA HEADQUARTERS
                  </div>
                  <div className="text-sm font-bold text-white">
                    Serving High-Range & Across Kerala
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Integrated Smart Home, Security, Electrical & Plumbing
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
