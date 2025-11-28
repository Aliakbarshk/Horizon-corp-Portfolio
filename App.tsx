import React, { useState } from 'react';
import { BackgroundScene } from './components/BackgroundScene';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { StatsSection } from './components/StatsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SpaceshipGame } from './components/SpaceshipGame';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleLoadComplete = () => {
    setFadeOut(true);
    // Allow animation to play out before unmounting
    setTimeout(() => {
        setLoading(false);
    }, 800);
  };

  return (
    <>
      {/* Loading Screen */}
      {loading && (
        <div 
          className={`fixed inset-0 z-[100] transition-opacity duration-700 ease-in-out ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
            <Loader onComplete={handleLoadComplete} />
        </div>
      )}

      {/* Main App */}
      <div className={`min-h-screen bg-[#050505] text-white selection:bg-blue-500/30`}>
        {/* 3D Background - Fixed Position - Rendered always but hidden by loader initially */}
        <BackgroundScene />

        {/* Foreground Content - Scrollable */}
        <main className={`relative z-10 transition-opacity duration-1000 delay-300 ${loading && !fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <Navbar />
          <HeroSection />
          <StatsSection />
          <ProcessSection />
          <ServicesSection />
          <ProjectsSection />
          <SpaceshipGame />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;