import React from 'react';
import { Phone, MessageCircle, Calculator } from 'lucide-react';

export default function MobileQuickBar({ onOpenQuote }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#070c1b]/95 border-t border-cyan-500/30 p-2.5 backdrop-blur-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.9)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now Button */}
        <a
          href="tel:8921223532"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold text-[10px] font-['Outfit'] uppercase shadow-[0_0_15px_rgba(0,240,255,0.4)] active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 mb-0.5 animate-bounce text-black" />
          <span>CALL NOW</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href="https://wa.me/918921223532"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold text-[10px] font-['Outfit'] uppercase active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 text-emerald-400" />
          <span>WHATSAPP</span>
        </a>

        {/* Get Quote */}
        <button
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-400 font-bold text-[10px] font-['Outfit'] uppercase active:scale-95 transition-all"
        >
          <Calculator className="w-4 h-4 mb-0.5 text-cyan-400" />
          <span>GET QUOTE</span>
        </button>
      </div>
    </div>
  );
}
