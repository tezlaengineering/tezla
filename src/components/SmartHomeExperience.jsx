import React, { useState } from 'react';
import { Sun, Wind, Shield, Video, Lock, Tv, Sparkles, Check, Power, Sliders, Eye, RefreshCw, Smartphone, Key, Palette, ChevronRight, Unlock } from 'lucide-react';

export default function SmartHomeExperience() {
  const [activeDevice, setActiveDevice] = useState('lighting');
  const [activeCamera, setActiveCamera] = useState('CAM 01 - FRONT GATE');

  // Interactive Lighting State
  const [lightBrightness, setLightBrightness] = useState(85);
  const [lightColor, setLightColor] = useState('cyan'); // 'cyan', 'warm', 'purple', 'emerald'

  // Interactive Door State
  const [doorLocked, setDoorLocked] = useState(true);
  const [doorOpen, setDoorOpen] = useState(false);

  // Interactive Curtain State
  const [curtainOpen, setCurtainOpen] = useState(75);

  // Interactive Security Feed State
  const [motionAlert, setMotionAlert] = useState(false);

  const devices = [
    {
      id: 'lighting',
      title: 'Smart Lighting',
      tagline: 'Set the perfect mood.',
      desc: 'Control brightness levels and switch ambient light color temperatures in real time.',
      icon: Sun,
      hotspot: { top: '35%', left: '28%' },
    },
    {
      id: 'lock',
      title: 'Access & Door Open',
      tagline: 'Control who enters.',
      desc: 'Unlock digital biometric locks and trigger motorized door opening & closing.',
      icon: Lock,
      hotspot: { top: '65%', left: '42%' },
    },
    {
      id: 'curtains',
      title: 'Automated Curtains',
      tagline: 'Wake up naturally.',
      desc: 'Automate motorized drapes sliding open and closed across panoramic windows.',
      icon: Sparkles,
      hotspot: { top: '48%', left: '68%' },
    },
    {
      id: 'security',
      title: 'CCTV Surveillance',
      tagline: "Know what's happening.",
      desc: 'Monitor 4K camera angles, trigger AI motion detection, and track perimeter safety.',
      icon: Video,
      hotspot: { top: '20%', left: '80%' },
    },
    {
      id: 'climate',
      title: 'Climate AC',
      tagline: 'Comfort at your command.',
      desc: 'Intelligent temperature zoning and energy optimization across all rooms.',
      icon: Wind,
      hotspot: { top: '25%', left: '52%' },
    },
    {
      id: 'entertainment',
      title: 'Entertainment & Power',
      tagline: 'One touch. Your world.',
      desc: 'Integrate surround sound audio and automated appliance power switching.',
      icon: Tv,
      hotspot: { top: '55%', left: '78%' },
    },
  ];

  const currentDev = devices.find((d) => d.id === activeDevice) || devices[0];

  // Color Mapping Helper
  const getColorGradient = () => {
    switch (lightColor) {
      case 'warm':
        return 'from-amber-500/35 via-amber-600/15 to-transparent';
      case 'purple':
        return 'from-purple-500/35 via-fuchsia-600/15 to-transparent';
      case 'emerald':
        return 'from-emerald-500/35 via-teal-600/15 to-transparent';
      default:
        return 'from-cyan-500/35 via-blue-600/15 to-transparent';
    }
  };

  const getGlowColorHex = () => {
    switch (lightColor) {
      case 'warm': return '#F59E0B';
      case 'purple': return '#A855F7';
      case 'emerald': return '#10B981';
      default: return '#00F0FF';
    }
  };

  return (
    <section id="smart-home-exp" className="py-14 sm:py-24 relative bg-[#050811] overflow-hidden">
      {/* Radial Dynamic Glow matching light color choice */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full blur-[170px] pointer-events-none transition-all duration-700"
        style={{
          backgroundColor: `${getGlowColorHex()}18`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 font-['Outfit']">
            <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
            <span>TEZLA SMART OS • INTERACTIVE SIMULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight mb-3">
            IMAGINE CONTROLLING YOUR <span className="text-gradient-cyan">ENTIRE HOME.</span>
          </h2>

          <p className="text-xs sm:text-base text-slate-300 px-2 font-normal">
            Interact with working ambient light colors, motorized curtain sliders, digital door opening/closing, and live CCTV feeds. Ultra-fast, GPU-accelerated, zero page lag!
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
                className={`px-3.5 py-2.5 sm:px-4 rounded-2xl flex items-center gap-2 text-xs font-bold font-['Outfit'] uppercase transition-all whitespace-nowrap snap-start border shrink-0 active:scale-95 ${
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Visual Blueprint & Live Simulator Canvas (Col 7) */}
          <div className="lg:col-span-7 relative">
            <div className="glass-panel-glow rounded-3xl p-3 sm:p-6 border border-cyan-500/30 relative overflow-hidden group">
              
              {/* Top Bar inside simulator */}
              <div className="flex items-center justify-between mb-3 px-1 sm:px-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-widest text-cyan-400 uppercase font-['Outfit']">
                    LIVE SYSTEM SIMULATOR • {currentDev.title.toUpperCase()}
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  REAL-TIME 60 FPS
                </span>
              </div>

              {/* House Interactive Canvas */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800 bg-[#080d1a]">
                
                {/* Background Room Base Image */}
                <img
                  src={
                    activeDevice === 'security'
                      ? '/assets/images/cctv_security_tech.jpg'
                      : activeDevice === 'lock'
                      ? '/assets/images/smart_access_lock.jpg'
                      : '/assets/images/smart_living_room.jpg'
                  }
                  alt="TEZLA Interactive Room"
                  className="w-full h-full object-cover transition-all duration-500"
                  style={{
                    filter: `brightness(${lightBrightness}%) contrast(1.1)`
                  }}
                />

                {/* 1. Dynamic Ambient Light Ray Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${getColorGradient()} pointer-events-none transition-all duration-500`}
                  style={{ opacity: lightBrightness / 100 }}
                />

                {/* 2. Door Opening/Closing Animation Visual */}
                {activeDevice === 'lock' && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <div className="relative w-44 h-64 border-4 border-cyan-500/40 rounded-xl overflow-hidden bg-slate-950/80 shadow-2xl backdrop-blur-sm">
                      
                      {/* Illuminated Interior Hallway behind door */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/40 via-cyan-500/20 to-slate-900 flex flex-col items-center justify-center p-3 text-center">
                        <span className="text-[10px] font-bold text-white font-['Outfit'] uppercase tracking-wider">
                          HALLWAY ILLUMINATED
                        </span>
                        <span className="text-[9px] text-cyan-300 font-mono mt-1">
                          PASSCODE VERIFIED
                        </span>
                      </div>

                      {/* Swinging Door Panel */}
                      <div
                        className="absolute inset-0 bg-[#111a2e] border-r-2 border-cyan-400 p-4 flex flex-col justify-between transition-transform duration-700 origin-left shadow-2xl"
                        style={{
                          transform: doorOpen ? 'perspective(600px) rotateY(-75deg)' : 'perspective(600px) rotateY(0deg)'
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] font-mono text-cyan-400 font-bold">TEZLA LOCK</span>
                          <Lock className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                        <div className="w-4 h-4 rounded-full bg-cyan-400/30 border border-cyan-400 self-end my-auto animate-pulse" />
                        <div className="text-[9px] text-slate-400 font-mono">
                          {doorLocked ? 'LOCKED' : doorOpen ? 'DOOR OPEN' : 'UNLOCKED'}
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* 3. Motorized Curtain Sliding Panels Visual */}
                {activeDevice === 'curtains' && (
                  <div className="absolute inset-0 pointer-events-none flex justify-between z-10">
                    <div
                      className="h-full bg-slate-950/90 border-r-2 border-cyan-400/50 backdrop-blur-md transition-all duration-700 shadow-2xl"
                      style={{ width: `${(100 - curtainOpen) / 2}%` }}
                    />
                    <div
                      className="h-full bg-slate-950/90 border-l-2 border-cyan-400/50 backdrop-blur-md transition-all duration-700 shadow-2xl"
                      style={{ width: `${(100 - curtainOpen) / 2}%` }}
                    />
                  </div>
                )}

                {/* Central Hub Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-slate-950/90 border-2 border-cyan-400 p-2 shadow-[0_0_30px_#00F0FF] flex items-center justify-center animate-pulse">
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

              {/* Bottom Quick Help Text */}
              <p className="text-[11px] text-center text-slate-400 mt-3 font-['Outfit']">
                💡 Adjust controls on the right panel to see working lights, door swinging, and curtain tracks!
              </p>
            </div>
          </div>

          {/* Active Device Touch Controls Box (Col 5) */}
          <div className="lg:col-span-5">
            <div className="glass-panel-glow rounded-3xl p-5 sm:p-7 border border-cyan-500/40 relative">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                    {React.createElement(currentDev.icon, { className: 'w-5 h-5' })}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-['Outfit']">
                      {currentDev.title}
                    </h3>
                    <p className="text-xs text-cyan-400 font-semibold font-['Outfit']">
                      {currentDev.tagline}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {currentDev.desc}
              </p>

              {/* Dynamic Interactive Widgets */}
              <div className="bg-slate-950/90 rounded-2xl p-4 border border-slate-800 mb-4 space-y-4">
                
                {/* 1. Working Ambient Lighting Controller */}
                {activeDevice === 'lighting' && (
                  <div className="space-y-4">
                    {/* Brightness Slider */}
                    <div>
                      <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                        <span className="text-slate-300">Light Brightness</span>
                        <span className="text-cyan-400 font-mono font-bold text-xs">{lightBrightness}%</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={lightBrightness}
                        onChange={(e) => setLightBrightness(Number(e.target.value))}
                        className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                      />
                    </div>

                    {/* Ambient Light Color Palette Switcher */}
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Outfit'] flex items-center gap-1">
                        <Palette className="w-3 h-3 text-cyan-400" />
                        <span>SWITCH AMBIENT LIGHT COLOR:</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'cyan', label: 'Electric Cyan', color: 'bg-cyan-400 text-black' },
                          { id: 'warm', label: 'Warm Amber', color: 'bg-amber-400 text-black' },
                          { id: 'purple', label: 'Neon Purple', color: 'bg-purple-500 text-white' },
                          { id: 'emerald', label: 'Eco Emerald', color: 'bg-emerald-400 text-black' },
                        ].map((c) => (
                          <button
                            key={c.id}
                            onClick={() => setLightColor(c.id)}
                            className={`text-xs font-bold py-2 px-3 rounded-xl border transition-all font-['Outfit'] active:scale-95 ${
                              lightColor === c.id
                                ? `${c.color} font-extrabold border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]`
                                : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-cyan-500/40'
                            }`}
                          >
                            {c.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Interactive Lock & Door Open/Close Simulation */}
                {activeDevice === 'lock' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div>
                        <div className="text-xs font-bold text-white font-['Outfit']">Digital Smart Lock</div>
                        <div className="text-[10px] text-cyan-400 font-mono">Biometric Passcode</div>
                      </div>
                      <button
                        onClick={() => {
                          const newLock = !doorLocked;
                          setDoorLocked(newLock);
                          if (newLock) setDoorOpen(false);
                        }}
                        className={`px-3.5 py-2 rounded-xl text-xs font-extrabold font-['Outfit'] transition-all flex items-center gap-1.5 active:scale-95 ${
                          doorLocked
                            ? 'bg-emerald-500 text-black shadow-[0_0_15px_#10B981]'
                            : 'bg-amber-500 text-black shadow-[0_0_15px_#F59E0B]'
                        }`}
                      >
                        {doorLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                        <span>{doorLocked ? 'LOCKED' : 'UNLOCKED'}</span>
                      </button>
                    </div>

                    {/* Door Open/Close Button */}
                    <div className="pt-2">
                      <button
                        disabled={doorLocked}
                        onClick={() => setDoorOpen(!doorOpen)}
                        className={`w-full py-3 rounded-xl text-xs font-bold font-['Outfit'] uppercase transition-all flex items-center justify-center gap-2 border ${
                          doorLocked
                            ? 'bg-slate-900 text-slate-500 border-slate-800 cursor-not-allowed'
                            : doorOpen
                            ? 'bg-cyan-500 text-black border-cyan-300 font-extrabold shadow-[0_0_20px_#00F0FF]'
                            : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500 hover:text-black'
                        }`}
                      >
                        <Key className="w-4 h-4" />
                        <span>{doorLocked ? 'UNLOCK FIRST TO OPEN DOOR' : doorOpen ? 'CLOSE DOOR' : 'SWING OPEN DOOR'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 3. Motorized Curtain Slider */}
                {activeDevice === 'curtains' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-300">Curtain Position</span>
                      <span className="text-cyan-400 font-mono font-bold text-xs">{curtainOpen}% OPEN</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={curtainOpen}
                      onChange={(e) => setCurtainOpen(Number(e.target.value))}
                      className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                    />
                    <div className="flex gap-2 pt-1">
                      {[0, 50, 100].map((val) => (
                        <button
                          key={val}
                          onClick={() => setCurtainOpen(val)}
                          className={`w-full py-1.5 rounded-lg text-[10px] font-bold font-['Outfit'] uppercase border transition-all ${
                            curtainOpen === val
                              ? 'bg-cyan-500 text-black font-extrabold border-cyan-300'
                              : 'bg-slate-900 text-slate-400 border-slate-800'
                          }`}
                        >
                          {val === 0 ? 'Closed' : val === 50 ? '50% Open' : '100% Open'}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. CCTV Stream & Camera Selector */}
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

                {/* Fallback for Climate & Entertainment */}
                {['climate', 'entertainment'].includes(activeDevice) && (
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <span className="text-xs font-bold text-cyan-400 font-mono">
                      TEZLA AUTOMATED SYNC ACTIVE
                    </span>
                    <p className="text-[11px] text-slate-400 mt-1">
                      System auto-regulates according to user schedules and ambient temperature sensors.
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
