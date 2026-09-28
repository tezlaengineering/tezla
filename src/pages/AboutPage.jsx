import React from 'react';
import AboutSection from '../components/AboutSection';
import WhyTezla from '../components/WhyTezla';
import HowItWorks from '../components/HowItWorks';
import ContactSection from '../components/ContactSection';
import { Info } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 bg-[#050811] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 font-['Outfit']">
          <Info className="w-3.5 h-3.5 text-cyan-400" />
          <span>ABOUT TEZLA ENGINEERING</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white font-['Outfit'] tracking-tight mb-4">
          OUR MISSION & <span className="text-gradient-cyan">STORY.</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Combining modern smart automation with grounded, heavy-duty electrical and plumbing engineering in Kattappana, Kerala.
        </p>
      </div>

      <AboutSection />
      <WhyTezla />
      <HowItWorks />
      <ContactSection selectedServiceFromParent={null} />
    </div>
  );
}
