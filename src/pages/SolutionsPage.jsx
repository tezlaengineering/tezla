import React from 'react';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import { Zap, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SolutionsPage({ onSelectService, onOpenQuote }) {
  return (
    <div className="pt-24 pb-16 bg-[#050811] min-h-screen">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 font-['Outfit']">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>TEZLA SERVICE VERTICALS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white font-['Outfit'] tracking-tight mb-4">
          INTEGRATED ENGINEERING <span className="text-gradient-cyan">SOLUTIONS.</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          From high-end smart home automation to standard-compliant electrical wiring, 4K CCTV surveillance, and sanitary plumbing systems in Kattappana, Kerala.
        </p>
      </div>

      <ServicesSection onSelectService={onSelectService} />
      <ContactSection selectedServiceFromParent={null} />
    </div>
  );
}
