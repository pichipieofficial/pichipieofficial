import React from 'react';
import { motion } from 'framer-motion';
import { Download, QrCode, ShieldCheck, Tv, Film, Zap, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero({ onOpenQR, onDownloadClick }) {
  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
    onDownloadClick();
  };

  return (
    <section style={{
      padding: '110px 24px 60px',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div className="container-custom" style={{ maxWidth: '1000px' }}>
        
        {/* Floating App Icon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }}
        >
          <img
            src="/app-icon.png"
            alt="PichiPie TV"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '22px',
              boxShadow: '0 0 40px rgba(0, 229, 255, 0.6), 0 0 80px rgba(233, 30, 99, 0.4)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              marginBottom: '16px'
            }}
          />

          <span style={{
            background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.2) 0%, rgba(0, 229, 255, 0.2) 100%)',
            border: '1px solid rgba(0, 229, 255, 0.4)',
            padding: '8px 18px',
            borderRadius: '30px',
            fontSize: '13px',
            fontWeight: 800,
            color: '#F8FAFC',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 0 20px rgba(0, 229, 255, 0.2)'
          }}>
            <Zap size={14} color="#00E5FF" /> Official v1.0.2 • RSA 2048-bit Signed
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(38px, 6vw, 72px)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '24px',
            letterSpacing: '-1.5px'
          }}
        >
          The Future of Streaming <br />
          <span className="text-gradient-cyan">PichiPie TV v1.0.2</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'var(--color-text-sub)',
            lineHeight: 1.6,
            marginBottom: '40px',
            maxWidth: '760px',
            margin: '0 auto 40px'
          }}
        >
          Ground-up Cyber-Glass UI, adaptive 5–8 column 4K movie vault, broadcast standby slates, and instant 1-click D-Pad remote navigation for Android TV &amp; Mobile.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '18px',
            marginBottom: '50px'
          }}
        >
          <button
            onClick={handleDownload}
            className="btn-primary-gradient"
            style={{
              padding: '16px 38px',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer'
            }}
          >
            <Download size={22} /> Download APK (v1.0.2)
          </button>

          <button
            onClick={onOpenQR}
            className="btn-glass-secondary"
            style={{
              padding: '16px 28px',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer'
            }}
          >
            <QrCode size={20} /> Mobile Scan QR
          </button>
        </motion.div>

        {/* 4 Cards strictly in ONE ROW (4 columns grid) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            marginTop: '20px'
          }}
          className="hero-cards-row"
        >
          <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
            <Tv size={28} color="#00E5FF" style={{ marginBottom: '10px' }} />
            <h3 style={{ fontSize: '17px', fontWeight: 800, marginBottom: '4px' }}>250+ Live Channels</h3>
            <p style={{ fontSize: '12px', color: 'var(--color-text-sub)' }}>High-definition sports, news &amp; entertainment</p>
          </div>

          <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
            <Film size={28} color="#E91E63" style={{ marginBottom: '10px' }} />
            <h3 style={{ fontSize: '17px', fontWeight: 800, marginBottom: '4px' }}>10,000+ Movies</h3>
            <p style={{ fontSize: '12px', color: 'var(--color-text-sub)' }}>Adaptive 5-8 column 4K &amp; 1080p movie vault</p>
          </div>

          <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
            <ShieldCheck size={28} color="#A855F7" style={{ marginBottom: '10px' }} />
            <h3 style={{ fontSize: '17px', fontWeight: 800, marginBottom: '4px' }}>Production Signed</h3>
            <p style={{ fontSize: '12px', color: 'var(--color-text-sub)' }}>RSA 2048-bit keystore signed through 2053</p>
          </div>

          <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
            <CheckCircle2 size={28} color="#10B981" style={{ marginBottom: '10px' }} />
            <h3 style={{ fontSize: '17px', fontWeight: 800, marginBottom: '4px' }}>100% Free &amp; Clean</h3>
            <p style={{ fontSize: '12px', color: 'var(--color-text-sub)' }}>Zero ads, zero data tracking, pure streaming</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
