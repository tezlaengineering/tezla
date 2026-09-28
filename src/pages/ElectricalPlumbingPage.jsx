import React from 'react';
import ElectricalPlumbing from '../components/ElectricalPlumbing';
import ContactSection from '../components/ContactSection';
import { Wrench } from 'lucide-react';

export default function ElectricalPlumbingPage({ onOpenQuote }) {
  return (
    <div className="pt-24 pb-16 bg-[#050811] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 font-['Outfit']">
          <Wrench className="w-3.5 h-3.5 text-cyan-400" />
          <span>HEAVY INFRASTRUCTURE ENGINEERING</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white font-['Outfit'] tracking-tight mb-4">
          ELECTRICAL & <span className="text-gradient-cyan">PLUMBING.</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Dependable power distribution, surge-protected wiring, and high-performance sanitary plumbing for residential & commercial properties in Kattappana, Kerala.
        </p>
      </div>

      <ElectricalPlumbing onOpenQuote={onOpenQuote} />
      <ContactSection selectedServiceFromParent="Electrical Works" />
    </div>
  );
}
