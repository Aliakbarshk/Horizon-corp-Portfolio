import React from 'react';
import { BackgroundScene } from './components/BackgroundScene';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { StatsSection } from './components/StatsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SpaceshipGame } from './components/SpaceshipGame';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      {/* 3D Background - Fixed Position */}
      <BackgroundScene />

      {/* Foreground Content - Scrollable */}
      <main className="relative z-10">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ProjectsSection />
        <SpaceshipGame />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
