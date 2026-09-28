import React, { useState, useRef } from 'react';
import { Home, Building2, ShoppingBag, Hotel, Briefcase, ChevronLeft, ChevronRight, Sparkles, Eye, X, MapPin, CheckCircle2 } from 'lucide-react';

export default function ProjectTypes({ onSelectProject }) {
  const scrollRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  const projectsCategories = [
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
      image: '/assets/images/completed_villa_project.jpg',
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
      image: '/assets/images/completed_resort_project.jpg',
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

  // Completed Works Showcase Items
  const completedGallery = [
    {
      id: 1,
      title: 'Luxury Architectural Villa',
      category: 'Villas',
      location: 'Kattappana, Kerala',
      image: '/assets/images/completed_villa_project.jpg',
      scope: 'Full Smart Home Automation, Exterior Facade Lighting, Security CCTV',
      year: '2026 Completed',
    },
    {
      id: 2,
      title: 'The Harmony Hills Resort',
      category: 'Resorts',
      location: 'Munnar, Kerala',
      image: '/assets/images/completed_resort_project.jpg',
      scope: 'Hospitality Automation, Landscape Lighting, Power Systems',
      year: '2026 Completed',
    },
    {
      id: 3,
      title: 'Commercial 4K Security Control Room',
      category: 'Security',
      location: 'Thodupuzha, Kerala',
      image: '/assets/images/completed_cctv_control.jpg',
      scope: '32-Camera 4K Video Wall, AI Human Detection, Access Control',
      year: '2026 Completed',
    },
    {
      id: 4,
      title: 'Futuristic Corporate Tech HQ',
      category: 'Offices',
      location: 'Kattappana, Kerala',
      image: '/assets/images/commercial_smart_office.jpg',
      scope: 'Linear Ceiling LED Lighting, Smart Glass Motion Controls',
      year: '2025 Completed',
    },
    {
      id: 5,
      title: 'Heavy Electrical Automation Panel',
      category: 'Electrical',
      location: 'Adimali, Kerala',
      image: '/assets/images/electrical_automation.jpg',
      scope: 'Main DB Switchgear, Surge Earthing, Automated Circuit Control',
      year: '2025 Completed',
    },
    {
      id: 6,
      title: 'Thermostatic Luxury Plumbing Project',
      category: 'Plumbing',
      location: 'Kumily, Kerala',
      image: '/assets/images/plumbing_engineering.jpg',
      scope: 'CPVC Pressurized Water Supply, Sanitary Concealed Valves',
      year: '2025 Completed',
    },
  ];

  const filteredGallery = activeFilter === 'All'
    ? completedGallery
    : completedGallery.filter((item) => item.category === activeFilter);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 relative bg-[#070c1b] border-b border-slate-800 overflow-hidden">
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

          {/* Carousel Controls */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 1. Project Categories Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory mb-16"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projectsCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="min-w-[260px] sm:min-w-[320px] max-w-[340px] glass-panel-glow rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 snap-start flex flex-col justify-between shrink-0 group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1122] via-[#0a1122]/30 to-transparent" />
                  
                  <span className="absolute top-3 left-3 text-[9px] sm:text-[10px] font-extrabold tracking-widest text-cyan-400 bg-slate-950/80 border border-cyan-500/30 px-3 py-1 rounded-full backdrop-blur-md uppercase font-['Outfit']">
                    {item.tag}
                  </span>

                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-slate-900/90 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-black text-white font-['Outfit'] mb-2 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-5">
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

        {/* 2. COMPLETED PROJECTS PHOTO GALLERY */}
        <div className="pt-8 border-t border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-4xl font-black text-white font-['Outfit'] mb-3">
              COMPLETED PROJECTS & <span className="text-gradient-cyan">WORK SHOWCASE</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Browse actual photos of smart home automation, electrical panels, security systems, and plumbing installations executed by TEZLA in Kerala.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {['All', 'Villas', 'Resorts', 'Security', 'Offices', 'Electrical', 'Plumbing'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold font-['Outfit'] uppercase transition-all border ${
                    activeFilter === cat
                      ? 'bg-cyan-500 text-black border-cyan-300 font-extrabold shadow-[0_0_15px_#00F0FF]'
                      : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-cyan-500/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="glass-panel-glow rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group cursor-pointer"
                onClick={() => setActiveLightboxImage(item)}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] font-bold text-cyan-400 bg-slate-950/80 border border-cyan-500/30 px-3 py-1 rounded-full backdrop-blur-md font-['Outfit']">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-950/90 border border-cyan-500/40 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    {item.year}
                  </div>
                  <h4 className="text-lg font-bold text-white font-['Outfit'] mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="relative max-w-4xl w-full glass-panel-glow rounded-3xl p-4 sm:p-6 border border-cyan-500/40 overflow-hidden">
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
              <img
                src={activeLightboxImage.image}
                alt={activeLightboxImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
                  {activeLightboxImage.title}
                </h3>
                <p className="text-xs text-cyan-400 font-semibold font-['Outfit'] flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeLightboxImage.location} • {activeLightboxImage.year}</span>
                </p>
              </div>

              <button
                onClick={() => {
                  const itemTitle = activeLightboxImage.title;
                  setActiveLightboxImage(null);
                  onSelectProject(itemTitle);
                }}
                className="btn-primary text-xs font-bold uppercase py-2.5 px-6 whitespace-nowrap"
              >
                REQUEST SIMILAR PROJECT
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
