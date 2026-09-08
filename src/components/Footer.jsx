import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ChevronRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Smart Home Automation',
    'Electrical Automation',
    'CCTV & Security',
    'Access Control',
    'Smart Interiors',
    'Electrical Solutions',
    'Plumbing Solutions',
  ];

  return (
    <footer className="bg-[#03050c] text-slate-400 pt-16 pb-12 border-t border-slate-800/80 relative overflow-hidden font-['Inter']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/30 p-1.5 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <img src="/favicon.svg" alt="TEZLA Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-[0.15em] text-white font-['Outfit']">
                  TEZLA
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-cyan-400 uppercase -mt-1 font-['Outfit']">
                  ENGINEERING AND SOLUTIONS
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Integrated technology and engineering solutions for modern homes, offices, villas, apartments, shops, hotels, and commercial spaces.
            </p>

            <div className="text-xs font-bold text-cyan-400 font-['Outfit'] uppercase tracking-widest pt-2">
              SMART SPACES. BRIGHTER LIVING.
            </div>
          </div>

          {/* Service Links (Col 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest font-['Outfit'] mb-4">
              OUR ENGINEERING SERVICES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {services.map((srv) => (
                <a
                  key={srv}
                  href="#services"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors py-1 font-['Outfit']"
                >
                  <ChevronRight className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span>{srv}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Contact & Location (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest font-['Outfit'] mb-4">
              CONTACT & HEADQUARTERS
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Ambalakavala, Kattappana, Kerala, India</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:8921223532" className="hover:text-cyan-400 transition-colors font-semibold">
                  89212 23532 / 86063 50505
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:info@tezlaengineering.in" className="hover:text-cyan-400 transition-colors">
                  info@tezlaengineering.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Tagline & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="text-[11px] font-extrabold tracking-[0.2em] text-cyan-400 font-['Outfit'] uppercase">
            AUTOMATE • SECURE • ENHANCE • LIVE SMARTER
          </div>

          <div className="text-slate-400 text-[11px]">
            © {new Date().getFullYear()} TEZLA Engineering and Solutions. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-1.5 text-[11px] font-bold font-['Outfit'] uppercase"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
