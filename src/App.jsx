import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroPhilosophy from './components/IntroPhilosophy';
import SmartHomeExperience from './components/SmartHomeExperience';
import ServicesSection from './components/ServicesSection';
import WhyTezla from './components/WhyTezla';
import HowItWorks from './components/HowItWorks';
import ElectricalPlumbing from './components/ElectricalPlumbing';
import ProjectTypes from './components/ProjectTypes';
import QuoteEstimator from './components/QuoteEstimator';
import AboutSection from './components/AboutSection';
import BrandStatement from './components/BrandStatement';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#050811] text-slate-100 min-h-screen relative font-['Inter'] selection:bg-cyan-500 selection:text-black">
      {/* 1. Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Main Website Structure */}
      {!loading && (
        <>
          {/* Header Navigation */}
          <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

          {/* Homepage Sections Flow */}
          <main>
            {/* Hero Section */}
            <Hero onOpenQuote={() => setIsQuoteOpen(true)} />

            {/* Intro Philosophy: Technology That Feels Like Home */}
            <IntroPhilosophy />

            {/* 3D Interactive Smart Home Experience */}
            <SmartHomeExperience />

            {/* 6 Core Service Verticals */}
            <ServicesSection onSelectService={handleSelectService} />

            {/* Why TEZLA Pillars */}
            <WhyTezla />

            {/* 6-Step How It Works Process */}
            <HowItWorks />

            {/* Heavy Electrical & Plumbing Engineering */}
            <ElectricalPlumbing onOpenQuote={() => setIsQuoteOpen(true)} />

            {/* Solutions for Every Space (Project Types) */}
            <ProjectTypes onSelectProject={(pt) => setIsQuoteOpen(true)} />

            {/* About TEZLA */}
            <AboutSection />

            {/* Fullscreen Cinematic Brand Statement */}
            <BrandStatement onOpenQuote={() => setIsQuoteOpen(true)} />

            {/* Interactive Contact & Lead Form */}
            <ContactSection selectedServiceFromParent={selectedService} />
          </main>

          {/* Footer */}
          <Footer />

          {/* Interactive Quote Calculator Modal */}
          <QuoteEstimator
            isOpen={isQuoteOpen}
            onClose={() => setIsQuoteOpen(false)}
            onProceedToContact={() => setIsQuoteOpen(false)}
          />
        </>
      )}
    </div>
  );
}
