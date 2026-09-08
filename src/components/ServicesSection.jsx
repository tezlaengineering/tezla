import React, { useState } from 'react';
import {
  Cpu,
  Zap,
  Shield,
  Lock,
  Sparkles,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';

export default function ServicesSection({ onSelectService }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const services = [
    {
      num: '01',
      title: 'SMART HOME AUTOMATION',
      tagline: 'Make your home respond to you.',
      desc: 'Control lighting, curtains, appliances, climate, entertainment, security, and other connected devices through intelligent automation.',
      image: '/assets/images/smart_living_room.jpg',
      icon: Cpu,
      solutions: [
        'Smart Lighting Control',
        'Smart Touch Switches',
        'Automated Curtains & Blinds',
        'Smart Motion & Climate Sensors',
        'Full Home Automation Controllers',
        'Scene & Mood Lighting Presets',
        'Smart Appliance Control',
        'Voice (Alexa/Siri) & Mobile Control',
      ],
      ctaText: 'Explore Smart Home',
    },
    {
      num: '02',
      title: 'ELECTRICAL AUTOMATION',
      tagline: 'Smarter control for modern electrical systems.',
      desc: 'We design and implement electrical solutions that improve convenience, control, energy efficiency, and operational functionality.',
      image: '/assets/images/electrical_automation.jpg',
      icon: Zap,
      solutions: [
        'Electrical Automation Panels',
        'Smart Switching Modules',
        'Architectural Lighting Control',
        'Full Residential & Commercial Wiring',
        'Power Distribution Systems',
        'Electrical System Upgrades',
        'Preventive Maintenance',
        'Central Control Interfaces',
      ],
      ctaText: 'Explore Electrical Solutions',
    },
    {
      num: '03',
      title: 'CCTV & SECURITY',
      tagline: 'SEE. PROTECT. CONTROL.',
      desc: 'Protect what matters most with ultra-reliable 4K surveillance cameras, AI motion detection, and integrated security solutions.',
      image: '/assets/images/cctv_security_tech.jpg',
      icon: Shield,
      solutions: [
        'High-Resolution CCTV Cameras',
        'IP Surveillance Systems',
        '24/7 Mobile Remote Monitoring',
        'AI Smart Perimeter Detection',
        'Video Door Intercom Systems',
        'Integrated Alarm Systems',
        'Property & Commercial Monitoring',
      ],
      ctaText: 'Secure Your Space',
    },
    {
      num: '04',
      title: 'ACCESS CONTROL',
      tagline: 'CONTROL WHO ENTERS.',
      desc: 'Modern access solutions for homes, villas, offices, and commercial spaces with keyless biometric and digital control.',
      image: '/assets/images/smart_access_lock.jpg',
      icon: Lock,
      solutions: [
        'Smart Door Locks (Fingerprint/NFC)',
        'Digital Passcode Entry Locks',
        'RFID & Biometric Access Control',
        'Video Doorbells with 2-Way Talk',
        'Visitor Entry Management',
        'Smart Security System Integration',
      ],
      ctaText: 'Configure Access Lock',
    },
    {
      num: '05',
      title: 'SMART INTERIORS',
      tagline: 'BEAUTIFUL OUTSIDE. INTELLIGENT INSIDE.',
      desc: 'Integrate high-tech automation into your interior spaces without compromising architectural elegance and interior design.',
      image: '/assets/images/commercial_smart_office.jpg',
      icon: Sparkles,
      solutions: [
        'Concealed Tech Architecture',
        'Architectural Ambient Strip Lighting',
        'Motorized Interior Elements',
        'Acoustic & Media Room Controls',
        'Seamless Wall Touch Controllers',
        'Modern Lighting Design Integration',
      ],
      ctaText: 'Design Smart Interior',
    },
    {
      num: '06',
      title: 'COMPLETE ELECTRICAL & PLUMBING',
      tagline: 'ONE TEAM. COMPLETE SOLUTION.',
      desc: 'TEZLA provides comprehensive, heavy-duty electrical and plumbing infrastructure services for residential and commercial properties.',
      image: '/assets/images/plumbing_engineering.jpg',
      icon: Wrench,
      solutions: [
        'New Electrical Panel Wiring & Installation',
        'Structural Conduit & Lighting Wiring',
        'System Repairs, Testing & Maintenance',
        'Complete Plumbing System Installation',
        'Bathroom Plumbing Fixtures & Sanitary',
        'Pressurized Water Supply & Piping Work',
      ],
      ctaText: 'Discuss Infrastructure Project',
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-[#070c1b] border-b border-slate-800">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 font-['Outfit']">
            <Zap className="w-3.5 h-3.5" />
            <span>OUR INTEGRATED SERVICE VERTICALS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight mb-4">
            EVERYTHING YOUR <span className="text-gradient-cyan">SPACE NEEDS.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal">
            From single-room smart automation to complete end-to-end electrical, plumbing, and security projects for homes, villas, offices, and hotels.
          </p>
        </div>

        {/* 6 Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={idx}
                className={`glass-panel-glow rounded-3xl overflow-hidden border transition-all duration-500 flex flex-col justify-between ${
                  isExpanded
                    ? 'border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.25)] bg-[#0a1124]'
                    : 'border-slate-800 hover:border-cyan-500/30'
                }`}
              >
                <div>
                  {/* Image Header */}
                  <div className="relative aspect-[16/9] overflow-hidden group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1122] via-[#0a1122]/40 to-transparent" />
                    
                    {/* Service Number Badge */}
                    <div className="absolute top-4 left-4 font-['Outfit'] text-2xl font-black text-cyan-400 bg-slate-950/80 border border-cyan-500/30 px-3 py-1 rounded-xl backdrop-blur-md">
                      {item.num}
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-cyan-500 text-black flex items-center justify-center shadow-[0_0_20px_#00F0FF]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-white font-['Outfit'] mb-1 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-cyan-400 font-['Outfit'] uppercase mb-4 tracking-wider">
                      {item.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                      {item.desc}
                    </p>

                    {/* Expandable Solutions List */}
                    <div className="space-y-2 pt-4 border-t border-slate-800">
                      <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest font-['Outfit'] mb-3">
                        SOLUTIONS INCLUDED:
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        {item.solutions.slice(0, isExpanded ? item.solutions.length : 4).map((sol, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{sol}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 pt-0 mt-4 flex items-center justify-between border-t border-slate-800/60 pt-4">
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                    className="text-xs font-bold text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 font-['Outfit']"
                  >
                    {isExpanded ? (
                      <>
                        <span>Show Less</span>
                        <Minus className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        <span>View All ({item.solutions.length})</span>
                        <Plus className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onSelectService(item.title)}
                    className="btn-primary text-[11px] font-extrabold py-2 px-4 flex items-center gap-1.5 uppercase"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
