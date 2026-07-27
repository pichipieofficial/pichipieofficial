import React from 'react';
import { Download, Sparkles, Zap, Film, Radio, Rocket, Mail } from 'lucide-react';

export default function Navbar({ onDownloadClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      padding: '14px 24px',
      background: 'rgba(7, 9, 19, 0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
    }}>
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Icon & TV Name — Clickable to Scroll to Home */}
        <div 
          onClick={scrollToTop}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
          title="Back to Top / Home"
        >
          <img
            src="./app-icon.png"
            alt="PichiPie TV App Icon"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              boxShadow: '0 0 15px rgba(0, 229, 255, 0.4)',
              display: 'block'
            }}
          />
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '20px',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.3px',
              color: '#FFFFFF'
            }}>
              PichiPie <span style={{ color: '#00E5FF' }}>TV</span>
            </span>
          </div>

          <span style={{
            background: 'rgba(0, 229, 255, 0.12)',
            border: '1px solid rgba(0, 229, 255, 0.4)',
            color: '#00E5FF',
            fontSize: '11px',
            fontWeight: 800,
            padding: '3px 10px',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            marginLeft: '6px'
          }}>
            <Sparkles size={12} /> v1.0.2
          </span>
        </div>

        {/* Futuristic Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="hidden-mobile">
          <a href="#features" style={{ color: 'var(--color-text-sub)', textDecoration: 'none', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#00E5FF'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-text-sub)'}>
            <Zap size={14} color="#00E5FF" /> Live Broadcast Hub
          </a>
          <a href="#vault" style={{ color: 'var(--color-text-sub)', textDecoration: 'none', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#00E5FF'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-text-sub)'}>
            <Film size={14} color="#E91E63" /> Cinematic Engine
          </a>
          <a href="#standby" style={{ color: 'var(--color-text-sub)', textDecoration: 'none', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#00E5FF'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-text-sub)'}>
            <Radio size={14} color="#A855F7" /> Standby Slate
          </a>
          <a href="#guide" style={{ color: 'var(--color-text-sub)', textDecoration: 'none', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#00E5FF'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-text-sub)'}>
            <Rocket size={14} color="#10B981" /> Install Guide
          </a>
          <a href="#contact" style={{ color: 'var(--color-text-sub)', textDecoration: 'none', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#00E5FF'} onMouseOut={e => e.currentTarget.style.color = 'var(--color-text-sub)'}>
            <Mail size={14} color="#00E5FF" /> Contact Dev
          </a>
        </div>

        {/* Right CTA Button */}
        <button 
          onClick={onDownloadClick}
          className="btn-primary-gradient"
          style={{
            padding: '10px 22px',
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
    </nav>
  );
}
