import React from 'react';
import SmartHomeExperience from '../components/SmartHomeExperience';
import ContactSection from '../components/ContactSection';
import { Cpu, Sparkles, CheckCircle2, Sliders, Shield, Sun } from 'lucide-react';

export default function SmartHomePage({ onOpenQuote }) {
  return (
    <div className="pt-24 pb-16 bg-[#050811] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 font-['Outfit']">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>TEZLA SMART HOME OS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white font-['Outfit'] tracking-tight mb-4">
          SMART HOME <span className="text-gradient-cyan">AUTOMATION.</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Control your lights, drapes, security, audio, and climate from a single wall touch-panel or smartphone app anywhere in the world.
        </p>
      </div>

      <SmartHomeExperience />

      {/* Highlights Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel-glow rounded-3xl p-6 border border-slate-800">
            <Sun className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white font-['Outfit'] mb-2">Architectural Mood Lighting</h3>
            <p className="text-xs text-slate-300">Set preset lighting scenes for evening relaxation, movie night, or dinner parties with a single tap.</p>
          </div>
          <div className="glass-panel-glow rounded-3xl p-6 border border-slate-800">
            <Sparkles className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white font-['Outfit'] mb-2">Automated Curtain Tracks</h3>
            <p className="text-xs text-slate-300">Schedule blinds to open with morning sunlight and close automatically for evening privacy.</p>
          </div>
          <div className="glass-panel-glow rounded-3xl p-6 border border-slate-800">
            <Shield className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white font-['Outfit'] mb-2">Smart Biometric Locks</h3>
            <p className="text-xs text-slate-300">Keyless entry via fingerprint scanner, RFID passcards, digital pin, and remote video doorbell access.</p>
          </div>
        </div>
      </div>

      <ContactSection selectedServiceFromParent="Smart Home Automation" />
    </div>
  );
}
