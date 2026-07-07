import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TvMockupRenderer from './TvMockupRenderer';
import { MagnifyingGlass, Play, Pause, SkipForward, SkipBack, Subtitles } from '@phosphor-icons/react';

/* ── Screen 1: Live TV ── */
const ChannelScreen = () => {
  const categories = ['All', 'Sports', 'News', 'Movies', 'Kids'];
  const channels = [
    { name: 'ESPN HD', cat: 'Sports', color: '#22C55E' },
    { name: 'CNN Int.', cat: 'News', color: '#3B82F6' },
    { name: 'HBO Max', cat: 'Movies', color: '#8B5CF6' },
    { name: 'Cartoon Net', cat: 'Kids', color: '#F59E0B' },
    { name: 'Discovery+', cat: 'Doc', color: '#06B6D4' },
    { name: 'MTV Live', cat: 'Music', color: '#EC4899' },
  ];

  return (
    <div style={{ padding: '16px', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--color-bg-dark)' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '5px', overflow: 'hidden' }}>
            <img src="/Icon.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.35)' }} />
          </div>
          <span style={{ fontWeight: 700, fontSize: '12px', letterSpacing: '-0.02em' }}>PichiPie</span>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '6px', fontSize: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: 'var(--color-text-secondary)' }}>
          <MagnifyingGlass size={10} /> Search
        </div>
      </div>
      <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
        {categories.map((cat, i) => (
          <div key={i} style={{ padding: '4px 12px', borderRadius: '16px', fontSize: '10px', fontWeight: i === 0 ? 600 : 400, background: i === 0 ? 'var(--color-primary)' : 'rgba(255,255,255,0.03)', color: i === 0 ? '#000' : 'var(--color-text-secondary)', border: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.04)' }}>{cat}</div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', flex: 1, alignContent: 'start' }}>
        {channels.map((ch, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.035)', borderRadius: '7px', padding: '8px', display: 'flex', alignItems: 'center', gap: '7px' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '5px', background: `${ch.color}12`, border: `1px solid ${ch.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, color: ch.color }}>{ch.name.substring(0, 2)}</div>
            <div>
              <div style={{ fontSize: '10px', fontWeight: 600 }}>{ch.name}</div>
              <div style={{ fontSize: '8px', color: 'var(--color-text-secondary)' }}>{ch.cat}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Screen 2: Movies ── */
const MovieScreen = () => {
  const movies = [
    { color: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', title: 'Dune: Part Two', year: '2024' },
    { color: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)', title: 'Oppenheimer', year: '2023' },
    { color: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', title: 'Matrix Resurrections', year: '2021' },
    { color: 'linear-gradient(135deg, #8A2387 0%, #E94057 100%)', title: 'Spider-Verse', year: '2023' },
    { color: 'linear-gradient(135deg, #0f0c29 0%, #302b63 100%)', title: 'The Batman', year: '2022' },
  ];

  return (
    <div style={{ padding: '16px', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--color-bg-dark)' }}>
      <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        Trending Movies <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.1)' }} />
      </div>
      <div style={{ display: 'flex', gap: '8px', flex: 1 }}>
        {movies.map((m, i) => (
          <div key={i} style={{ flex: i === 0 ? 1.5 : 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ flex: 1, background: m.color, borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
              {i === 0 && <div style={{ position: 'absolute', bottom: '8px', left: '8px', background: 'rgba(0,0,0,0.6)', padding: '2px 6px', borderRadius: '4px', fontSize: '8px', fontWeight: 700 }}>4K HDR</div>}
            </div>
            <div>
              <div style={{ fontSize: '9px', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.title}</div>
              <div style={{ fontSize: '7px', color: 'var(--color-text-secondary)' }}>{m.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Screen 3: Player ── */
const PlayerScreen = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: '#000', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, #1a2a42 0%, #050a12 100%)', opacity: 0.8 }} />
      
      {/* Fake UI Overlay */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 20%, transparent 70%, rgba(0,0,0,0.8) 100%)' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>Interstellar (2014) • 4K IMAX</div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Scrubber */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '8px', color: 'var(--color-text-secondary)', fontVariantNumeric: 'tabular-nums' }}>01:24:10</span>
            <div style={{ flex: 1, height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '45%', background: 'var(--color-primary)', borderRadius: '2px' }} />
              <div style={{ position: 'absolute', top: '50%', left: '45%', width: '8px', height: '8px', background: '#fff', borderRadius: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 10px rgba(0,229,255,0.5)' }} />
            </div>
            <span style={{ fontSize: '8px', color: 'var(--color-text-secondary)', fontVariantNumeric: 'tabular-nums' }}>02:49:00</span>
          </div>
          
          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
            <Subtitles size={12} color="rgba(255,255,255,0.6)" />
            <SkipBack size={14} weight="fill" color="#fff" />
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Pause size={14} weight="fill" color="#000" />
            </div>
            <SkipForward size={14} weight="fill" color="#fff" />
            <div style={{ width: '24px', height: '14px', borderRadius: '3px', border: '1px solid rgba(255,255,255,0.4)', fontSize: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>CC</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function HorizontalShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Live Channels', 'Movie Library', 'ExoPlayer Engine'];

  return (
    <section id="showcase" style={{ padding: '120px var(--space-4)', position: 'relative', zIndex: 1 }}>
      <div className="section-container" style={{ maxWidth: '900px' }}>
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          style={{ marginBottom: '40px' }}
        >
          <span className="section-header__label">Showcase</span>
          <h2 className="section-header__title text-gradient">The Ultimate OS</h2>
          <p className="section-header__description">
            A fluid, immersive interface designed natively for both Touch and the 10-foot remote experience.
          </p>
        </motion.div>

        {/* Tab Controls */}
        <motion.div 
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ 
            display: 'inline-flex', padding: '6px', background: 'rgba(255,255,255,0.03)', 
            borderRadius: 'var(--radius-full)', border: '1px solid rgba(255,255,255,0.08)',
            position: 'relative'
          }}>
            {tabs.map((tab, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: '10px 24px', fontSize: '0.9rem', fontWeight: 600,
                  color: activeTab === idx ? '#fff' : 'var(--color-text-secondary)',
                  cursor: 'pointer', position: 'relative', zIndex: 2,
                  transition: 'color 0.2s ease'
                }}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    style={{
                      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                      background: 'rgba(0, 229, 255, 0.15)',
                      border: '1px solid rgba(0, 229, 255, 0.3)',
                      borderRadius: 'var(--radius-full)',
                      zIndex: -1,
                      boxShadow: '0 0 20px rgba(0, 229, 255, 0.1)'
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {tab}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interactive TV Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 60, damping: 18 }}
        >
          <TvMockupRenderer>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                style={{ width: '100%', height: '100%' }}
              >
                {activeTab === 0 && <ChannelScreen />}
                {activeTab === 1 && <MovieScreen />}
                {activeTab === 2 && <PlayerScreen />}
              </motion.div>
            </AnimatePresence>
          </TvMockupRenderer>
        </motion.div>

      </div>
    </section>
  );
}
