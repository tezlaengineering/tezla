import React, { useState } from 'react';
import { Zap, Wrench, CheckCircle2, ArrowRight, ShieldCheck, Layers, FileText } from 'lucide-react';

export default function ElectricalPlumbing({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('electrical');

  const electricalServices = [
    'Complete New Electrical Wiring Installation',
    'Main Switchgear & DB Distribution Panels',
    'Concealed & Surface Conduit Wiring',
    'Architectural LED Lighting Fixtures & Track Lights',
    'Emergency Power Backup & Inverter Wiring',
    'Surge Protection & Safety Earthing Systems',
    'Troubleshooting, Fault Repair & Maintenance',
    'Commercial Load Distribution & Power Audits',
  ];

  const plumbingServices = [
    'Complete Residential & Commercial Water Piping',
    'Bathroom Sanitary Fixture Installation & Fitting',
    'Hot & Cold Water Supply Lines (CPVC / PPR / PEX)',
    'Water Tank & Hydro-Pneumatic Pump Systems',
    'Drainage, Soil Waste & Sewage Line Work',
    'Leakage Detection, Pressure Testing & Repairs',
    'Solar Water Heater Integration & Plumbing',
    'Preventive Maintenance Contracts for Properties',
  ];

  return (
    <section id="electrical-plumbing" className="py-24 relative bg-[#050811] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 font-['Outfit']">
            <Wrench className="w-3.5 h-3.5" />
            <span>CORE INFRASTRUCTURE ENGINEERING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight mb-6">
            ENGINEERING BEYOND <span className="text-gradient-cyan">AUTOMATION.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Technology is only one part of a great building. TEZLA provides dependable electrical and plumbing solutions to support the essential infrastructure of your property.
          </p>
        </div>

        {/* Tab Toggle Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('electrical')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold font-['Outfit'] uppercase transition-all ${
                activeTab === 'electrical'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>ELECTRICAL SOLUTIONS</span>
            </button>

            <button
              onClick={() => setActiveTab('plumbing')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold font-['Outfit'] uppercase transition-all ${
                activeTab === 'plumbing'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>PLUMBING SOLUTIONS</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 border border-cyan-500/30 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Text & Checklist (Col 7) */}
          <div className="lg:col-span-7">
            <div className="inline-block text-xs font-extrabold text-cyan-400 uppercase tracking-widest font-['Outfit'] mb-2">
              {activeTab === 'electrical' ? 'POWER & WIRING INFRASTRUCTURE' : 'WATER & SANITATION SYSTEMS'}
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight mb-4">
              {activeTab === 'electrical'
                ? 'Precision Electrical Systems for Lifetime Reliability.'
                : 'High-Performance Water Supply & Sanitary Engineering.'}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
              {activeTab === 'electrical'
                ? 'Whether you are constructing a new residence in Kattappana, renovating a commercial building, or upgrading old wiring, TEZLA executes standard-compliant electrical installations designed for maximum safety, clean cable routing, and energy efficiency.'
                : 'From modern luxury thermostatic concealed shower systems to heavy-duty water supply distribution tanks and piping networks, our experienced plumbers deliver leak-free, long-lasting plumbing engineering.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {(activeTab === 'electrical' ? electricalServices : plumbingServices).map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenQuote}
              className="btn-primary inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase py-3.5 px-8"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Image Feature Showcase (Col 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl group">
              <img
                src={
                  activeTab === 'electrical'
                    ? '/assets/images/electrical_automation.jpg'
                    : '/assets/images/plumbing_engineering.jpg'
                }
                alt={activeTab}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-4 rounded-xl border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white font-['Outfit']">
                    {activeTab === 'electrical' ? 'Heavy Panel Board Installation' : 'Sanitary & Piping Layout'}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    TEZLA CERTIFIED STANDARDS
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
