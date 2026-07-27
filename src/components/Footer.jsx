import React from 'react';
import { Heart, Mail } from 'lucide-react';

export default function Footer({ onDownloadClick }) {
  return (
    <footer style={{
      padding: '30px 16px',
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
        gap: '16px'
      }}>
        
        {/* Left Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src="/app-icon.png"
            alt="PichiPie TV"
            style={{ width: '26px', height: '26px', borderRadius: '7px' }}
          />
          <span style={{ fontWeight: 900, color: '#FFFFFF', fontSize: '17px' }}>PichiPie TV</span>
          <span style={{ fontSize: '11px', color: '#00E5FF', fontWeight: 700 }}>v1.0.2</span>
        </div>

        {/* Center Text: Crafted with ❤️ by PichiPie Labs */}
        <div style={{ textAlign: 'center', fontWeight: 600, color: '#CBD5E1', fontSize: '13px' }}>
          Crafted with <Heart size={14} color="#E91E63" fill="#E91E63" style={{ display: 'inline', verticalAlign: 'middle', margin: '0 2px' }} /> by <strong style={{ color: '#FFFFFF' }}>PichiPie Labs</strong>
        </div>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href="mailto:pichipie.official@gmail.com"
            style={{
              color: 'var(--color-text-sub)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              wordBreak: 'break-all',
              transition: 'color 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.color = '#00E5FF'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--color-text-sub)'}
          >
            <Mail size={14} color="#00E5FF" /> Dev Email
          </a>

          <button
            onClick={onDownloadClick}
            style={{
              background: 'none',
              border: 'none',
              color: '#00E5FF',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '13px'
            }}
          >
            Download APK
          </button>
        </div>

      </div>
    </footer>
  );
}
