import React from 'react';
import { Heart, Mail } from 'lucide-react';

export default function Footer({ onDownloadClick }) {
  return (
    <footer style={{
      padding: '36px 24px',
      background: 'rgba(5, 7, 15, 0.95)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      color: 'var(--color-text-sub)',
      fontSize: '14px'
    }}>
      <div className="container-custom" style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }}>
        
        {/* Left Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src="/app-icon.png"
            alt="PichiPie TV"
            style={{ width: '28px', height: '28px', borderRadius: '7px' }}
          />
          <span style={{ fontWeight: 900, color: '#FFFFFF', fontSize: '18px' }}>PichiPie TV</span>
          <span style={{ fontSize: '12px', color: '#00E5FF', fontWeight: 700 }}>v1.0.2</span>
        </div>

        {/* Center Text: Crafted with ❤️ by PichiPie Labs */}
        <div style={{ textAlign: 'center', fontWeight: 600, color: '#CBD5E1' }}>
          Crafted with <Heart size={15} color="#E91E63" fill="#E91E63" style={{ display: 'inline', verticalAlign: 'middle', margin: '0 2px' }} /> by <strong style={{ color: '#FFFFFF' }}>PichiPie Labs</strong>
        </div>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a
            href="mailto:pichipie.official@gmail.com"
            style={{
              color: 'var(--color-text-sub)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'color 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.color = '#00E5FF'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--color-text-sub)'}
          >
            <Mail size={15} color="#00E5FF" /> Dev: pichipie.official@gmail.com
          </a>

          <button
            onClick={onDownloadClick}
            style={{
              background: 'none',
              border: 'none',
              color: '#00E5FF',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '14px'
            }}
          >
            Download APK
          </button>
        </div>

      </div>
    </footer>
  );
}
