import React, { useRef, useState, useEffect } from 'react';
import ThreeCanvas from './components/ThreeCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveExperienceSection from './components/LiveExperienceSection';
import MovieVaultSection from './components/MovieVaultSection';
import StandbySlateSection from './components/StandbySlateSection';
import FeatureShowcase from './components/FeatureShowcase';
import InstallGuide from './components/InstallGuide';
import ContactSection from './components/ContactSection';
import QRModal from './components/QRModal';
import RocketButton from './components/RocketButton';
import Footer from './components/Footer';

export default function App() {
  const mouse = useRef({ x: 0, y: 0 });
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  // Direct APK Download URL
  const apkDownloadUrl = "https://github.com/pichipieofficial/app-update/releases/latest/download/PichiPie-TV.apk";

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownload = (e) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    
    // Add unique timestamp query parameter so browser/OS download manager initiates fresh download (e.g. PichiPie-TV (1).apk) without browser caching issues
    const freshDownloadUrl = `${apkDownloadUrl}?t=${Date.now()}`;

    // Background iframe download trigger: follows GitHub 302 redirects without reloading or interrupting the main web page
    let iframe = document.getElementById('apk-download-frame');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'apk-download-frame';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }
    iframe.src = freshDownloadUrl;
  };

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* 3D WebGL Background Canvas with 3D Cyber Butterfly */}
      <ThreeCanvas mouse={mouse} />

      {/* Main Content */}
      <div className="relative-content">
        <Navbar onDownloadClick={handleDownload} />
        
        <Hero
          onOpenQR={() => setIsQRModalOpen(true)}
          onDownloadClick={handleDownload}
        />
        
        {/* Nav Anchor 1: Brand-New Live Experience Section */}
        <LiveExperienceSection />

        {/* Nav Anchor 2: Cinematic Engine */}
        <MovieVaultSection />

        {/* Nav Anchor 3: Standby Slate */}
        <StandbySlateSection />

        {/* Performance Feature Showcase */}
        <FeatureShowcase />
        
        {/* Nav Anchor 4: Install Guide */}
        <InstallGuide onDownloadClick={handleDownload} />

        {/* Nav Anchor 5: Contact Dev */}
        <ContactSection />
        
        <Footer onDownloadClick={handleDownload} />
      </div>

      {/* Rocket Launch Back To Top Button */}
      <RocketButton />

      {/* QR Code Scan Modal */}
      <QRModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        apkUrl={apkDownloadUrl}
      />
    </div>
  );
}
