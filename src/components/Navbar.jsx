import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight, Zap, Shield, Cpu, Layers } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Solutions', href: '#services' },
    { name: 'Smart Home', href: '#smart-home-exp' },
    { name: 'Security', href: '#services' },
    { name: 'Electrical & Plumbing', href: '#electrical-plumbing' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050811]/85 backdrop-blur-xl border-b border-cyan-500/15 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/30 p-1.5 flex items-center justify-center group-hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <img src="/favicon.svg" alt="TEZLA" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-[0.15em] text-white font-['Outfit'] group-hover:text-cyan-400 transition-colors flex items-center gap-1">
                  TEZLA
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase -mt-0.5">
                  ENGINEERING & SOLUTIONS
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-cyan-500/10 font-['Outfit'] uppercase"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:8921223532"
                className="flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors px-3 py-2 rounded-full border border-cyan-500/30 hover:border-cyan-400 bg-cyan-500/5 hover:bg-cyan-500/10 shadow-[0_0_10px_rgba(0,240,255,0.15)]"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
                <span>89212 23532</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="btn-primary text-xs font-extrabold uppercase py-2.5 px-5 flex items-center gap-2"
              >
                <span>GET A QUOTE</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:8921223532"
                className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
                aria-label="Call Tezla"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-white hover:text-cyan-400"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 right-4 left-4 bg-[#0a1122]/95 border border-cyan-500/20 rounded-2xl p-6 shadow-2xl backdrop-blur-2xl transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-6 scale-95'
          }`}
        >
          <div className="flex flex-col gap-3 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-cyan-500/10 text-slate-200 hover:text-cyan-400 font-semibold font-['Outfit'] uppercase text-sm border border-transparent hover:border-cyan-500/20"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full btn-primary text-center py-3 text-xs font-bold uppercase tracking-wider"
            >
              GET A SMART QUOTE
            </button>

            <a
              href="tel:8921223532"
              className="w-full text-center py-3 rounded-xl border border-cyan-500/40 text-cyan-400 font-bold text-xs flex items-center justify-center gap-2 bg-cyan-500/10"
            >
              <Phone className="w-4 h-4" />
              <span>CALL 89212 23532 / 86063 50505</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
