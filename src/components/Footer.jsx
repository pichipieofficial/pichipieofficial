import React from 'react';
import { motion } from 'framer-motion';
import { DownloadSimple } from '@phosphor-icons/react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ 
      position: 'relative', 
      zIndex: 1, 
      borderTop: '1px solid rgba(255,255,255,0.05)',
      background: 'linear-gradient(to top, rgba(10, 14, 30, 0.9), transparent)',
      marginTop: '50px'
    }}>
      
      {/* Premium subtle top glow */}
      <div style={{
        position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.3), transparent)',
        boxShadow: '0 0 20px rgba(0, 229, 255, 0.2)'
      }} />

      <div className="section-container" style={{ padding: '30px var(--space-4) 20px', maxWidth: '1100px' }}>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '16px'
        }}>

          {/* Logo */}
          <motion.div 
            style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{
              width: '40px', height: '40px', borderRadius: '12px', overflow: 'hidden',
              background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
            }}>
              <img src="/Icon.png" alt="PichiPie" style={{ transform: 'scale(1.35)', objectFit: 'cover' }} />
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff' }}>
              PichiPie
            </span>
          </motion.div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <motion.a 
              href="https://github.com/pichipieofficial/app-update/releases/latest/download/PichiPie-TV.apk" 
              style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 500 }}
              whileHover={{ color: '#00E5FF' }}
            >
              <DownloadSimple size={16} weight="bold" />
              Download
            </motion.a>
            <motion.a 
              href="#" 
              style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}
              whileHover={{ color: '#00E5FF' }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}
              whileHover={{ color: '#00E5FF' }}
            >
              Terms of Service
            </motion.a>
          </div>

          {/* Copyright */}
          <div style={{ 
            color: 'rgba(255,255,255,0.3)', 
            fontSize: '0.75rem',
            textAlign: 'center'
          }}>
            &copy; {new Date().getFullYear()} PichiPie TV. Engineered for Mobile & the Living Room.
          </div>

        </div>
      </div>
    </footer>
  );
}
