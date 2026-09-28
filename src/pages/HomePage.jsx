import React from 'react';
import Hero from '../components/Hero';
import IntroPhilosophy from '../components/IntroPhilosophy';
import SmartHomeExperience from '../components/SmartHomeExperience';
import ServicesSection from '../components/ServicesSection';
import WhyTezla from '../components/WhyTezla';
import HowItWorks from '../components/HowItWorks';
import ElectricalPlumbing from '../components/ElectricalPlumbing';
import ProjectTypes from '../components/ProjectTypes';
import AboutSection from '../components/AboutSection';
import BrandStatement from '../components/BrandStatement';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onOpenQuote, onSelectService }) {
  return (
    <>
      <Hero onOpenQuote={onOpenQuote} />
      <IntroPhilosophy />
      <SmartHomeExperience />
      <ServicesSection onSelectService={onSelectService} />
      <WhyTezla />
      <HowItWorks />
      <ElectricalPlumbing onOpenQuote={onOpenQuote} />
      <ProjectTypes onSelectProject={(pt) => onOpenQuote()} />
      <AboutSection />
      <BrandStatement onOpenQuote={onOpenQuote} />
      <ContactSection selectedServiceFromParent={null} />
    </>
  );
}
