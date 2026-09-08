import React, { useRef } from 'react';
import { Home, Building2, ShoppingBag, Hotel, Briefcase, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function ProjectTypes({ onSelectProject }) {
  const scrollRef = useRef(null);

  const projects = [
    {
      title: 'HOMES',
      desc: 'Smart and secure homes designed around modern family lifestyles.',
      image: '/assets/images/smart_living_room.jpg',
      icon: Home,
      tag: 'RESIDENTIAL',
    },
    {
      title: 'VILLAS',
      desc: 'Integrated automation, security, electrical, and interior solutions for luxury premium residences.',
      image: '/assets/images/hero_smart_villa.jpg',
      icon: Building2,
      tag: 'LUXURY LIVING',
    },
    {
      title: 'APARTMENTS',
      desc: 'Practical compact smart home automation and digital door lock solutions for urban living.',
      image: '/assets/images/smart_access_lock.jpg',
      icon: Home,
      tag: 'URBAN APARTMENTS',
    },
    {
      title: 'OFFICES',
      desc: 'Technology-driven office spaces that improve workplace efficiency, lighting, and access control.',
      image: '/assets/images/commercial_smart_office.jpg',
      icon: Briefcase,
      tag: 'WORKPLACE TECH',
    },
    {
      title: 'SHOPS',
      desc: 'Electrical, CCTV security, architectural lighting, and automation solutions for retail environments.',
      image: '/assets/images/cctv_security_tech.jpg',
      icon: ShoppingBag,
      tag: 'COMMERCIAL RETAIL',
    },
    {
      title: 'HOTELS & RESORTS',
      desc: 'Integrated smart room tech, master lighting keycards, and engineering solutions for hospitality.',
      image: '/assets/images/hero_smart_villa.jpg',
      icon: Hotel,
      tag: 'HOSPITALITY',
    },
    {
      title: 'COMMERCIAL BUILDINGS',
      desc: 'Complete engineering, power distribution, plumbing, and automation systems for multi-story spaces.',
      image: '/assets/images/electrical_automation.jpg',
      icon: Building2,
      tag: 'ENTERPRISE BUILDING',
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-[#070c1b] border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 font-['Outfit']">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TAILORED ENGINEERING PORTFOLIO</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight">
              SOLUTIONS FOR <span className="text-gradient-cyan">EVERY SPACE.</span>
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontally Scrollable Cards Row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="min-w-[280px] sm:min-w-[340px] max-w-[360px] glass-panel-glow rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 snap-start flex flex-col justify-between shrink-0 group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1122] via-[#0a1122]/30 to-transparent" />
                  
                  <span className="absolute top-4 left-4 text-[10px] font-extrabold tracking-widest text-cyan-400 bg-slate-950/80 border border-cyan-500/30 px-3 py-1 rounded-full backdrop-blur-md uppercase font-['Outfit']">
                    {item.tag}
                  </span>

                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-slate-900/90 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black text-white font-['Outfit'] mb-2 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    {item.desc}
                  </p>

                  <button
                    onClick={() => onSelectProject(item.title)}
                    className="w-full py-2.5 rounded-xl border border-cyan-500/30 text-cyan-400 font-bold text-xs hover:bg-cyan-500 hover:text-black font-['Outfit'] uppercase transition-all"
                  >
                    SELECT {item.title} PACKAGE
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
