import React from 'react';
import { motion } from 'framer-motion';

/* ── Custom Mini-Visualizers for each Bento Card ── */

const ShieldVisualizer = () => (
  <div style={{ position: 'absolute', right: '-20px', bottom: '-40px', opacity: 0.15, pointerEvents: 'none' }}>
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      style={{ width: '180px', height: '180px', borderRadius: '50%', border: '2px solid var(--color-primary)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    />
    <motion.div
      animate={{ scale: [1.2, 1.5, 1.2], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      style={{ width: '240px', height: '240px', borderRadius: '50%', border: '1px solid var(--color-primary)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    />
    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'relative', zIndex: 2 }}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  </div>
);

const AudioVisualizer = () => {
  const bars = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div style={{ position: 'absolute', right: '30px', bottom: '30px', display: 'flex', alignItems: 'flex-end', gap: '6px', height: '60px', opacity: 0.3, pointerEvents: 'none' }}>
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          animate={{ height: ['20%', '100%', '30%', '80%', '20%'] }}
          transition={{ duration: 1.5 + (i * 0.2), repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
          style={{ width: '8px', background: 'var(--color-accent)', borderRadius: '4px' }}
        />
      ))}
    </div>
  );
};

const NetworkVisualizer = () => (
  <div style={{ position: 'absolute', right: '0', top: '0', bottom: '0', width: '300px', opacity: 0.15, pointerEvents: 'none', overflow: 'hidden' }}>
    <motion.div
      animate={{ x: [0, -100, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      style={{ display: 'flex', gap: '20px', position: 'absolute', top: '40px', whiteSpace: 'nowrap' }}
    >
      {[...Array(3)].map((_, i) => (
        <div key={i} style={{ display: 'flex', gap: '20px' }}>
          <span style={{ color: 'var(--color-primary)', fontFamily: 'monospace', fontSize: '14px' }}>{'>'} connect_secure_stream()</span>
          <span style={{ color: 'var(--color-accent)', fontFamily: 'monospace', fontSize: '14px' }}>[200 OK]</span>
          <span style={{ color: 'var(--color-primary)', fontFamily: 'monospace', fontSize: '14px' }}>{'>'} bypass_cors()</span>
        </div>
      ))}
    </motion.div>
    <motion.div
      animate={{ x: [-100, 0, -100] }}
      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      style={{ display: 'flex', gap: '20px', position: 'absolute', bottom: '40px', whiteSpace: 'nowrap' }}
    >
      {[...Array(3)].map((_, i) => (
        <div key={i} style={{ display: 'flex', gap: '20px' }}>
          <span style={{ color: 'var(--color-text-secondary)', fontFamily: 'monospace', fontSize: '14px' }}>01010110 01101001</span>
          <span style={{ color: 'var(--color-text-secondary)', fontFamily: 'monospace', fontSize: '14px' }}>ESTABLISHING_SECURE_TUNNEL</span>
        </div>
      ))}
    </motion.div>
  </div>
);

const CinemaVisualizer = () => (
  <div style={{ position: 'absolute', right: '-10px', bottom: '-20px', opacity: 0.2, pointerEvents: 'none' }}>
    <motion.svg 
      width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
      <line x1="7" y1="2" x2="7" y2="22" />
      <line x1="17" y1="2" x2="17" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="2" y1="7" x2="7" y2="7" />
      <line x1="2" y1="17" x2="7" y2="17" />
      <line x1="17" y1="17" x2="22" y2="17" />
      <line x1="17" y1="7" x2="22" y2="7" />
    </motion.svg>
  </div>
);

const ChipVisualizer = () => (
  <div style={{ position: 'absolute', right: '10px', bottom: '10px', opacity: 0.2, pointerEvents: 'none' }}>
    <motion.svg 
      width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    >
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </motion.svg>
  </div>
);

const features = [
  {
    title: 'Zero Data Collection',
    description: 'Your data never leaves your device. No tracking, no profiling, no compromise.',
    color: 'cyan',
    span: 2,
    visualizer: <ShieldVisualizer />
  },
  {
    title: 'Ad-Free Forever',
    description: 'No commercials, no banners, no interruptions — just pure viewing.',
    color: 'accent',
    span: 1,
    visualizer: <CinemaVisualizer />
  },
  {
    title: 'ExoPlayer 3 Engine',
    description: 'Hardware decode fallback for flawless 4K playback on any device.',
    color: 'cyan',
    span: 1,
    visualizer: <ChipVisualizer />
  },
  {
    title: '200% Audio Boost',
    description: 'LoudnessEnhancer pushes volume beyond system limits for quiet speakers.',
    color: 'accent',
    span: 2,
    visualizer: <AudioVisualizer />
  },
  {
    title: 'Anti-Block Technology',
    description: 'Custom HTTP interception injects Referers and User-Agents automatically.',
    color: 'cyan',
    span: 3,
    visualizer: <NetworkVisualizer />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 20 }
  }
};

export default function BentoFeatures() {
  return (
    <section id="features" style={{ padding: '120px var(--space-4)', position: 'relative', zIndex: 1 }}>
      <div className="section-container" style={{ maxWidth: '1200px' }}>
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        >
          <span className="section-header__label" style={{ marginBottom: '16px', display: 'inline-block' }}>Architecture</span>
          <h2 className="section-header__title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px', letterSpacing: '-0.03em' }}>
            Engineered for <span className="text-gradient">Performance</span>
          </h2>
          <p className="section-header__description" style={{ fontSize: '1.15rem' }}>
            Every component optimized for the ultimate living room experience.
          </p>
        </motion.div>

        <motion.div 
          className="bento-grid"
          style={{ gap: '20px' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              className={`glass-card bento-card bento-card--span-${feat.span}`}
              style={{ 
                gridColumn: `span ${feat.span}`,
                padding: '32px',
                minHeight: '260px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(8, 11, 24, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.04)'
              }}
              whileHover={{ 
                y: -6,
                background: 'rgba(12, 16, 36, 0.7)',
                borderColor: feat.color === 'cyan' 
                  ? 'rgba(0, 229, 255, 0.2)' 
                  : 'rgba(213, 0, 249, 0.2)',
                boxShadow: `0 20px 40px rgba(0,0,0,0.5), 0 0 40px ${feat.color === 'cyan' ? 'rgba(0,229,255,0.1)' : 'rgba(213,0,249,0.1)'}`,
                transition: { type: 'spring', stiffness: 300, damping: 22 }
              }}
            >
              {/* Animated Background Visualizer */}
              {feat.visualizer}

              <div style={{ position: 'relative', zIndex: 10, maxWidth: feat.span === 3 ? '60%' : '100%' }}>
                <div style={{ 
                  width: '12px', height: '12px', borderRadius: '50%', 
                  background: feat.color === 'cyan' ? 'var(--color-primary)' : 'var(--color-accent)',
                  marginBottom: '20px',
                  boxShadow: `0 0 20px ${feat.color === 'cyan' ? 'var(--color-primary)' : 'var(--color-accent)'}`
                }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '12px' }}>
                  {feat.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
