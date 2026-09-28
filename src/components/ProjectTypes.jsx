import React, { useState, useRef } from 'react';
import { Home, Building2, ShoppingBag, Hotel, Briefcase, ChevronLeft, ChevronRight, Sparkles, Eye, X, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function ProjectTypes({ onSelectProject }) {
  const scrollRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  const projectsCategories = [
    {
      title: 'HOMES',
      desc: 'Smart and secure homes designed around modern family lifestyles.',
      image: '/assets/images/completed_cloudinary/tezla_home_1.jpg',
      icon: Home,
      tag: 'RESIDENTIAL HOMES',
    },
    {
      title: 'VILLAS',
      desc: 'Integrated automation, security, electrical, and interior solutions for luxury premium residences.',
      image: '/assets/images/completed_cloudinary/tezla_home_4.jpg',
      icon: Building2,
      tag: 'LUXURY VILLAS',
    },
    {
      title: 'APARTMENTS',
      desc: 'Practical compact smart home automation and digital door lock solutions for urban living.',
      image: '/assets/images/completed_cloudinary/tezla_home_7.jpg',
      icon: Home,
      tag: 'URBAN APARTMENTS',
    },
    {
      title: 'OFFICES',
      desc: 'Technology-driven office spaces that improve workplace efficiency, lighting, and access control.',
      image: '/assets/images/completed_cloudinary/tezla_home_10.jpg',
      icon: Briefcase,
      tag: 'WORKPLACE TECH',
    },
    {
      title: 'SHOPS',
      desc: 'Electrical, CCTV security, architectural lighting, and automation solutions for retail environments.',
      image: '/assets/images/completed_cloudinary/tezla_home_12.jpg',
      icon: ShoppingBag,
      tag: 'COMMERCIAL RETAIL',
    },
    {
      title: 'HOTELS & RESORTS',
      desc: 'Integrated smart room tech, master lighting keycards, and engineering solutions for hospitality.',
      image: '/assets/images/completed_cloudinary/tezla_home_15.jpg',
      icon: Hotel,
      tag: 'HOSPITALITY',
    },
    {
      title: 'COMMERCIAL BUILDINGS',
      desc: 'Complete engineering, power distribution, plumbing, and automation systems for multi-story spaces.',
      image: '/assets/images/completed_cloudinary/tezla_home_18.jpg',
      icon: Building2,
      tag: 'ENTERPRISE BUILDING',
    },
  ];

  // All 18 Real Completed Home & Project Photos from TEZLA Cloudinary Collection
  const completedCloudinaryHomes = [
    {
      id: 1,
      title: 'Completed Luxury Smart Villa Project',
      category: 'Villas',
      location: 'Kattappana, Kerala',
      image: '/assets/images/completed_cloudinary/tezla_home_1.jpg',
      scope: 'Full Smart Home Automation, Mood Lighting Controls, Security CCTV',
      tag: 'Completed Home',
    },
    {
      id: 2,
      title: 'Architectural Modern Residence',
      category: 'Homes',
      location: 'Adimali, Kerala',
      image: '/assets/images/completed_cloudinary/tezla_home_2.jpg',
      scope: 'Complete Electrical Wiring, Smart Switches, Concealed Lighting',
      tag: 'Completed Home',
    },
    {
      id: 3,
      title: 'Hilltop Resort & Villa Automation',
      category: 'Villas',
      location: 'Munnar, Kerala',
      image: '/assets/images/completed_cloudinary/tezla_home_3.jpg',
      scope: 'Hospitality Smart Control, Exterior LED Lighting, Water Plumbing',
      tag: 'Completed Resort',
    },
    {
      id: 4,
      title: 'Premium Contemporary Residence',
      category: 'Homes',
      location: 'Thodupuzha, Kerala',
      image: '/assets/images/completed_cloudinary/tezla_home_4.jpg',
      scope: 'Smart Interior Lighting, Motorized Curtains, Digital Lock',
      tag: 'Completed Home',
    },
    {
      id: 5,
      title: 'Smart Lighting & Living Room Automation',
      category: 'Interiors',
      location: 'Kattappana, Kerala',
      image: '/assets/images/completed_cloudinary/tezla_home_5.jpg',
      scope: 'Scene & Atmosphere Lighting, Alexa/App Control, DB Panel',
      tag: 'Smart Interior',
    },
    {
      id: 6,
      title: 'Concealed Tech & Mood Strip Lighting',
      category: 'Interiors',
      location: 'Kumily, Kerala',
      image: '/assets/images/completed_cloudinary/tezla_home_6.jpg',
      scope: 'Architectural Cove Lighting, Touch Panel Switches, Audio Sync',
      tag: 'Smart Interior',
    },
    {
      id: 7,
      title: 'Modern Apartment Complex Automation',
      category: 'Apartments',
      location: 'Thodupuzha, Kerala',
      image: '/assets/images/completed_cloudinary/tezla_home_7.jpg',
      scope: 'Biometric Access Lock, Video Doorbell, Compact Smart Panel',
      tag: 'Completed Apartment',
    },
    {
      id: 8,
      title: 'Automated Facade & Exterior Lighting',
      category: 'Villas',
      location: 'Kattappana, Kerala',
      image: '/assets/images/completed_cloudinary/tezla_home_8.jpg',
      scope: 'Timer Facade Lighting, Garden Pathway LEDs, Perimeter CCTV',
      tag: 'Completed Villa',
    },
    {
      id: 9,
      title: 'Complete Electrical DB & Automation Board',
      category: 'Electrical',
      location: 'Adimali, Kerala',
      image: '/assets/images/completed_cloudinary/tezla_home_9.jpg',
      scope: 'Main Switchgear, Heavy Load Distribution, Surge Protection',
      tag: 'Electrical Work',
    },
    {
      id: 10,
      title: 'Commercial Office & Conference Automation',
      category: 'Offices',
      location: 'Kattappana, Kerala',
      image: '/assets/images/completed_cloudinary/tezla_home_10.jpg',
      scope: 'Linear Ceiling LED Lighting, Glass Motion Sensor Controls',
      tag: 'Completed Office',
    },
    {
      id: 11,
      title: '4K CCTV & Security Control System',
      category: 'Security',
      location: 'Thodupuzha, Kerala',
      image: '/assets/images/completed_cloudinary/tezla_home_11.jpg',
      scope: 'Multi-Camera Video Wall, Remote Smartphone Stream, Alarm Sync',
      tag: 'CCTV Security',
    },
    {
      id: 12,
      title: 'Thermostatic Luxury Bathroom Plumbing',
      category: 'Plumbing',
      location: 'Kumily, Kerala',
      image: '/assets/images/completed_cloudinary/tezla_home_12.jpg',
      scope: 'CPVC Hot/Cold Lines, Rain Shower Installation, Sanitary Fittings',
      tag: 'Plumbing Work',
    },
    {
      id: 13,
      title: 'Modern Kitchen & Dining Smart Controls',
      category: 'Homes',
      location: 'Kattappana, Kerala',
      image: '/assets/images/completed_cloudinary/tezla_home_13.jpg',
      scope: 'Under-Cabinet Lighting, Smart Power Sockets, Appliance Automation',
      tag: 'Completed Home',
    },
    {
      id: 14,
      title: 'Executive Villa Master Bedroom Tech',
      category: 'Villas',
      location: 'Munnar, Kerala',
      image: '/assets/images/completed_cloudinary/tezla_home_14.jpg',
      scope: 'Bedside Touch Control, Motorized Curtains, Night Motion Guide',
      tag: 'Completed Villa',
    },
    {
      id: 15,
      title: 'High-Range Villa Electrical Infrastructure',
      category: 'Electrical',
      location: 'Kattappana, Kerala',
      image: '/assets/images/completed_cloudinary/tezla_home_15.jpg',
      scope: 'Concealed Conduit Wiring, Earthing Protection, Inverter Backup',
      tag: 'Electrical Work',
    },
    {
      id: 16,
      title: 'Smart Security Gate & Digital Lock Entry',
      category: 'Security',
      location: 'Adimali, Kerala',
      image: '/assets/images/completed_cloudinary/tezla_home_16.jpg',
      scope: 'Biometric Gate Access, Video Intercom 2-Way Audio, CCTV',
      tag: 'Access Security',
    },
    {
      id: 17,
      title: 'Luxury Estate Landscape & Pool Lighting',
      category: 'Villas',
      location: 'Kumily, Kerala',
      image: '/assets/images/completed_cloudinary/tezla_home_17.jpg',
      scope: 'Submersible Underwater Pool Lights, Automated Garden Timers',
      tag: 'Completed Villa',
    },
    {
      id: 18,
      title: 'Integrated Multi-Story Residence Engineering',
      category: 'Homes',
      location: 'Kattappana, Kerala',
      image: '/assets/images/completed_cloudinary/tezla_home_18.jpg',
      scope: 'Full Smart Home + Electrical Wiring + CCTV + Plumbing Engineering',
      tag: 'Complete Residence',
    },
  ];

  const filteredGallery = activeFilter === 'All'
    ? completedCloudinaryHomes
    : completedCloudinaryHomes.filter((item) => item.category === activeFilter);

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

Hi TEZLA Team! I saw this completed project on your website portfolio and would like a similar smart automation / engineering setup for my property.`;

    const encodedText = encodeURIComponent(textMessage);
    window.open(`https://wa.me/918921223532?text=${encodedText}`, '_blank');
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

        {/* 2. REAL COMPLETED HOMES & PROJECTS PHOTO GALLERY */}
        <div className="pt-8 border-t border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3 font-['Outfit']">
              <span>REAL COMPLETED HOMES GALLERY</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-white font-['Outfit'] mb-3">
              COMPLETED HOMES & <span className="text-gradient-cyan">WORK SHOWCASE</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Browse real completed photos of luxury homes, villas, smart automation setups, electrical panels, and plumbing systems executed by TEZLA in Kerala.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {['All', 'Homes', 'Villas', 'Interiors', 'Electrical', 'Security', 'Plumbing'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold font-['Outfit'] uppercase transition-all border ${
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
                className="glass-panel-glow rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group cursor-pointer"
                onClick={() => setActiveLightboxImage(item)}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-slate-950/85 border border-emerald-500/30 px-3 py-1 rounded-full backdrop-blur-md font-['Outfit']">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>{item.location}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-950/90 border border-emerald-500/40 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-1 font-bold">
                    TEZLA COMPLETED WORK
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-['Outfit'] mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4">
                    {item.scope}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openWhatsAppForProject(item);
                    }}
                    className="w-full py-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500 hover:text-black text-emerald-400 font-bold text-xs font-['Outfit'] uppercase transition-all flex items-center justify-center gap-1.5"
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
                  <span>{activeLightboxImage.location} • TEZLA Completed Project</span>
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
