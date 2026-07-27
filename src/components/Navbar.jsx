import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Sparkles, Zap, Film, Radio, Rocket, Mail, Menu, X } from 'lucide-react';

export default function Navbar({ onDownloadClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Live Broadcast Hub', href: '#features', icon: <Zap size={16} color="#00E5FF" /> },
    { label: 'Cinematic Engine', href: '#vault', icon: <Film size={16} color="#E91E63" /> },
    { label: 'Standby Slate', href: '#standby', icon: <Radio size={16} color="#A855F7" /> },
    { label: 'Install Guide', href: '#guide', icon: <Rocket size={16} color="#10B981" /> },
    { label: 'Contact Dev', href: '#contact', icon: <Mail size={16} color="#00E5FF" /> }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      padding: '12px 16px',
      background: 'rgba(7, 9, 19, 0.88)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.6)'
    }}>
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Icon & TV Name — Clickable to Scroll to Home */}
        <div 
          onClick={scrollToTop}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
          title="Back to Top / Home"
        >
          <img
            src="./app-icon.png"
            alt="PichiPie TV App Icon"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              boxShadow: '0 0 15px rgba(0, 229, 255, 0.4)',
              display: 'block'
            }}
          />
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '19px',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.3px',
              color: '#FFFFFF'
            }}>
              PichiPie <span style={{ color: '#00E5FF' }}>TV</span>
            </span>

            <span style={{
              background: 'rgba(0, 229, 255, 0.12)',
              border: '1px solid rgba(0, 229, 255, 0.4)',
              color: '#00E5FF',
              fontSize: '10px',
              fontWeight: 800,
              padding: '2px 8px',
              borderRadius: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '3px'
            }}>
              <Sparkles size={11} /> v1.0.2
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="hidden-mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                color: 'var(--color-text-sub)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s'
              }}
              onMouseOver={e => e.currentTarget.style.color = '#00E5FF'}
              onMouseOut={e => e.currentTarget.style.color = 'var(--color-text-sub)'}
            >
              {item.icon} {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center' }}>
          <button 
            onClick={(e) => onDownloadClick(e)}
            className="btn-primary-gradient"
            style={{
              padding: '10px 20px',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}
          >
            <Download size={16} /> Download APK
          </button>
        </div>

        {/* Mobile Actions: Direct APK Download + Hamburger Toggle */}
        <div className="show-mobile-only" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={(e) => onDownloadClick(e)}
            className="btn-primary-gradient"
            style={{
              padding: '8px 14px',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer'
            }}
          >
            <Download size={14} /> APK
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer'
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} color="#00E5FF" /> : <Menu size={22} color="#FFFFFF" />}
          </button>
        </div>

      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              overflow: 'hidden',
              background: 'rgba(9, 12, 25, 0.98)',
              borderTop: '1px solid rgba(0, 229, 255, 0.2)',
              marginTop: '12px',
              marginHorizontal: '-16px',
              padding: '20px 24px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
            className="show-mobile-only"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#F8FAFC',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {item.icon} {item.label}
              </a>
            ))}

            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                onDownloadClick(e);
              }}
              className="btn-primary-gradient"
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                cursor: 'pointer',
                marginTop: '8px'
              }}
            >
              <Download size={18} /> Download PichiPie TV APK
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
