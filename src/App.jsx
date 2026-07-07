import React from 'react';
import './App.css';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoFeatures from './components/BentoFeatures';
import HorizontalShowcase from './components/HorizontalShowcase';
import ScreenshotsCarousel from './components/ScreenshotsCarousel';
import InstallationGuide from './components/InstallationGuide';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Background3D />
      <Navbar />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <BentoFeatures />
        <HorizontalShowcase />
        <ScreenshotsCarousel />
        <InstallationGuide />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
