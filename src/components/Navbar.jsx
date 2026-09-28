import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronRight, Zap, Shield, Cpu, Layers, Sparkles, Home, Wrench, Building2, Info, Mail } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Solutions', path: '/solutions', icon: Zap },
    { name: 'Smart Home', path: '/smart-home', icon: Cpu },
    { name: 'Electrical & Plumbing', path: '/electrical-plumbing', icon: Wrench },
    { name: 'Projects', path: '/projects', icon: Building2 },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050811]/90 backdrop-blur-2xl border-b border-cyan-500/20 py-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/30 p-1.5 flex items-center justify-center group-hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <img src="/favicon.svg" alt="TEZLA" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black tracking-[0.15em] text-white font-['Outfit'] group-hover:text-cyan-400 transition-colors flex items-center gap-1">
                  TEZLA
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.18em] text-slate-400 uppercase -mt-0.5">
                  ENGINEERING & SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-1.5 text-xs font-bold tracking-wider rounded-xl font-['Outfit'] uppercase transition-all ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                        : 'text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:8921223532"
                className="flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors px-3.5 py-2 rounded-full border border-cyan-500/30 hover:border-cyan-400 bg-cyan-500/10 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
                <span>89212 23532</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="btn-primary text-xs font-extrabold uppercase py-2.5 px-5 flex items-center gap-1.5 shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              >
                <span>GET A QUOTE</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Toggle & Direct Call */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:8921223532"
                className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.2)] active:scale-95 transition-all"
                aria-label="Call Tezla Engineering"
              >
                <Phone className="w-4 h-4 animate-pulse" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white hover:text-cyan-400 active:scale-95 transition-all"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer (Enhanced Glassmorphic Touch Navigation) */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-16 right-3 left-3 bg-[#0a1124]/95 border border-cyan-500/30 rounded-3xl p-5 shadow-[0_0_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl transition-all duration-300 transform max-h-[85vh] overflow-y-auto ${
            mobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-6 scale-95'
          }`}
        >
          {/* Header info in drawer */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-black tracking-widest text-cyan-400 uppercase font-['Outfit']">
                TEZLA NAVIGATION
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links with Icons */}
          <div className="flex flex-col gap-2 mb-5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center justify-between p-3 rounded-2xl transition-all font-['Outfit'] uppercase text-xs font-bold border ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                      : 'bg-slate-900/60 text-slate-300 border-slate-800/80 hover:bg-cyan-500/10 hover:text-cyan-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-xl ${isActive ? 'bg-cyan-500 text-black' : 'bg-slate-800 text-cyan-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{link.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </Link>
              );
            })}
          </div>

          {/* Actions inside mobile drawer */}
          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full btn-primary text-center py-3 text-xs font-extrabold uppercase tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              GET A SMART QUOTE
            </button>

            <a
              href="tel:8921223532"
              className="w-full text-center py-3 rounded-2xl border border-cyan-500/40 text-cyan-400 font-bold text-xs flex items-center justify-center gap-2 bg-cyan-500/10 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>CALL 89212 23532 / 86063 50505</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
