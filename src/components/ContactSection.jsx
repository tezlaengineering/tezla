import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ selectedServiceFromParent }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Kattappana',
    propertyType: 'Home',
    services: selectedServiceFromParent ? [selectedServiceFromParent] : ['Smart Home Automation'],
    message: '',
  });

  const propertyTypes = ['Home', 'Villa', 'Apartment', 'Office', 'Shop', 'Hotel / Resort', 'Commercial Building', 'Other'];

  const serviceOptions = [
    'Smart Home Automation',
    'Electrical Automation',
    'CCTV & Security',
    'Access Control',
    'Smart Interiors',
    'Electrical Works',
    'Plumbing Works',
    'Complete Project Solution',
  ];

  const handleServiceChipToggle = (srv) => {
    if (formData.services.includes(srv)) {
      setFormData({
        ...formData,
        services: formData.services.filter((s) => s !== srv),
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, srv],
      });
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00F0FF', '#0066FF', '#25D366'],
    });

    // Format WhatsApp text message
    const textMessage = `*NEW PROJECT ENQUIRY — TEZLA ENGINEERING* ⚡

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
${formData.email ? `📧 *Email:* ${formData.email}\n` : ''}📍 *Location:* ${formData.location}
🏠 *Property Type:* ${formData.propertyType}
🛠️ *Services Required:* ${formData.services.join(', ') || 'General Project Solution'}
${formData.message ? `💬 *Project Details:* ${formData.message}\n` : ''}
---
Sent from TEZLA Engineering Official Website.`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/918921223532?text=${encodedText}`;

    // Open WhatsApp directly in new window / app
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-[#070c1b] overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 font-['Outfit']">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>INSTANT WHATSAPP DIRECT CONNECT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight mb-4">
            LET'S BUILD SOMETHING <span className="text-gradient-cyan">SMART.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal">
            Submit your project details below to chat directly with our senior engineering team on **WhatsApp**.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Direct Contact Cards (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Direct Action Card */}
            <div className="glass-panel-glow rounded-3xl p-6 border border-emerald-500/40 bg-gradient-to-br from-[#0a1420] via-slate-900 to-emerald-950/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(37,211,102,0.3)]">
                  <MessageCircle className="w-6 h-6 animate-bounce text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-emerald-400 uppercase font-['Outfit'] tracking-wider">
                    DIRECT WHATSAPP DESK
                  </h4>
                  <div className="text-xl font-black text-white font-['Outfit']">
                    89212 23532 / 86063 50505
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                Connect instantly with TEZLA Engineering specialists for immediate quotes, site visits, and layout plans.
              </p>
              <div className="flex gap-2">
                <a
                  href="https://wa.me/918921223532"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full btn-primary text-center text-xs font-extrabold uppercase py-3 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 text-black shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>CHAT ON WHATSAPP NOW</span>
                </a>
              </div>
            </div>

            {/* Location & Address Card */}
            <div className="glass-panel rounded-3xl p-6 border border-slate-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase font-['Outfit'] tracking-wider">
                    HEAD OFFICE LOCATION
                  </h4>
                  <div className="text-lg font-bold text-white font-['Outfit']">
                    Ambalakavala, Kattappana
                  </div>
                  <div className="text-xs text-cyan-400 font-semibold">
                    Idukki District, Kerala, India
                  </div>
                </div>
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                Operational coverage: Kattappana, Adimali, Thodupuzha, Kumily, Munnar, & Across Kerala.
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-panel rounded-3xl p-6 border border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase font-['Outfit'] tracking-wider">
                    OFFICIAL EMAIL
                  </h4>
                  <a href="mailto:info@tezlaengineering.in" className="text-base font-bold text-white hover:text-cyan-400 transition-colors">
                    info@tezlaengineering.in
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Mon - Sat (8:30 AM - 7:00 PM)</span>
              </div>
              <span className="text-emerald-400 font-mono text-[10px] font-bold">WHATSAPP ACTIVE</span>
            </div>

          </div>

          {/* Right Interactive Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow rounded-3xl p-6 sm:p-10 border border-cyan-500/30">
              
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                
                <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-black uppercase text-emerald-400 font-['Outfit'] tracking-wider">
                    ALL ENQUIRIES SENT DIRECTLY TO WHATSAPP
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest font-['Outfit'] mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-white placeholder-slate-500 text-xs focus:border-emerald-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest font-['Outfit'] mb-2">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="89212 23532"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-white placeholder-slate-500 text-xs focus:border-emerald-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Location */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest font-['Outfit'] mb-2">
                      PROJECT LOCATION
                    </label>
                    <input
                      type="text"
                      placeholder="Kattappana, Kerala"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-xs focus:border-emerald-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Property Type Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest font-['Outfit'] mb-2">
                      PROPERTY TYPE
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-xs focus:border-emerald-400 focus:outline-none transition-colors"
                    >
                      {propertyTypes.map((pt) => (
                        <option key={pt} value={pt} className="bg-slate-900 text-white">
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Multi-select Services Required */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest font-['Outfit'] mb-3">
                    SERVICES REQUIRED (MULTI-SELECT)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((srv) => {
                      const isSelected = formData.services.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => handleServiceChipToggle(srv)}
                          className={`px-3 py-1.5 rounded-xl text-[11px] font-bold font-['Outfit'] transition-all border ${
                            isSelected
                              ? 'bg-emerald-500 text-black border-emerald-300 font-extrabold shadow-sm'
                              : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest font-['Outfit'] mb-2">
                    TELL US ABOUT YOUR PROJECT
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Describe your property details, square footage, or special automation requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-white placeholder-slate-500 text-xs focus:border-emerald-400 focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit WhatsApp Button */}
                <button
                  type="submit"
                  className="w-full btn-primary text-xs sm:text-sm font-extrabold uppercase py-4 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-black shadow-[0_0_25px_rgba(37,211,102,0.4)]"
                >
                  <MessageCircle className="w-5 h-5 fill-black" />
                  <span>SEND ENQUIRY VIA WHATSAPP</span>
                </button>

                <p className="text-[10px] text-center text-slate-400 font-mono">
                  🔒 Clicking will open WhatsApp directly with your project details filled in.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
