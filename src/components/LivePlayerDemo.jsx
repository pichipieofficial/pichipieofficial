import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, Settings, Info, LogOut, Tv, Radio, Sparkles, Shield, Monitor } from 'lucide-react';

export default function LivePlayerDemo() {
  const [activeCategory, setActiveCategory] = useState('Sports HD');
  const [activeChannel, setActiveChannel] = useState({ name: 'PichiPie Sports 1 HD', number: '01', epg: 'UEFA Champions League • Live Transmission' });
  const [volumeBoost, setVolumeBoost] = useState(150);

  const channels = [
    { name: 'PichiPie Sports 1 HD', number: '01', category: 'Sports HD', epg: 'UEFA Champions League • Final Live' },
    { name: 'PichiPie Cinema 4K', number: '02', category: 'Movie Vault', epg: 'Cyberpunk 2077: Edgerunners (1080p)' },
    { name: 'PichiPie News 24/7', number: '03', category: 'News Live', epg: 'Global Tech & Cyber Broadcast' },
    { name: 'PichiPie Action Ultra', number: '04', category: 'Sports HD', epg: 'Formula 1 Grand Prix • Live Pitwall' }
  ];

  return (
    <section id="live-demo" style={{ padding: '80px 24px', position: 'relative' }}>
      <div className="container-custom" style={{ maxWidth: '1000px' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{
            background: 'rgba(0, 229, 255, 0.12)',
            border: '1px solid rgba(0, 229, 255, 0.3)',
            color: '#00E5FF',
            fontSize: '12px',
            fontWeight: 800,
            padding: '6px 16px',
            borderRadius: '20px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Interactive Live Experience
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 900,
            marginTop: '12px',
            marginBottom: '12px'
          }}>
            Simulated <span className="text-gradient-cyan">Cyber-Glass Player</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--color-text-sub)' }}>
            Experience the exact interface of PichiPie TV right inside your web browser.
          </p>
        </div>

        {/* Live Player Mockup Frame */}
        <div className="glass-card" style={{
          padding: '24px',
          background: 'rgba(11, 15, 28, 0.9)',
          border: '1px solid rgba(0, 229, 255, 0.3)',
          boxShadow: '0 25px 80px rgba(0, 229, 255, 0.25)',
          borderRadius: '24px'
        }}>
          
          {/* Top Player HUD Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
            paddingBottom: '14px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                background: '#E91E63',
                color: '#FFFFFF',
                fontSize: '11px',
                fontWeight: 900,
                padding: '4px 10px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <Radio size={12} /> LIVE 1080p
              </span>
              <span style={{ fontSize: '14px', fontWeight: 800, color: '#FFFFFF' }}>
                {activeChannel.number} • {activeChannel.name}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '6px 12px',
                borderRadius: '10px',
                fontSize: '12px',
                color: '#00E5FF',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Volume2 size={14} /> Boost: {volumeBoost}%
              </div>
              <Settings size={18} color="#94A3B8" style={{ cursor: 'pointer' }} />
              <Info size={18} color="#94A3B8" style={{ cursor: 'pointer' }} />
              <LogOut size={18} color="#94A3B8" style={{ cursor: 'pointer' }} />
            </div>
          </div>

          {/* Video Screen Simulation Box */}
          <div style={{
            height: '320px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #070913 0%, #111827 100%)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            {/* Animated Cyber Waves */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />

            <div style={{ textAlign: 'center', zIndex: 2 }}>
              <Play size={48} color="#00E5FF" style={{ marginBottom: '12px', filter: 'drop-shadow(0 0 15px #00E5FF)' }} />
              <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>
                {activeChannel.name}
              </h4>
              <p style={{ fontSize: '13px', color: '#94A3B8' }}>{activeChannel.epg}</p>
            </div>

            {/* Bottom Floating EPG Overlay Bar */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              right: '16px',
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(12px)',
              padding: '12px 18px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{ fontSize: '12px', color: '#CBD5E1', fontWeight: 600 }}>
                NOW: {activeChannel.epg}
              </span>
              <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 800 }}>
                ● STREAM OK
              </span>
            </div>
          </div>

          {/* Channel Selector Chips */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: '16px'
          }}>
            {channels.map((ch) => (
              <button
                key={ch.number}
                onClick={() => setActiveChannel(ch)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '12px',
                  border: activeChannel.number === ch.number
                    ? '1px solid #00E5FF'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  background: activeChannel.number === ch.number
                    ? 'rgba(0, 229, 255, 0.2)'
                    : 'rgba(30, 41, 59, 0.6)',
                  color: activeChannel.number === ch.number ? '#FFFFFF' : '#94A3B8',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {ch.number}. {ch.name}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
