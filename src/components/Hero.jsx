import React from 'react';
import { motion } from 'framer-motion';
import { DownloadSimple, Tag, ArrowRight } from '@phosphor-icons/react';
import TvMockupRenderer from './TvMockupRenderer';
import MobileMockupRenderer from './MobileMockupRenderer';

/* ── Live TV Screen for TV Mockup ── */
const TvLiveScreen = () => {
  const channels = [
    { name: 'Sports HD', cat: 'Sports', color: '#22C55E' },
    { name: 'News 24', cat: 'News', color: '#3B82F6' },
    { name: 'Movie Max', cat: 'Movies', color: '#EF4444' },
    { name: 'Kids Zone', cat: 'Kids', color: '#F59E0B' },
  ];

  return (
    <div style={{ padding: '20px', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#0a0e1e' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', gap: '8px' }}>
        <div style={{ width: '24px', height: '24px', borderRadius: '6px', overflow: 'hidden', flexShrink: 0 }}>
          <img src="/Icon.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.35)' }} />
        </div>
        <span style={{ fontWeight: 800, fontSize: '12px', letterSpacing: '-0.02em', color: '#fff' }}>PichiPie</span>
        <div style={{ flex: 1 }} />
        <div style={{ padding: '4px 12px', borderRadius: '4px', fontSize: '10px', fontWeight: 600, background: 'rgba(255,255,255,0.08)', color: '#fff' }}>Live TV</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', flex: 1, alignContent: 'start' }}>
        {channels.map((ch, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '6px', background: `${ch.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 800, color: ch.color }}>{ch.name[0]}</div>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#fff' }}>{ch.name}</div>
              <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>{ch.cat}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 20 } }
};

export default function Hero() {
  return (
    <section className="hero-premium-single" id="hero">
      {/* Dynamic Background Aurora */}
      <div className="hero-premium-single__aurora" />

      <motion.div 
        className="hero-premium-single__container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Copy & CTA */}
        <div className="hero-premium-single__content-left">
          <motion.div variants={itemVariants} className="hero-premium-single__badge-wrap">
            <div className="hero-premium-single__badge" style={{ background: 'rgba(0, 229, 255, 0.1)', borderColor: 'rgba(0, 229, 255, 0.2)', color: '#00E5FF' }}>
              <span className="hero-premium-single__badge-dot" style={{ boxShadow: '0 0 10px #00E5FF' }} />
              <Tag size={14} weight="fill" />
              100% Free & Ad-Free
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-premium-single__title">
            Flawless Streaming.<br />
            <span className="text-gradient">Any Screen.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-premium-single__subtitle" style={{ maxWidth: '90%' }}>
            Dive into a limitless universe of live TV and movies. Zero ads, zero tracking, and zero subscriptions. Engineered for absolute fluidity on both your TV and your Mobile device.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '24px', marginBottom: '40px' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                Native Server
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                4K HDR Ready
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                No Setup Required
             </div>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-premium-single__actions">
            <motion.a 
              href="https://github.com/pichipieofficial/app-update/releases/latest/download/PichiPie-TV.apk"
              className="hero-premium__btn-primary"
              whileHover={{ scale: 1.04, boxShadow: '0 0 60px rgba(0, 229, 255, 0.4)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            >
              <DownloadSimple size={20} weight="bold" />
              Download APK
            </motion.a>
            <motion.a
              href="#features"
              className="hero-premium__btn-ghost"
              whileHover={{ scale: 1.03, background: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Features
              <ArrowRight size={16} weight="bold" />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column: Visuals (TV + Landscape Mobile) */}
        <motion.div className="hero-premium-single__visuals-right">
          <div className="hero-premium-single__glow" />

          {/* TV Mockup (Background/Center-Right) */}
          <motion.div 
            variants={itemVariants}
            style={{ 
              position: 'absolute', 
              width: '95%', 
              maxWidth: '680px', 
              right: '-5%', 
              top: '10%',
              zIndex: 1,
              filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.5))'
            }}
          >
            <TvMockupRenderer>
              <TvLiveScreen />
            </TvMockupRenderer>
          </motion.div>

          {/* Landscape Mobile Mockup (Foreground/Bottom-Left) */}
          <motion.div 
            variants={itemVariants}
            style={{ 
              position: 'absolute',
              width: '380px',
              height: '175px',
              left: '-10%',
              bottom: '15%',
              zIndex: 2,
              filter: 'drop-shadow(-20px 30px 40px rgba(0,0,0,0.6))'
            }}
          >
            <MobileMockupRenderer>
              <TvLiveScreen />
            </MobileMockupRenderer>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
