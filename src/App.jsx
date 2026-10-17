import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import SelectedWork from './components/SelectedWork';
import About from './components/About';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ContactModal from './components/ContactModal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#08070d] text-white selection:bg-purple-600 selection:text-white relative">
      {/* Background ambient lighting effects */}
      <div className="fixed inset-0 purple-radial-glow pointer-events-none z-0" />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenContact={() => setIsContactOpen(true)} />
        
        <main className="flex-grow">
          <Hero onOpenContact={() => setIsContactOpen(true)} />
          <Ticker />
          <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />
          <About />
          <Services onOpenContact={() => setIsContactOpen(true)} />
          <ContactSection onOpenContact={() => setIsContactOpen(true)} />
        </main>

        <Footer />
      </div>

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => {
          setSelectedProject(null);
          setIsContactOpen(true);
        }}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
