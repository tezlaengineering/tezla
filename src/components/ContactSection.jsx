import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
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

  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00F0FF', '#0066FF', '#FFFFFF'],
    });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#070c1b] overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 font-['Outfit']">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>START YOUR PROJECT TODAY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight mb-4">
            LET'S BUILD SOMETHING <span className="text-gradient-cyan">SMART.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal">
            Whether you are constructing a new villa, renovating an office, or upgrading security, our team in Kattappana is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Direct Contact Cards (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="glass-panel-glow rounded-3xl p-6 border border-cyan-500/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <Phone className="w-6 h-6 animate-bounce" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase font-['Outfit'] tracking-wider">
                    DIRECT CALL & WHATSAPP
                  </h4>
                  <div className="text-xl font-black text-white font-['Outfit']">
                    89212 23532 / 86063 50505
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-300 mb-4">
                Speak directly with our senior automation & electrical engineering specialists.
              </p>
              <div className="flex gap-2">
                <a
                  href="tel:8921223532"
                  className="w-full btn-primary text-center text-xs font-bold uppercase py-2.5"
                >
                  CALL NOW
                </a>
                <a
                  href="https://wa.me/918921223532"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full btn-secondary text-center text-xs font-bold uppercase py-2.5 flex items-center justify-center gap-1.5"
                >
                  <span>WHATSAPP</span>
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
                    OPERATIONAL LOCATION
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
                Primary coverage: Kattappana, Adimali, Thodupuzha, Kumily, Munnar, & Across Kerala.
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
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Working Hours: Mon - Sat (8:30 AM - 7:00 PM)</span>
              </div>
              <span className="text-emerald-400 font-mono text-[10px] font-bold">OPEN</span>
            </div>

          </div>

          {/* Right Interactive Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow rounded-3xl p-8 sm:p-10 border border-cyan-500/30">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
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
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-white placeholder-slate-500 text-xs focus:border-cyan-400 focus:outline-none transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-white placeholder-slate-500 text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest font-['Outfit'] mb-2">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-white placeholder-slate-500 text-xs focus:border-cyan-400 focus:outline-none transition-colors"
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
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-xs focus:border-cyan-400 focus:outline-none transition-colors"
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
                                ? 'bg-cyan-500 text-black border-cyan-300 font-extrabold shadow-sm'
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
                      rows="4"
                      placeholder="Describe your site details, timeline, or special smart features..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-white placeholder-slate-500 text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-primary text-xs sm:text-sm font-extrabold uppercase py-4 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND ENQUIRY</span>
                  </button>

                </form>
              ) : (
                /* Success View */
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 mx-auto mb-6 shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="text-3xl font-black text-white font-['Outfit'] mb-2">
                    ENQUIRY RECEIVED!
                  </h3>

                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you, <strong className="text-cyan-400">{formData.name}</strong>. Our engineering manager will contact you at <strong className="text-white">{formData.phone}</strong> shortly to discuss your project.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary text-xs font-bold uppercase py-3 px-8"
                  >
                    SEND ANOTHER ENQUIRY
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
