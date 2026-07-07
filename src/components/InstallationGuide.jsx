import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Download the APK',
    description: 'Get the latest release directly from your Mobile browser or TV Downloader app.',
    color: '#00E5FF',
    delay: 0.1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 12V28M20 28L14 22M20 28L26 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 32H30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    )
  },
  {
    number: '02',
    title: 'Install & Enjoy',
    description: 'Simply tap the downloaded file to install. No USB drives or complex setups needed.',
    color: '#D500F9',
    delay: 0.2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="10" width="24" height="20" rx="4" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M12 16H28M12 24H22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    )
  },
  {
    number: '03',
    title: 'Launch PichiPie',
    description: 'Open the app, instantly connect to the built-in secure server, and start streaming. No account required.',
    color: '#22C55E',
    delay: 0.3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="8" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M16 28L24 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 28V32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    )
  }
];

export default function InstallationGuide() {
  return (
    <section id="install" style={{ padding: '120px var(--space-4)', position: 'relative', zIndex: 1 }}>
      <div className="section-container" style={{ maxWidth: '1100px' }}>
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          style={{ marginBottom: '60px' }}
        >
          <span className="section-header__label">Get Started</span>
          <h2 className="section-header__title">
            Three Steps. <span className="text-gradient">Done.</span>
          </h2>
          <p className="section-header__description">
            Install PichiPie on your Mobile device or Android TV in under a minute. No account required.
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px',
          position: 'relative'
        }}>
          {/* Background connecting line (visible on desktop) */}
          <div style={{
            position: 'absolute', top: '40px', left: '10%', right: '10%', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            zIndex: 0
          }} />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: step.delay, type: 'spring', stiffness: 70, damping: 20 }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              style={{
                background: 'rgba(12, 16, 36, 0.4)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '24px',
                padding: '40px 30px',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 1,
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}
            >
              {/* Massive Background Number */}
              <div style={{
                position: 'absolute', top: '-10px', right: '-10px',
                fontSize: '120px', fontWeight: 900, lineHeight: 1,
                color: step.color, opacity: 0.05, pointerEvents: 'none',
                userSelect: 'none', letterSpacing: '-0.05em'
              }}>
                {step.number}
              </div>

              {/* Ambient Glow */}
              <div style={{
                position: 'absolute', top: '0', left: '0', width: '100%', height: '2px',
                background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`,
                opacity: 0.5
              }} />

              {/* Icon Container */}
              <div style={{ 
                width: '64px', height: '64px', borderRadius: '16px',
                background: `${step.color}15`, color: step.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '30px', border: `1px solid ${step.color}30`,
                boxShadow: `0 0 20px ${step.color}20`
              }}>
                {step.icon}
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '12px' }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: '60px' }}
        >
          <motion.a 
            href="https://github.com/pichipieofficial/app-update/releases/latest/download/PichiPie-TV.apk"
            className="hero-premium__btn-primary" /* Reusing the premium CTA from Hero */
            whileHover={{ scale: 1.04, boxShadow: '0 0 60px rgba(0, 229, 255, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          >
            Download PichiPie TV
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
