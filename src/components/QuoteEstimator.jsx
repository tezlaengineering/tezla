import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, X, Sparkles, Shield, Cpu, Zap, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuoteEstimator({ isOpen, onClose, onProceedToContact }) {
  const [propertyType, setPropertyType] = useState('Villa');
  const [sqft, setSqft] = useState(2500);
  const [selectedServices, setSelectedServices] = useState([
    'Smart Home Automation',
    'CCTV & Security',
    'Electrical Works'
  ]);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const propertyTypes = ['Home', 'Villa', 'Apartment', 'Office', 'Shop', 'Hotel / Resort', 'Commercial Building'];

  const allServices = [
    { name: 'Smart Home Automation', icon: Cpu, costPerSqft: 40 },
    { name: 'Electrical Automation', icon: Zap, costPerSqft: 35 },
    { name: 'CCTV & Security', icon: Shield, costPerSqft: 20 },
    { name: 'Access Control', icon: Shield, costPerSqft: 15 },
    { name: 'Smart Interiors', icon: Sparkles, costPerSqft: 45 },
    { name: 'Electrical Works', icon: Zap, costPerSqft: 30 },
    { name: 'Plumbing Works', icon: Zap, costPerSqft: 25 },
  ];

  const toggleService = (serviceName) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(selectedServices.filter((s) => s !== serviceName));
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
  };

  // Rough estimation calculation for demo
  const baseCost = selectedServices.reduce((acc, curr) => {
    const sObj = allServices.find((s) => s.name === curr);
    return acc + (sObj ? sObj.costPerSqft * (sqft * 0.7) : 0);
  }, 0);

  const estimatedMin = Math.round(baseCost * 0.85);
  const estimatedMax = Math.round(baseCost * 1.15);

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00F0FF', '#0066FF', '#FFFFFF'],
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-3xl glass-panel-glow rounded-3xl p-6 sm:p-8 border border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.3)] my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white font-['Outfit']">
                  GET A SMART QUOTE ESTIMATOR
                </h3>
                <p className="text-xs text-cyan-400 font-semibold font-['Outfit']">
                  Instant estimate tailored for your property in Kattappana, Kerala.
                </p>
              </div>
            </div>

            {/* Step 1: Property Type */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest font-['Outfit'] mb-3">
                1. SELECT PROPERTY TYPE
              </label>
              <div className="flex flex-wrap gap-2">
                {propertyTypes.map((pt) => (
                  <button
                    key={pt}
                    type="button"
                    onClick={() => setPropertyType(pt)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold font-['Outfit'] transition-all border ${
                      propertyType === pt
                        ? 'bg-cyan-500 text-black border-cyan-300 font-extrabold shadow-[0_0_15px_#00F0FF]'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {pt}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: SqFt Slider */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest font-['Outfit'] mb-2">
                <span className="text-slate-300">2. APPROXIMATE AREA (SQ FT)</span>
                <span className="text-cyan-400 font-mono text-sm">{sqft} SQ FT</span>
              </div>
              <input
                type="range"
                min="500"
                max="10000"
                step="250"
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Step 3: Multi-select Services */}
            <div className="mb-8">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest font-['Outfit'] mb-3">
                3. SELECT SERVICES REQUIRED
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {allServices.map((s) => {
                  const isChecked = selectedServices.includes(s.name);
                  return (
                    <button
                      key={s.name}
                      type="button"
                      onClick={() => toggleService(s.name)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-xs font-semibold font-['Outfit'] transition-all text-left ${
                        isChecked
                          ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-md'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Check
                          className={`w-4 h-4 rounded p-0.5 ${
                            isChecked ? 'bg-cyan-400 text-black' : 'bg-slate-800 text-slate-600'
                          }`}
                        />
                        <span>{s.name}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Estimation Results Card */}
            <div className="bg-slate-950/90 rounded-2xl p-6 border border-cyan-500/30 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase font-['Outfit'] tracking-wider">
                  ESTIMATED PROJECT INVESTMENT:
                </div>
                <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-['Outfit']">
                  ₹{estimatedMin.toLocaleString()} - ₹{estimatedMax.toLocaleString()}*
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-1">
                  *Includes hardware modules, wiring, & complete TEZLA installation in Kerala.
                </div>
              </div>

              <button
                onClick={handleFinalSubmit}
                className="btn-primary text-xs font-extrabold py-3 px-6 uppercase whitespace-nowrap flex items-center gap-2"
              >
                <span>REQUEST DETAILED QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ) : (
          /* Submission Success View */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 mx-auto mb-4 animate-bounce">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="text-3xl font-black text-white font-['Outfit'] mb-2">
              QUOTE REQUEST SUBMITTED!
            </h3>

            <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
              Thank you for choosing TEZLA Engineering. Our smart solutions specialist will review your{' '}
              <strong className="text-cyan-400">{propertyType} ({sqft} sq ft)</strong> requirements and contact you within 2 hours.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:8921223532"
                className="btn-primary text-xs font-extrabold uppercase py-3 px-6 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>CALL DIRECTLY: 89212 23532</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-secondary text-xs font-bold uppercase py-3 px-6"
              >
                CLOSE WINDOW
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
