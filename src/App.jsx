import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteEstimator from './components/QuoteEstimator';
import MobileQuickBar from './components/MobileQuickBar';

// Pages
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import SmartHomePage from './pages/SmartHomePage';
import ElectricalPlumbingPage from './pages/ElectricalPlumbingPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

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
    <Router>
      <div className="bg-[#050811] text-slate-100 min-h-screen relative font-['Inter'] selection:bg-cyan-500 selection:text-black pb-16 lg:pb-0">
        
        {/* 1. Preloader */}
        {loading && <Preloader onComplete={() => setLoading(false)} />}

        {/* 2. Main Web App */}
        {!loading && (
          <>
            {/* Header Navigation */}
            <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

            {/* Page Routes */}
            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <HomePage
                      onOpenQuote={() => setIsQuoteOpen(true)}
                      onSelectService={handleSelectService}
                    />
                  }
                />
                <Route
                  path="/solutions"
                  element={
                    <SolutionsPage
                      onOpenQuote={() => setIsQuoteOpen(true)}
                      onSelectService={handleSelectService}
                    />
                  }
                />
                <Route
                  path="/smart-home"
                  element={
                    <SmartHomePage
                      onOpenQuote={() => setIsQuoteOpen(true)}
                    />
                  }
                />
                <Route
                  path="/electrical-plumbing"
                  element={
                    <ElectricalPlumbingPage
                      onOpenQuote={() => setIsQuoteOpen(true)}
                    />
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <ProjectsPage
                      onOpenQuote={() => setIsQuoteOpen(true)}
                    />
                  }
                />
                <Route
                  path="/about"
                  element={<AboutPage />}
                />
                <Route
                  path="/contact"
                  element={<ContactPage />}
                />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />

            {/* Mobile Bottom Quick Action Bar */}
            <MobileQuickBar onOpenQuote={() => setIsQuoteOpen(true)} />

            {/* Interactive Quote Calculator Modal */}
            <QuoteEstimator
              isOpen={isQuoteOpen}
              onClose={() => setIsQuoteOpen(false)}
              onProceedToContact={() => setIsQuoteOpen(false)}
            />
          </>
        )}

      </div>
    </Router>
  );
}
