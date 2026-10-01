import React, { useState, useEffect, useRef } from 'react';
import { Home, Building2, ShoppingBag, Hotel, Briefcase, ChevronLeft, ChevronRight, Sparkles, Eye, X, MapPin, MessageCircle, CheckCircle2, Play, Pause } from 'lucide-react';

export default function ProjectTypes({ onSelectProject }) {
  const scrollRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  // Auto-sliding Carousel Indices for the 2 Uploaded Completed Home Albums
  const [album1Index, setAlbum1Index] = useState(0);
  const [album2Index, setAlbum2Index] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // 18 Uploaded Photos split into 2 dedicated auto-sliding albums (9 photos each)
  const album1Photos = [
    '/assets/images/completed_cloudinary/tezla_home_1.jpg',
    '/assets/images/completed_cloudinary/tezla_home_2.jpg',
    '/assets/images/completed_cloudinary/tezla_home_3.jpg',
    '/assets/images/completed_cloudinary/tezla_home_4.jpg',
    '/assets/images/completed_cloudinary/tezla_home_5.jpg',
    '/assets/images/completed_cloudinary/tezla_home_6.jpg',
    '/assets/images/completed_cloudinary/tezla_home_7.jpg',
    '/assets/images/completed_cloudinary/tezla_home_8.jpg',
    '/assets/images/completed_cloudinary/tezla_home_9.jpg',
  ];

  const album2Photos = [
    '/assets/images/completed_cloudinary/tezla_home_10.jpg',
    '/assets/images/completed_cloudinary/tezla_home_11.jpg',
    '/assets/images/completed_cloudinary/tezla_home_12.jpg',
    '/assets/images/completed_cloudinary/tezla_home_13.jpg',
    '/assets/images/completed_cloudinary/tezla_home_14.jpg',
    '/assets/images/completed_cloudinary/tezla_home_15.jpg',
    '/assets/images/completed_cloudinary/tezla_home_16.jpg',
    '/assets/images/completed_cloudinary/tezla_home_17.jpg',
    '/assets/images/completed_cloudinary/tezla_home_18.jpg',
  ];

  // Auto-slide effect for the 2 Completed Home Albums
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setAlbum1Index((prev) => (prev + 1) % album1Photos.length);
      setAlbum2Index((prev) => (prev + 1) % album2Photos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPlaying, album1Photos.length, album2Photos.length]);

  // Original Category Cards under "SOLUTIONS FOR EVERY SPACE" (Previous High-Res Photos)
  const projectsCategories = [
    {
      title: 'HOMES',
      desc: 'Smart and secure homes designed around modern family lifestyles.',
      image: '/assets/images/smart_living_room.jpg',
      icon: Home,
      tag: 'RESIDENTIAL HOMES',
    },
    {
      title: 'VILLAS',
      desc: 'Integrated automation, security, electrical, and interior solutions for luxury premium residences.',
      image: '/assets/images/hero_smart_villa.jpg',
      icon: Building2,
      tag: 'LUXURY VILLAS',
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

  // Completed Showcase Items: 2 Sliding Uploaded Completed Home Albums + Generated Tech Projects
  const completedGallery = [
    // 2 Dedicated Sliding Albums using Uploaded Photos
    {
      id: 1,
      isSlidingAlbum: true,
      title: 'Completed Home 01 — Grand Luxury Villa',
      category: 'Completed Homes',
      location: 'Kattappana, Kerala',
      photos: album1Photos,
      currentIndex: album1Index,
      setIndex: setAlbum1Index,
      scope: 'Full Home Automation, Facade Ambient Lighting, Touch Switches, Whole House Control',
      year: 'Completed Home Album',
    },
    {
      id: 2,
      isSlidingAlbum: true,
      title: 'Completed Home 02 — Executive Smart Residence',
      category: 'Completed Homes',
      location: 'Munnar, Kerala',
      photos: album2Photos,
      currentIndex: album2Index,
      setIndex: setAlbum2Index,
      scope: 'Motorized Drapery, Master Suite Scene Controllers, Security CCTV, DB Switchgear',
      year: 'Completed Home Album',
    },

    // All Other Albums (Generated Engineering Photos & Advanced Tech Locations: Bangalore & Kochi)
    {
      id: 3,
      isSlidingAlbum: false,
      title: 'Enterprise Corporate Tech HQ',
      category: 'Offices',
      location: 'Bengaluru (Bangalore), India',
      image: '/assets/images/commercial_smart_office.jpg',
      scope: 'Linear Ceiling LED Lighting, Motion Sensor Glass Partitions, Access Controllers',
      year: 'Bangalore Enterprise',
    },
    {
      id: 4,
      isSlidingAlbum: false,
      title: '4K CCTV & AI Security Command Center',
      category: 'Security',
      location: 'Kochi, Kerala',
      image: '/assets/images/completed_cctv_control.jpg',
      scope: '32-Camera Video Wall, AI Perimeter Human Breach Detection, Central Command',
      year: 'Kochi Security HQ',
    },
    {
      id: 5,
      isSlidingAlbum: false,
      title: 'Heavy Electrical Panel & DB Automation',
      category: 'Electrical',
      location: 'Kochi, Kerala',
      image: '/assets/images/electrical_automation.jpg',
      scope: 'Main DB Switchboard Wiring, Surge Earthing Systems, Power Distribution',
      year: 'Electrical Project',
    },
    {
      id: 6,
      isSlidingAlbum: false,
      title: 'Thermostatic Luxury Bathroom Plumbing',
      category: 'Plumbing',
      location: 'Kattappana, Kerala',
      image: '/assets/images/plumbing_engineering.jpg',
      scope: 'CPVC Pressurized Hot/Cold Water Lines, Rain Shower Installation',
      year: 'Plumbing Project',
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

  const openWhatsAppForProject = (item) => {
    const textMessage = `*COMPLETED PROJECT INQUIRY — TEZLA ENGINEERING* ⚡

Project Name: ${item.title}
Location: ${item.location}
Category: ${item.category}

Hi TEZLA Team! I saw this project on your website portfolio and would like a similar smart automation / engineering setup for my space.`;

    const encodedText = encodeURIComponent(textMessage);
    window.open(`https://wa.me/918921223532?text=${encodedText}`, '_blank');
  };

  return (
    <section id="projects" className="py-14 sm:py-24 relative bg-[#070c1b] border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
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
          <div className="flex items-center gap-2.5 mt-4 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 sm:p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 sm:p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 1. Project Categories Carousel (Original Photos) */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory mb-16"
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
                    onClick={() => openWhatsAppForProject({ title: item.title, location: 'Kerala', category: item.title })}
                    className="w-full py-2.5 rounded-xl border border-emerald-500/40 text-emerald-400 font-bold text-xs hover:bg-emerald-500 hover:text-black font-['Outfit'] uppercase transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>ENQUIRE {item.title} VIA WHATSAPP</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. COMPLETED HOMES & ADVANCED TECH PROJECTS SHOWCASE */}
        <div className="pt-8 border-t border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3 font-['Outfit']">
              <span>COMPLETED HOMES & ENTERPRISE PORTFOLIO</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-white font-['Outfit'] mb-3">
              COMPLETED HOMES & <span className="text-gradient-cyan">TECH PROJECTS</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 px-2">
              Explore sliding photo albums of completed homes alongside advanced tech corporate offices in Bengaluru and 4K security command centers in Kochi.
            </p>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {['All', 'Completed Homes', 'Offices', 'Security', 'Electrical', 'Plumbing'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold font-['Outfit'] uppercase transition-all border ${
                    activeFilter === cat
                      ? 'bg-emerald-500 text-black border-emerald-300 font-extrabold shadow-[0_0_15px_#25D366]'
                      : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-emerald-500/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="glass-panel-glow rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* 1. If Auto-Sliding Album (Completed Homes) */}
                {item.isSlidingAlbum ? (
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden group/slide">
                      <img
                        src={item.photos[item.currentIndex]}
                        alt={item.title}
                        className="w-full h-full object-cover transition-all duration-700 cursor-pointer"
                        onClick={() => setActiveLightboxImage({ ...item, image: item.photos[item.currentIndex] })}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent pointer-events-none" />

                      {/* Location Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-slate-950/85 border border-emerald-500/30 px-3 py-1 rounded-full backdrop-blur-md font-['Outfit']">
                        <MapPin className="w-3 h-3 text-emerald-400" />
                        <span>{item.location}</span>
                      </div>

                      {/* Sliding Controls & Auto-play indicator */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-800 text-[9px] font-mono text-cyan-400">
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="hover:text-white"
                          title={isPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
                        >
                          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                        </button>
                        <span>{item.currentIndex + 1}/{item.photos.length}</span>
                      </div>

                      {/* Previous / Next Arrows */}
                      <button
                        onClick={() => item.setIndex((item.currentIndex - 1 + item.photos.length) % item.photos.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/80 text-white border border-slate-800 opacity-80 hover:opacity-100"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => item.setIndex((item.currentIndex + 1) % item.photos.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/80 text-white border border-slate-800 opacity-80 hover:opacity-100"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Slide dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10">
                        {item.photos.map((_, pIdx) => (
                          <button
                            key={pIdx}
                            onClick={() => item.setIndex(pIdx)}
                            className={`h-1.5 rounded-full transition-all ${
                              pIdx === item.currentIndex ? 'w-5 bg-emerald-400' : 'w-1.5 bg-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-1 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span>AUTO-SLIDING COMPLETED HOME ALBUM</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white font-['Outfit'] mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4">
                        {item.scope}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* 2. Standard Album (High-Res Generated Photos) */
                  <div>
                    <div
                      className="relative aspect-[16/10] overflow-hidden cursor-pointer"
                      onClick={() => setActiveLightboxImage(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/20 to-transparent" />
                      
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] font-bold text-cyan-400 bg-slate-950/85 border border-cyan-500/30 px-3 py-1 rounded-full backdrop-blur-md font-['Outfit']">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        <span>{item.location}</span>
                      </div>

                      <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-950/90 border border-cyan-500/40 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1 font-bold">
                        {item.year}
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white font-['Outfit'] mb-2 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4">
                        {item.scope}
                      </p>
                    </div>
                  </div>
                )}

                {/* Footer Action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => openWhatsAppForProject(item)}
                    className="w-full py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500 hover:text-black text-emerald-400 font-bold text-xs font-['Outfit'] uppercase transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>INQUIRE VIA WHATSAPP</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="relative max-w-4xl w-full glass-panel-glow rounded-3xl p-4 sm:p-6 border border-emerald-500/40 overflow-hidden">
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

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
                  {activeLightboxImage.title}
                </h3>
                <p className="text-xs text-emerald-400 font-semibold font-['Outfit'] flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeLightboxImage.location} • TEZLA Project</span>
                </p>
                <p className="text-xs text-slate-300 mt-2">
                  {activeLightboxImage.scope}
                </p>
              </div>

              <button
                onClick={() => openWhatsAppForProject(activeLightboxImage)}
                className="btn-primary text-xs font-extrabold uppercase py-3 px-6 whitespace-nowrap bg-gradient-to-r from-emerald-500 to-teal-400 text-black shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>INQUIRE THIS WORK VIA WHATSAPP</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
