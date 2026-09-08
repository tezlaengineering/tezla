import React, { useState } from 'react';
import { Sun, Wind, Shield, Video, Lock, Tv, Sparkles, Check, Power, Sliders, Eye } from 'lucide-react';

export default function SmartHomeExperience() {
  const [activeDevice, setActiveDevice] = useState('lighting');
  const [deviceStates, setDeviceStates] = useState({
    lighting: { brightness: 80, scene: 'Evening Mood' },
    curtains: { state: '75% Open' },
    climate: { temp: 22, mode: 'Cool' },
    security: { status: 'Live 4K Stream - Clear', motion: 'None' },
    lock: { locked: true },
    entertainment: { mode: 'Cinema Audio On' }
  });

  const devices = [
    {
      id: 'lighting',
      title: 'Smart Lighting',
      tagline: 'Set the perfect mood.',
      desc: 'Turn lights on/off, adjust brightness, and trigger customized lighting scenes automatically.',
      icon: Sun,
      hotspot: { top: '35%', left: '28%' },
    },
    {
      id: 'curtains',
      title: 'Automated Curtains',
      tagline: 'Wake up naturally.',
      desc: 'Automate window blinds and draperies according to schedule, natural sunlight, or scene preferences.',
      icon: Sparkles,
      hotspot: { top: '48%', left: '68%' },
    },
    {
      id: 'climate',
      title: 'Climate & AC',
      tagline: 'Comfort at your command.',
      desc: 'Intelligent temperature zoning and schedule-based climate optimization across all rooms.',
      icon: Wind,
      hotspot: { top: '25%', left: '52%' },
    },
    {
      id: 'security',
      title: 'CCTV Surveillance',
      tagline: "Know what's happening.",
      desc: 'Monitor 4K cameras, receive real-time breach notifications, and record night-vision footage.',
      icon: Video,
      hotspot: { top: '20%', left: '80%' },
    },
    {
      id: 'lock',
      title: 'Access Control',
      tagline: 'Control who enters.',
      desc: 'Smart biometric fingerprint locks, digital entry passcodes, and instant video doorbell authorization.',
      icon: Lock,
      hotspot: { top: '65%', left: '42%' },
    },
    {
      id: 'entertainment',
      title: 'Entertainment & Power',
      tagline: 'One touch. Your world.',
      desc: 'Integrate home theater, background sound, and automated appliance power management seamlessly.',
      icon: Tv,
      hotspot: { top: '55%', left: '78%' },
    },
  ];

  const currentDev = devices.find((d) => d.id === activeDevice) || devices[0];

  return (
    <section id="smart-home-exp" className="py-24 relative bg-[#050811] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 font-['Outfit']">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE SMART VILLA CONTROLLER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight mb-4">
            IMAGINE CONTROLLING YOUR <span className="text-gradient-cyan">ENTIRE HOME.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Touch any interactive hotspot on the 3D villa blueprint to inspect live device responses, lighting adjustments, and real-time security synchronization.
          </p>
        </div>

        {/* Main 3D House Display & Control Hub Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Top: Interactive Blueprint (Col 7) */}
          <div className="lg:col-span-7 relative">
            <div className="glass-panel-glow rounded-3xl p-4 sm:p-6 border border-cyan-500/30 relative overflow-hidden group">
              
              {/* House Blueprint Image Container */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800 bg-[#080d1a]">
                <img
                  src="/assets/images/hero_smart_villa.jpg"
                  alt="Interactive Smart Villa Architecture"
                  className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Central Hub Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-slate-950/90 border-2 border-cyan-400 p-2 shadow-[0_0_30px_#00F0FF] flex items-center justify-center animate-pulse">
                    <img src="/favicon.svg" alt="Tezla Hub" className="w-full h-full object-contain" />
                  </div>
                  <div className="bg-slate-950/90 border border-cyan-500/40 px-3 py-1 rounded-full mt-2 text-[10px] font-black text-cyan-400 tracking-wider font-['Outfit'] uppercase shadow-lg">
                    TEZLA CORE HUB
                  </div>
                </div>

                {/* Interactive Device Hotspot Nodes */}
                {devices.map((device) => {
                  const isSelected = activeDevice === device.id;
                  const Icon = device.icon;
                  return (
                    <button
                      key={device.id}
                      onClick={() => setActiveDevice(device.id)}
                      style={{ top: device.hotspot.top, left: device.hotspot.left }}
                      className={`absolute z-30 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 flex items-center gap-2 group/node ${
                        isSelected ? 'scale-125 z-40' : 'hover:scale-110 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-cyan-400 text-black shadow-[0_0_25px_#00F0FF] border-2 border-white'
                            : 'bg-slate-900/90 text-cyan-400 border border-cyan-500/50 hover:border-cyan-400'
                        }`}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span
                        className={`hidden sm:block text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md font-['Outfit'] border transition-all ${
                          isSelected
                            ? 'bg-cyan-500 text-black border-cyan-300 font-extrabold shadow-md'
                            : 'bg-slate-950/80 text-slate-200 border-slate-800'
                        }`}
                      >
                        {device.title}
                      </span>
                    </button>
                  );
                })}

                {/* Animated Energy Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-60">
                  <line x1="50%" y1="50%" x2="28%" y2="35%" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="4" className="animate-pulse" />
                  <line x1="50%" y1="50%" x2="68%" y2="48%" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="4" className="animate-pulse" />
                  <line x1="50%" y1="50%" x2="52%" y2="25%" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="4" className="animate-pulse" />
                  <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="4" className="animate-pulse" />
                  <line x1="50%" y1="50%" x2="42%" y2="65%" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="4" className="animate-pulse" />
                  <line x1="50%" y1="50%" x2="78%" y2="55%" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="4" className="animate-pulse" />
                </svg>

              </div>

              {/* Bottom Central Tagline */}
              <div className="mt-4 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  PROTOCOL: Z-WAVE / ZIGBEE / MATTER
                </span>
                <span className="text-cyan-400 font-bold uppercase tracking-wider font-['Outfit']">
                  ONE HOME. ONE CONTROL.
                </span>
              </div>
            </div>
          </div>

          {/* Right / Bottom: Active Device Live Control Box (Col 5) */}
          <div className="lg:col-span-5">
            <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-cyan-500/40 relative">
              
              {/* Top Device Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                    {React.createElement(currentDev.icon, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-['Outfit']">
                      {currentDev.title}
                    </h3>
                    <p className="text-xs text-cyan-400 font-semibold font-['Outfit']">
                      {currentDev.tagline}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  ONLINE
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                {currentDev.desc}
              </p>

              {/* Dynamic Live Widget Simulation */}
              <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 mb-6">
                
                {activeDevice === 'lighting' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-300">Brightness Level</span>
                      <span className="text-cyan-400 font-mono font-bold">
                        {deviceStates.lighting.brightness}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={deviceStates.lighting.brightness}
                      onChange={(e) =>
                        setDeviceStates({
                          ...deviceStates,
                          lighting: { ...deviceStates.lighting, brightness: e.target.value }
                        })
                      }
                      className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                    />
                    <div className="flex gap-2 pt-2">
                      {['Relax', 'Evening Mood', 'Party Accent', 'Focus'].map((sc) => (
                        <button
                          key={sc}
                          onClick={() =>
                            setDeviceStates({
                              ...deviceStates,
                              lighting: { ...deviceStates.lighting, scene: sc }
                            })
                          }
                          className={`text-[10px] font-bold px-3 py-1.5 rounded-lg border font-['Outfit'] transition-all ${
                            deviceStates.lighting.scene === sc
                              ? 'bg-cyan-500 text-black border-cyan-400 font-extrabold'
                              : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {sc}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {activeDevice === 'security' && (
                  <div className="space-y-3">
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800">
                      <img src="/assets/images/cctv_security_tech.jpg" alt="Live CCTV Preview" className="w-full h-full object-cover" />
                      <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/80 px-2 py-0.5 rounded text-[10px] text-red-500 font-mono font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                        LIVE CAM 01 - FRONT GATE
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Status: <strong className="text-emerald-400">Secure</strong></span>
                      <span className="text-cyan-400 font-mono text-[10px]">AI Human Detect: ACTIVE</span>
                    </div>
                  </div>
                )}

                {activeDevice === 'lock' && (
                  <div className="flex items-center justify-between p-2">
                    <div>
                      <div className="text-xs font-bold text-white">Front Main Door Lock</div>
                      <div className="text-[11px] text-slate-400">Fingerprint + NFC + Video Doorbell</div>
                    </div>
                    <button
                      onClick={() =>
                        setDeviceStates({
                          ...deviceStates,
                          lock: { locked: !deviceStates.lock.locked }
                        })
                      }
                      className={`px-4 py-2 rounded-xl text-xs font-bold font-['Outfit'] transition-all flex items-center gap-2 ${
                        deviceStates.lock.locked
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                      }`}
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>{deviceStates.lock.locked ? 'LOCKED' : 'UNLOCKED'}</span>
                    </button>
                  </div>
                )}

                {['curtains', 'climate', 'entertainment'].includes(activeDevice) && (
                  <div className="flex items-center justify-between p-3">
                    <span className="text-xs text-slate-300">System Mode Status</span>
                    <span className="text-xs font-bold text-cyan-400 font-mono bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                      AUTOMATED SYNC ACTIVE
                    </span>
                  </div>
                )}

              </div>

              {/* Selector Tabs for Mobile / Quick Access */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {devices.map((d) => {
                  const isSel = d.id === activeDevice;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setActiveDevice(d.id)}
                      className={`p-2 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                        isSel
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {React.createElement(d.icon, { className: 'w-4 h-4' })}
                      <span className="text-[9px] font-bold font-['Outfit'] truncate max-w-full">
                        {d.title.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
