import React, { useState } from 'react';
import { Sun, Wind, Shield, Video, Lock, Tv, Sparkles, Check, Power, Sliders, Eye, RefreshCw, Smartphone } from 'lucide-react';

export default function SmartHomeExperience() {
  const [activeDevice, setActiveDevice] = useState('lighting');
  const [activeCamera, setActiveCamera] = useState('CAM 01 - FRONT GATE');
  const [deviceStates, setDeviceStates] = useState({
    lighting: { brightness: 85, scene: 'Evening Mood', power: true },
    curtains: { percentage: 80, state: 'Open' },
    climate: { temp: 21, mode: 'Cool', fan: 'Auto' },
    security: { status: 'Armed 4K AI Watch', breach: 'None' },
    lock: { locked: true, battery: '98%' },
    entertainment: { mode: 'Cinematic Surround 7.1', power: true }
  });

  const devices = [
    {
      id: 'lighting',
      title: 'Smart Lighting',
      tagline: 'Set the perfect mood.',
      desc: 'Control lighting, adjust dimming levels, and trigger custom scenes across all rooms.',
      icon: Sun,
      hotspot: { top: '35%', left: '28%' },
    },
    {
      id: 'curtains',
      title: 'Automated Curtains',
      tagline: 'Wake up naturally.',
      desc: 'Automate motorized drapes and blinds based on schedule or sunlight intensity.',
      icon: Sparkles,
      hotspot: { top: '48%', left: '68%' },
    },
    {
      id: 'climate',
      title: 'Climate AC',
      tagline: 'Comfort at your command.',
      desc: 'Smart temperature zoning and eco-mode air conditioning across your space.',
      icon: Wind,
      hotspot: { top: '25%', left: '52%' },
    },
    {
      id: 'security',
      title: 'CCTV Surveillance',
      tagline: "Know what's happening.",
      desc: 'Real-time 4K camera streams, AI motion alerts, and automated perimeter tracking.',
      icon: Video,
      hotspot: { top: '20%', left: '80%' },
    },
    {
      id: 'lock',
      title: 'Access Control',
      tagline: 'Control who enters.',
      desc: 'Biometric fingerprint locks, NFC passcodes, and video doorbell verification.',
      icon: Lock,
      hotspot: { top: '65%', left: '42%' },
    },
    {
      id: 'entertainment',
      title: 'Entertainment & Power',
      tagline: 'One touch. Your world.',
      desc: 'Integrated home theater audio, background music, and smart appliance power switching.',
      icon: Tv,
      hotspot: { top: '55%', left: '78%' },
    },
  ];

  const currentDev = devices.find((d) => d.id === activeDevice) || devices[0];

  return (
    <section id="smart-home-exp" className="py-16 sm:py-24 relative bg-[#050811] overflow-hidden">
      {/* Radial Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 font-['Outfit']">
            <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
            <span>TOUCH & INTERACT SIMULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight mb-4">
            IMAGINE CONTROLLING YOUR <span className="text-gradient-cyan">ENTIRE HOME.</span>
          </h2>

          <p className="text-xs sm:text-base text-slate-300 px-2 font-normal">
            Tap any device hotspot or mobile tab below to test live lighting dimming, CCTV streaming, door lock controls, and central hub sync.
          </p>
        </div>

        {/* Device Switcher Chips Bar for Mobile & Desktop */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none snap-x">
          {devices.map((d) => {
            const isSelected = d.id === activeDevice;
            const Icon = d.icon;
            return (
              <button
                key={d.id}
                onClick={() => setActiveDevice(d.id)}
                className={`px-4 py-2.5 rounded-2xl flex items-center gap-2 text-xs font-bold font-['Outfit'] uppercase transition-all whitespace-nowrap snap-start border shrink-0 ${
                  isSelected
                    ? 'bg-cyan-500 text-black border-cyan-300 font-extrabold shadow-[0_0_20px_#00F0FF]'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-cyan-500/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{d.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Blueprint & Visual Model (Col 7) */}
          <div className="lg:col-span-7 relative">
            <div className="glass-panel-glow rounded-3xl p-3 sm:p-6 border border-cyan-500/30 relative overflow-hidden group">
              
              {/* Top Bar inside simulator */}
              <div className="flex items-center justify-between mb-3 sm:mb-4 px-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-widest text-cyan-400 uppercase font-['Outfit']">
                    TEZLA SMART OS • {currentDev.title.toUpperCase()}
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  CONNECTED
                </span>
              </div>

              {/* House Interactive Blueprint Container */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800 bg-[#080d1a]">
                <img
                  src={
                    activeDevice === 'security'
                      ? '/assets/images/cctv_security_tech.jpg'
                      : activeDevice === 'lock'
                      ? '/assets/images/smart_access_lock.jpg'
                      : activeDevice === 'lighting'
                      ? '/assets/images/smart_living_room.jpg'
                      : '/assets/images/hero_smart_villa.jpg'
                  }
                  alt="Smart Villa Blueprint"
                  className="w-full h-full object-cover transition-all duration-700 brightness-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent pointer-events-none" />

                {/* Central Hub Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-950/90 border-2 border-cyan-400 p-2 shadow-[0_0_30px_#00F0FF] flex items-center justify-center animate-pulse">
                    <img src="/favicon.svg" alt="Tezla Hub" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* Hotspot Markers */}
                {devices.map((device) => {
                  const isSelected = activeDevice === device.id;
                  const Icon = device.icon;
                  return (
                    <button
                      key={device.id}
                      onClick={() => setActiveDevice(device.id)}
                      style={{ top: device.hotspot.top, left: device.hotspot.left }}
                      className={`absolute z-30 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 flex items-center gap-1.5 ${
                        isSelected ? 'scale-125 z-40' : 'opacity-80 hover:opacity-100 hover:scale-110'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-cyan-400 text-black shadow-[0_0_25px_#00F0FF] border-2 border-white'
                            : 'bg-slate-950/90 text-cyan-400 border border-cyan-500/50'
                        }`}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Quick Action hint */}
              <p className="text-[11px] text-center text-slate-400 mt-3 font-['Outfit']">
                💡 Tap any tab or marker to control <strong className="text-cyan-400">{currentDev.title}</strong> live.
              </p>
            </div>
          </div>

          {/* Active Device Live Touch Controller Card (Col 5) */}
          <div className="lg:col-span-5">
            <div className="glass-panel-glow rounded-3xl p-5 sm:p-8 border border-cyan-500/40 relative">
              
              {/* Controller Header */}
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                    {React.createElement(currentDev.icon, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit']">
                      {currentDev.title}
                    </h3>
                    <p className="text-xs text-cyan-400 font-semibold font-['Outfit']">
                      {currentDev.tagline}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                {currentDev.desc}
              </p>

              {/* Dynamic Touch Widget Simulation */}
              <div className="bg-slate-950/90 rounded-2xl p-4 sm:p-5 border border-slate-800 mb-5">
                
                {/* 1. Lighting Widget */}
                {activeDevice === 'lighting' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-300">Dimmer Level</span>
                      <span className="text-cyan-400 font-mono font-bold text-sm">
                        {deviceStates.lighting.brightness}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={deviceStates.lighting.brightness}
                      onChange={(e) =>
                        setDeviceStates({
                          ...deviceStates,
                          lighting: { ...deviceStates.lighting, brightness: e.target.value }
                        })
                      }
                      className="w-full accent-cyan-400 bg-slate-800 h-2.5 rounded-lg cursor-pointer"
                    />

                    <div className="pt-2">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Outfit']">
                        PRESET ATMOSPHERE SCENES:
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {['Relax Mood', 'Evening Warm', 'Party Accent', 'Full Bright'].map((sc) => (
                          <button
                            key={sc}
                            onClick={() =>
                              setDeviceStates({
                                ...deviceStates,
                                lighting: { ...deviceStates.lighting, scene: sc }
                              })
                            }
                            className={`text-xs font-bold py-2 px-3 rounded-xl border transition-all font-['Outfit'] ${
                              deviceStates.lighting.scene === sc
                                ? 'bg-cyan-500 text-black border-cyan-300 font-extrabold shadow-[0_0_12px_#00F0FF]'
                                : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-cyan-500/40'
                            }`}
                          >
                            {sc}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. CCTV Security Widget */}
                {activeDevice === 'security' && (
                  <div className="space-y-3">
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-cyan-500/30 shadow-lg">
                      <img src="/assets/images/cctv_security_tech.jpg" alt="CCTV Stream" className="w-full h-full object-cover" />
                      <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-red-400 font-mono font-bold border border-red-500/30">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                        {activeCamera}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {['CAM 01 - FRONT GATE', 'CAM 02 - DRIVEWAY'].map((cam) => (
                        <button
                          key={cam}
                          onClick={() => setActiveCamera(cam)}
                          className={`text-[10px] font-bold py-1.5 px-2 rounded-lg border font-['Outfit'] truncate ${
                            activeCamera === cam
                              ? 'bg-cyan-500 text-black border-cyan-300 font-extrabold'
                              : 'bg-slate-900 text-slate-300 border-slate-800'
                          }`}
                        >
                          {cam}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Lock Widget */}
                {activeDevice === 'lock' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div>
                        <div className="text-xs font-bold text-white font-['Outfit']">Main Villa Entrance</div>
                        <div className="text-[10px] text-emerald-400 font-mono">Biometric Fingerprint + NFC</div>
                      </div>
                      <button
                        onClick={() =>
                          setDeviceStates({
                            ...deviceStates,
                            lock: { ...deviceStates.lock, locked: !deviceStates.lock.locked }
                          })
                        }
                        className={`px-4 py-2 rounded-xl text-xs font-extrabold font-['Outfit'] transition-all flex items-center gap-1.5 ${
                          deviceStates.lock.locked
                            ? 'bg-emerald-500 text-black shadow-[0_0_15px_#10B981]'
                            : 'bg-amber-500 text-black shadow-[0_0_15px_#F59E0B]'
                        }`}
                      >
                        <Lock className="w-3.5 h-3.5" />
                        <span>{deviceStates.lock.locked ? 'LOCKED' : 'UNLOCKED'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Fallback for Curtains, Climate & Entertainment */}
                {['curtains', 'climate', 'entertainment'].includes(activeDevice) && (
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <span className="text-xs font-bold text-cyan-400 font-mono">
                      TEZLA AUTOMATED SYNC ACTIVE
                    </span>
                    <p className="text-[11px] text-slate-400 mt-1">
                      System auto-regulates according to user schedules and solar sensor triggers.
                    </p>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
