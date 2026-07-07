import React from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import { Play, ShieldCheck, GameController, Hash, Subtitles, List, MonitorPlay, FilmStrip } from '@phosphor-icons/react';

const mockups = [
  {
    type: 'movie',
    title: 'Movie Library',
    accent: '#D500F9',
    content: (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        <div style={{ height: '60px', background: 'linear-gradient(45deg, #1e3c72, #2a5298)', borderRadius: '6px' }} />
        <div style={{ height: '60px', background: 'linear-gradient(45deg, #ff9966, #ff5e62)', borderRadius: '6px' }} />
        <div style={{ height: '60px', background: 'linear-gradient(45deg, #11998e, #38ef7d)', borderRadius: '6px' }} />
        <div style={{ height: '60px', background: 'linear-gradient(45deg, #8A2387, #E94057)', borderRadius: '6px' }} />
      </div>
    )
  },
  {
    type: 'player',
    title: 'ExoPlayer 3',
    accent: '#00E5FF',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%', justifyContent: 'flex-end', paddingBottom: '10px' }}>
        <div style={{ height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ width: '40%', height: '100%', background: '#00E5FF' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          <Play size={16} weight="fill" color="#fff" />
          <Subtitles size={16} color="rgba(255,255,255,0.6)" />
        </div>
      </div>
    )
  },
  {
    type: 'channels',
    title: 'EPG Guide',
    accent: '#22C55E',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: '20px', height: '16px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
            <div style={{ flex: 1, height: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
          </div>
        ))}
      </div>
    )
  },
  {
    type: 'settings',
    title: 'Zero Tracking',
    accent: '#F59E0B',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ width: '60%', height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }} />
            <div style={{ width: '24px', height: '12px', background: i === 1 ? '#F59E0B' : 'rgba(255,255,255,0.1)', borderRadius: '6px', position: 'relative' }}>
              <div style={{ width: '8px', height: '8px', background: '#fff', borderRadius: '50%', position: 'absolute', top: '2px', left: i === 1 ? '14px' : '2px' }} />
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    type: 'code',
    title: 'XMLTV Parser',
    accent: '#EC4899',
    content: (
      <div style={{ fontFamily: 'monospace', fontSize: '8px', color: '#EC4899', lineHeight: 1.6, opacity: 0.8 }}>
        <div>{'<channel id="1">'}</div>
        <div style={{ paddingLeft: '10px' }}>{'<display-name>Sports</display-name>'}</div>
        <div>{'</channel>'}</div>
        <div>{'<programme start="1200">'}</div>
        <div style={{ paddingLeft: '10px' }}>{'<title>Live Match</title>'}</div>
        <div>{'</programme>'}</div>
      </div>
    )
  }
];

// Duplicate for infinite scroll
const marqueeItems = [...mockups, ...mockups];

export default function ScreenshotsCarousel() {
  return (
    <section style={{ padding: '140px 0', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      
      <div className="section-container" style={{ marginBottom: '60px' }}>
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        >
          <span className="section-header__label">Experience</span>
          <h2 className="section-header__title">
            Every Detail, <span className="text-gradient">Refined</span>
          </h2>
          <p className="section-header__description">
            A cohesive design language applied across hundreds of components.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container with Perspective */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        perspective: '1200px',
        transformStyle: 'preserve-3d'
      }}>
        
        {/* Top and Bottom Fades */}
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '20vw', background: 'linear-gradient(to right, var(--color-bg), transparent)', zIndex: 10, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '20vw', background: 'linear-gradient(to left, var(--color-bg), transparent)', zIndex: 10, pointerEvents: 'none' }} />

        {/* The Scrolling Track */}
        <motion.div
          animate={{ x: [0, -1400] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ 
            display: 'flex', 
            gap: '30px', 
            width: 'max-content',
            padding: '40px 0',
            transform: 'rotateX(15deg) rotateY(-5deg) rotateZ(2deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {marqueeItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ 
                y: -10, scale: 1.05, 
                boxShadow: `0 30px 60px rgba(0,0,0,0.6), 0 0 40px ${item.accent}30`,
                borderColor: `${item.accent}50`,
                transition: { type: 'spring', stiffness: 400, damping: 25 }
              }}
              style={{
                width: '260px',
                height: '320px',
                background: 'rgba(12, 16, 36, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '24px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top Accent Glow */}
              <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px', background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`, opacity: 0.8, boxShadow: `0 0 20px ${item.accent}` }} />
              
              <div style={{ 
                width: '32px', height: '32px', borderRadius: '10px', 
                background: `${item.accent}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px'
              }}>
                {item.type === 'movie' && <FilmStrip size={18} color={item.accent} weight="duotone" />}
                {item.type === 'player' && <MonitorPlay size={18} color={item.accent} weight="duotone" />}
                {item.type === 'channels' && <List size={18} color={item.accent} weight="duotone" />}
                {item.type === 'settings' && <ShieldCheck size={18} color={item.accent} weight="duotone" />}
                {item.type === 'code' && <Hash size={18} color={item.accent} weight="duotone" />}
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '24px' }}>{item.title}</h3>

              {/* The Fake UI Container */}
              <div style={{ 
                flex: 1, background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '16px',
                border: '1px solid rgba(255,255,255,0.03)', overflow: 'hidden'
              }}>
                {item.content}
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
