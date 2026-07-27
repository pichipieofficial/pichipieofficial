import React from 'react';
import { Heart, Mail, Download, Sparkles } from 'lucide-react';

export default function Footer({ onDownloadClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-inner">
        
        {/* Brand Section */}
        <div className="footer-brand" onClick={scrollToTop} style={{ cursor: 'pointer' }} title="Back to Top">
          <img
            src="/app-icon.png"
            alt="PichiPie TV"
            style={{ width: '28px', height: '28px', borderRadius: '8px' }}
          />
          <span style={{ fontWeight: 900, color: '#FFFFFF', fontSize: '18px', fontFamily: 'var(--font-heading)' }}>
            PichiPie <span style={{ color: '#00E5FF' }}>TV</span>
          </span>
          <span style={{
            background: 'rgba(0, 229, 255, 0.1)',
            border: '1px solid rgba(0, 229, 255, 0.3)',
            color: '#00E5FF',
            fontSize: '10px',
            fontWeight: 800,
            padding: '2px 8px',
            borderRadius: '12px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '3px'
          }}>
            <Sparkles size={10} /> v1.0.2
          </span>
        </div>

        {/* Center Credits */}
        <div className="footer-center">
          Crafted with <Heart size={14} color="#E91E63" fill="#E91E63" style={{ margin: '0 2px' }} /> by <strong style={{ color: '#FFFFFF' }}>PichiPie Labs</strong>
        </div>

        {/* Right Quick Actions */}
        <div className="footer-actions">
          <a
            href="mailto:pichipie.official@gmail.com"
            style={{
              color: 'var(--color-text-sub)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '13px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'color 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.color = '#00E5FF'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--color-text-sub)'}
          >
            <Mail size={14} color="#00E5FF" /> Dev Contact
          </a>

          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>

          <button
            onClick={(e) => onDownloadClick(e)}
            style={{
              background: 'rgba(0, 229, 255, 0.1)',
              border: '1px solid rgba(0, 229, 255, 0.3)',
              color: '#00E5FF',
              borderRadius: '20px',
              padding: '6px 14px',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              transition: 'all 0.2s'
            }}
          >
            <Download size={13} /> Download APK
          </button>
        </div>

      </div>
    </footer>
  );
}

