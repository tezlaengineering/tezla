import React, { useState } from 'react';
import {
  Sun,
  Wind,
  Shield,
  Video,
  Lock,
  Tv,
  Sparkles,
  Check,
  Power,
  Sliders,
  Eye,
  RefreshCw,
  Smartphone,
  Key,
  Palette,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Unlock,
  AlertTriangle,
  Fingerprint,
  RotateCcw,
  Volume2
} from 'lucide-react';

export default function SmartHomeExperience() {
  const [activeDevice, setActiveDevice] = useState('lighting');

  // 1. Lighting State
  const [lightBrightness, setLightBrightness] = useState(85);
  const [lightColor, setLightColor] = useState('cyan'); // 'cyan', 'warm', 'purple', 'emerald'

  // 2. Door Lock & Keypad State
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);
  const [doorLocked, setDoorLocked] = useState(true);
  const [doorOpen, setDoorOpen] = useState(false);

  // 3. Motorized Curtain State
  const [curtainOpen, setCurtainOpen] = useState(75);

  // 4. CCTV Security Camera Interactive State
  const [activeCameraIndex, setActiveCameraIndex] = useState(0);
  const [camPanX, setCamPanX] = useState(0); // -20 to 20 px
  const [camPanY, setCamPanY] = useState(0); // -20 to 20 px
  const [camZoom, setCamZoom] = useState(1); // 1 to 1.3
  const [aiBreachAlert, setAiBreachAlert] = useState(false);

  const cameras = [
    { name: 'CAM 01: FRONT VILLA GATE', image: '/assets/images/cctv_security_tech.jpg' },
    { name: 'CAM 02: DRIVEWAY & GARAGE', image: '/assets/images/hero_smart_villa.jpg' },
    { name: 'CAM 03: LIVING ROOM & POOL', image: '/assets/images/smart_living_room.jpg' },
    { name: 'CAM 04: CORPORATE HQ KOCHI', image: '/assets/images/commercial_smart_office.jpg' },
  ];

  const devices = [
    {
      id: 'lighting',
      title: 'Smart Lighting',
      tagline: 'Set the perfect mood.',
      desc: 'Control light brightness and switch working color temperatures in real time.',
      icon: Sun,
      hotspot: { top: '35%', left: '28%' },
    },
    {
      id: 'lock',
      title: 'Biometric Lock & Door',
      tagline: 'Control who enters.',
      desc: 'Enter passcode on the keypad or scan fingerprint to swing open the motorized door.',
      icon: Lock,
      hotspot: { top: '65%', left: '42%' },
    },
    {
      id: 'curtains',
      title: 'Automated Curtains',
      tagline: 'Wake up naturally.',
      desc: 'Automate motorized fabric drapes sliding open and closed across panoramic glass windows.',
      icon: Sparkles,
      hotspot: { top: '48%', left: '68%' },
    },
    {
      id: 'security',
      title: '4K CCTV Pan/Tilt',
      tagline: "Know what's happening.",
      desc: 'Pan and tilt live 4K camera angles, trigger AI breach detection, and monitor perimeter safety.',
      icon: Video,
      hotspot: { top: '20%', left: '80%' },
    },
    {
      id: 'climate',
      title: 'Climate AC',
      tagline: 'Comfort at your command.',
      desc: 'Intelligent temperature zoning and eco-mode air conditioning across all rooms.',
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

  // Keypad logic
  const handleKeypadPress = (num) => {
    if (passcode.length < 4) {
      const nextPass = passcode + num;
      setPasscode(nextPass);
      if (nextPass === '1234') {
        setDoorLocked(false);
        setPasscodeError(false);
      } else if (nextPass.length === 4) {
        setPasscodeError(true);
        setTimeout(() => {
          setPasscode('');
          setPasscodeError(false);
        }, 1200);
      }
    }
  };

  // Color Mapping Helper
  const getColorGradient = () => {
    switch (lightColor) {
      case 'warm': return 'from-amber-500/35 via-amber-600/15 to-transparent';
      case 'purple': return 'from-purple-500/35 via-fuchsia-600/15 to-transparent';
      case 'emerald': return 'from-emerald-500/35 via-teal-600/15 to-transparent';
      default: return 'from-cyan-500/35 via-blue-600/15 to-transparent';
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
    <section id="smart-home-exp" className="py-14 sm:py-24 relative bg-[#050811] overflow-hidden font-['Inter']">
      {/* Radial Dynamic Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full blur-[170px] pointer-events-none transition-all duration-700"
        style={{ backgroundColor: `${getGlowColorHex()}18` }}
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
            Interact with live ambient light color switching, motorized curtain sliding, 4K CCTV camera panning, and keypad door unlocking. 100% GPU-accelerated!
          </p>
        </div>

        {/* Device Switcher Chips Bar */}
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
          
          {/* Visual Blueprint & Interactive Live Canvas (Col 7) */}
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

              {/* Room Interactive Canvas Container */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800 bg-[#080d1a]">
                
                {/* 1. CCTV Video Stream View mode */}
                {activeDevice === 'security' ? (
                  <div className="relative w-full h-full overflow-hidden bg-black">
                    <img
                      src={cameras[activeCameraIndex].image}
                      alt="CCTV Stream"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out"
                      style={{
                        transform: `translate(${camPanX}px, ${camPanY}px) scale(${camZoom})`
                      }}
                    />

                    {/* Camera Stream Overlay */}
                    <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-red-400 font-mono font-bold border border-red-500/30">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      <span>{cameras[activeCameraIndex].name}</span>
                    </div>

                    {/* AI Motion Breach Warning Border */}
                    {aiBreachAlert && (
                      <div className="absolute inset-0 border-4 border-red-500/80 animate-pulse pointer-events-none flex items-center justify-center">
                        <div className="bg-red-950/90 text-red-400 border border-red-500 px-4 py-2 rounded-xl text-xs font-bold font-['Outfit'] flex items-center gap-2 shadow-2xl">
                          <AlertTriangle className="w-4 h-4 animate-bounce text-red-400" />
                          <span>AI PERIMETER BREACH ALERT ACTIVE</span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* 2. Room Lighting Base Image */
                  <img
                    src={
                      activeDevice === 'lock'
                        ? '/assets/images/smart_access_lock.jpg'
                        : '/assets/images/smart_living_room.jpg'
                    }
                    alt="TEZLA Room"
                    className="w-full h-full object-cover transition-all duration-500"
                    style={{
                      filter: `brightness(${lightBrightness}%) contrast(1.1)`
                    }}
                  />
                )}

                {/* Ambient Light Color Overlay */}
                {activeDevice !== 'security' && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${getColorGradient()} pointer-events-none transition-all duration-500`}
                    style={{ opacity: lightBrightness / 100 }}
                  />
                )}

                {/* Door Swing Opening Visual Overlay */}
                {activeDevice === 'lock' && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <div className="relative w-44 h-64 border-4 border-cyan-500/40 rounded-xl overflow-hidden bg-slate-950/90 shadow-2xl backdrop-blur-sm">
                      
                      {/* Illuminated Foyer behind door */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/40 via-cyan-500/20 to-slate-900 flex flex-col items-center justify-center p-3 text-center">
                        <span className="text-[10px] font-bold text-white font-['Outfit'] uppercase tracking-wider">
                          ILLUMINATED FOYER
                        </span>
                        <span className="text-[9px] text-cyan-300 font-mono mt-1">
                          {doorLocked ? 'LOCKED' : 'PASSCODE VERIFIED'}
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
                          <span className="text-[9px] font-mono text-cyan-400 font-bold">TEZLA DOOR</span>
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

                {/* Motorized Curtain Panel Overlay */}
                {activeDevice === 'curtains' && (
                  <div className="absolute inset-0 pointer-events-none flex justify-between z-10">
                    <div
                      className="h-full bg-slate-950/95 border-r-2 border-cyan-400/50 backdrop-blur-md transition-all duration-700 shadow-2xl relative"
                      style={{ width: `${(100 - curtainOpen) / 2}%` }}
                    >
                      <div className="absolute inset-y-0 right-2 w-0.5 bg-cyan-400/30" />
                    </div>
                    <div
                      className="h-full bg-slate-950/95 border-l-2 border-cyan-400/50 backdrop-blur-md transition-all duration-700 shadow-2xl relative"
                      style={{ width: `${(100 - curtainOpen) / 2}%` }}
                    >
                      <div className="absolute inset-y-0 left-2 w-0.5 bg-cyan-400/30" />
                    </div>
                  </div>
                )}

                {/* Central Hub Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center pointer-events-none">
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
                💡 Tap any control on the right panel to test camera panning, keypad door unlocking, or curtain sliding!
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

              {/* Dynamic Interactive Control Panels */}
              <div className="bg-slate-950/90 rounded-2xl p-4 border border-slate-800 mb-4 space-y-4">
                
                {/* 1. Working Ambient Lighting Controller */}
                {activeDevice === 'lighting' && (
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                        <span className="text-slate-300">Dimmer Level</span>
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

                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Outfit'] flex items-center gap-1">
                        <Palette className="w-3 h-3 text-cyan-400" />
                        <span>AMBIENT COLOR PALETTE:</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'cyan', label: 'Electric Cyan', color: 'bg-cyan-400 text-black' },
                          { id: 'warm', label: 'Warm Amber 2700K', color: 'bg-amber-400 text-black' },
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

                {/* 2. Biometric Lock & Passcode Keypad Controller */}
                {activeDevice === 'lock' && (
                  <div className="space-y-4">
                    {/* Keypad Display */}
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase">PASSCODE KEYPAD (TRY: 1 2 3 4)</div>
                        <div className="text-lg font-mono font-bold tracking-widest text-cyan-400 h-6 flex items-center">
                          {passcode ? '•'.repeat(passcode.length) : <span className="text-slate-600 text-xs font-normal">ENTER PASSCODE</span>}
                        </div>
                      </div>
                      {passcodeError ? (
                        <span className="text-xs font-bold text-red-400 animate-pulse font-mono">WRONG CODE</span>
                      ) : (
                        <button
                          onClick={() => {
                            setDoorLocked(false);
                            setPasscode('1234');
                          }}
                          className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1.5 rounded-lg border border-emerald-500/30"
                        >
                          <Fingerprint className="w-3.5 h-3.5" />
                          <span>SCAN FINGER</span>
                        </button>
                      )}
                    </div>

                    {/* Touch Keypad Grid */}
                    <div className="grid grid-cols-3 gap-1.5 max-w-[220px] mx-auto">
                      {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '✓'].map((key) => (
                        <button
                          key={key}
                          onClick={() => {
                            if (key === 'C') setPasscode('');
                            else if (key === '✓') {
                              if (passcode === '1234') setDoorLocked(false);
                            } else handleKeypadPress(key);
                          }}
                          className="py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-xs font-bold text-white font-mono active:scale-95 transition-all flex items-center justify-center"
                        >
                          {key}
                        </button>
                      ))}
                    </div>

                    {/* Door Lock & Swing Buttons */}
                    <div className="pt-2 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          const newLock = !doorLocked;
                          setDoorLocked(newLock);
                          if (newLock) setDoorOpen(false);
                        }}
                        className={`py-2.5 px-3 rounded-xl text-xs font-extrabold font-['Outfit'] transition-all flex items-center justify-center gap-1.5 active:scale-95 ${
                          doorLocked
                            ? 'bg-emerald-500 text-black shadow-[0_0_15px_#10B981]'
                            : 'bg-amber-500 text-black shadow-[0_0_15px_#F59E0B]'
                        }`}
                      >
                        {doorLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                        <span>{doorLocked ? 'LOCKED' : 'UNLOCKED'}</span>
                      </button>

                      <button
                        disabled={doorLocked}
                        onClick={() => setDoorOpen(!doorOpen)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-extrabold font-['Outfit'] uppercase transition-all flex items-center justify-center gap-1.5 border active:scale-95 ${
                          doorLocked
                            ? 'bg-slate-900 text-slate-600 border-slate-800 cursor-not-allowed'
                            : doorOpen
                            ? 'bg-cyan-500 text-black border-cyan-300 font-extrabold shadow-[0_0_15px_#00F0FF]'
                            : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500 hover:text-black'
                        }`}
                      >
                        <Key className="w-3.5 h-3.5" />
                        <span>{doorOpen ? 'CLOSE DOOR' : 'SWING OPEN'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 3. Motorized Curtain Slider */}
                {activeDevice === 'curtains' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-300 font-['Outfit']">Curtain Position</span>
                      <span className="text-cyan-400 font-mono font-bold text-xs">{curtainOpen}% OPEN</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={curtainOpen}
                      onChange={(e) => setCurtainOpen(Number(e.target.value))}
                      className="w-full accent-cyan-400 bg-slate-800 h-2.5 rounded-lg cursor-pointer"
                    />
                    <div className="flex gap-2 pt-1">
                      {[0, 50, 100].map((val) => (
                        <button
                          key={val}
                          onClick={() => setCurtainOpen(val)}
                          className={`w-full py-2 rounded-xl text-xs font-bold font-['Outfit'] uppercase border transition-all active:scale-95 ${
                            curtainOpen === val
                              ? 'bg-cyan-500 text-black font-extrabold border-cyan-300 shadow-[0_0_12px_#00F0FF]'
                              : 'bg-slate-900 text-slate-400 border-slate-800'
                          }`}
                        >
                          {val === 0 ? 'Closed' : val === 50 ? '50% Open' : '100% Open'}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Realistic 4K CCTV Pan/Tilt & Angle Switcher */}
                {activeDevice === 'security' && (
                  <div className="space-y-4">
                    {/* Camera Angle Selector */}
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-['Outfit']">
                        SELECT 4K CAMERA STREAM:
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {cameras.map((c, idx) => (
                          <button
                            key={c.name}
                            onClick={() => {
                              setActiveCameraIndex(idx);
                              setCamPanX(0);
                              setCamPanY(0);
                            }}
                            className={`text-[10px] font-bold py-2 px-2.5 rounded-xl border text-left font-['Outfit'] truncate active:scale-95 ${
                              activeCameraIndex === idx
                                ? 'bg-cyan-500 text-black border-cyan-300 font-extrabold shadow-[0_0_12px_#00F0FF]'
                                : 'bg-slate-900 text-slate-300 border-slate-800'
                            }`}
                          >
                            {c.name.split(':')[0]}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Camera Pan / Tilt Controls */}
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 text-center font-['Outfit']">
                        PAN / TILT / ZOOM CAMERA:
                      </div>
                      
                      <div className="flex items-center justify-center gap-4">
                        {/* Direction D-Pad */}
                        <div className="grid grid-cols-3 gap-1 w-28">
                          <div />
                          <button
                            onClick={() => setCamPanY((prev) => Math.max(prev - 8, -24))}
                            className="p-1.5 rounded-lg bg-slate-800 text-cyan-400 hover:bg-cyan-500 hover:text-black flex items-center justify-center active:scale-95"
                          >
                            <ChevronUp className="w-4 h-4" />
                          </button>
                          <div />
                          <button
                            onClick={() => setCamPanX((prev) => Math.max(prev - 12, -30))}
                            className="p-1.5 rounded-lg bg-slate-800 text-cyan-400 hover:bg-cyan-500 hover:text-black flex items-center justify-center active:scale-95"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setCamPanX(0);
                              setCamPanY(0);
                              setCamZoom(1);
                            }}
                            className="p-1.5 rounded-lg bg-slate-950 text-cyan-400 border border-cyan-500/40 flex items-center justify-center"
                            title="Reset Camera Position"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setCamPanX((prev) => Math.min(prev + 12, 30))}
                            className="p-1.5 rounded-lg bg-slate-800 text-cyan-400 hover:bg-cyan-500 hover:text-black flex items-center justify-center active:scale-95"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                          <div />
                          <button
                            onClick={() => setCamPanY((prev) => Math.min(prev + 8, 24))}
                            className="p-1.5 rounded-lg bg-slate-800 text-cyan-400 hover:bg-cyan-500 hover:text-black flex items-center justify-center active:scale-95"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </button>
                          <div />
                        </div>

                        {/* AI Breach Toggle Button */}
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => setAiBreachAlert(!aiBreachAlert)}
                            className={`px-3 py-2 rounded-xl text-[10px] font-bold font-['Outfit'] uppercase border transition-all active:scale-95 flex items-center gap-1.5 ${
                              aiBreachAlert
                                ? 'bg-red-500 text-white border-red-400 font-extrabold shadow-[0_0_15px_#EF4444]'
                                : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-red-500/40'
                            }`}
                          >
                            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                            <span>{aiBreachAlert ? 'BREACH ALERT ON' : 'TEST AI BREACH'}</span>
                          </button>
                        </div>
                      </div>
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
