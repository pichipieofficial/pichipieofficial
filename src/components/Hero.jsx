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
      padding: '100px 16px 50px',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div className="container-custom" style={{ maxWidth: '1000px', width: '100%' }}>
        
        {/* Floating App Icon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}
        >
          <img
            src="/app-icon.png"
            alt="PichiPie TV"
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '20px',
              boxShadow: '0 0 40px rgba(0, 229, 255, 0.6), 0 0 80px rgba(233, 30, 99, 0.4)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              marginBottom: '14px'
            }}
          />

          <span style={{
            background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.2) 0%, rgba(0, 229, 255, 0.2) 100%)',
            border: '1px solid rgba(0, 229, 255, 0.4)',
            padding: '6px 14px',
            borderRadius: '30px',
            fontSize: '12px',
            fontWeight: 800,
            color: '#F8FAFC',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 0 20px rgba(0, 229, 255, 0.2)',
            maxWidth: '100%',
            textAlign: 'center'
          }}>
            <Zap size={13} color="#00E5FF" /> Official v1.0.2 • RSA 2048-bit Signed
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 6.5vw, 68px)',
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: '20px',
            letterSpacing: '-1px'
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
            fontSize: 'clamp(14px, 2vw, 19px)',
            color: 'var(--color-text-sub)',
            lineHeight: 1.6,
            marginBottom: '32px',
            maxWidth: '760px',
            margin: '0 auto 32px'
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
            gap: '14px',
            marginBottom: '40px'
          }}
        >
          <button
            onClick={handleDownload}
            className="btn-primary-gradient"
            style={{
              padding: '14px 32px',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              cursor: 'pointer',
              minWidth: '220px'
            }}
          >
            <Download size={20} /> Download APK (v1.0.2)
          </button>

          <button
            onClick={onOpenQR}
            className="btn-glass-secondary"
            style={{
              padding: '14px 26px',
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              minWidth: '180px'
            }}
          >
            <QrCode size={18} /> Mobile Scan QR
          </button>
        </motion.div>

        {/* Single Row Hero Feature Cards Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-cards-grid"
        >
          <div className="glass-card" style={{ padding: '18px 14px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '135px' }}>
            <Tv size={26} color="#00E5FF" style={{ marginBottom: '8px' }} />
            <h3 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '4px', color: '#FFFFFF' }}>250+ Live Channels</h3>
            <p style={{ fontSize: '12px', color: 'var(--color-text-sub)', lineHeight: 1.4 }}>High-definition sports, news &amp; entertainment</p>
          </div>

          <div className="glass-card" style={{ padding: '18px 14px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '135px' }}>
            <Film size={26} color="#E91E63" style={{ marginBottom: '8px' }} />
            <h3 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '4px', color: '#FFFFFF' }}>10,000+ Movies</h3>
            <p style={{ fontSize: '12px', color: 'var(--color-text-sub)', lineHeight: 1.4 }}>Adaptive 5–8 column 4K &amp; 1080p movie vault</p>
          </div>

          <div className="glass-card" style={{ padding: '18px 14px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '135px' }}>
            <ShieldCheck size={26} color="#A855F7" style={{ marginBottom: '8px' }} />
            <h3 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '4px', color: '#FFFFFF' }}>Production Signed</h3>
            <p style={{ fontSize: '12px', color: 'var(--color-text-sub)', lineHeight: 1.4 }}>RSA 2048-bit keystore signed through 2053</p>
          </div>

          <div className="glass-card" style={{ padding: '18px 14px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '135px' }}>
            <CheckCircle2 size={26} color="#10B981" style={{ marginBottom: '8px' }} />
            <h3 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '4px', color: '#FFFFFF' }}>100% Free &amp; Clean</h3>
            <p style={{ fontSize: '12px', color: 'var(--color-text-sub)', lineHeight: 1.4 }}>Zero ads, zero data tracking, pure streaming</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
