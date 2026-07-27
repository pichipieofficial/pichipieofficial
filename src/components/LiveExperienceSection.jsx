import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tv, Radio, Zap, Volume2, ShieldCheck, Activity, Wifi, Play, Sparkles, Check } from 'lucide-react';

export default function LiveExperienceSection() {
  const [activeTab, setActiveTab] = useState('sports');

  const liveCategories = [
    {
      id: 'sports',
      name: '🔥 Live Sports HD',
      channel: 'PichiPie Sports 1 Ultra 4K',
      epg: 'UEFA Champions League • Live Final Transmission',
      fps: '60 FPS',
      bitrate: '8.4 Mbps',
      codec: 'HEVC / H.265'
    },
    {
      id: 'movies',
      name: '🎬 Cinema & Movies 24/7',
      channel: 'PichiPie Premier Cinema HD',
      epg: 'Cyberpunk 2077: Edgerunners (Dolby Atmos)',
      fps: '24 FPS',
      bitrate: '12.1 Mbps',
      codec: 'AV1 4K HDR'
    },
    {
      id: 'news',
      name: '📰 Global News & Info',
      channel: 'PichiPie News 24/7',
      epg: 'World Tech Summit & Cyber Intelligence Live',
      fps: '60 FPS',
      bitrate: '5.2 Mbps',
      codec: 'H.264 / AAC'
    }
  ];

  const currentCategory = liveCategories.find(c => c.id === activeTab) || liveCategories[0];

  return (
    <section id="features" style={{ padding: '90px 24px', background: 'rgba(9, 13, 25, 0.75)', position: 'relative' }}>
      <div className="container-custom" style={{ maxWidth: '1080px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
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
            Next-Gen Live Broadcast Engine
          </span>
          
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(30px, 4.5vw, 50px)',
            fontWeight: 900,
            marginTop: '14px',
            marginBottom: '14px'
          }}>
            Ultra-Low Latency <span className="text-gradient-cyan">Live TV Hub</span>
          </h2>

          <p style={{ fontSize: '16px', color: 'var(--color-text-sub)', maxWidth: '700px', margin: '0 auto' }}>
            Built with Media3 ExoPlayer, 15-second single stream load budget, and a 400dp Cyber-Glass side channel drawer.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '36px'
        }}>
          {liveCategories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '12px 24px',
                borderRadius: '16px',
                border: activeTab === tab.id
                  ? '1px solid #00E5FF'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                background: activeTab === tab.id
                  ? 'linear-gradient(135deg, rgba(0, 229, 255, 0.2) 0%, rgba(233, 30, 99, 0.2) 100%)'
                  : 'rgba(15, 23, 42, 0.6)',
                color: activeTab === tab.id ? '#FFFFFF' : '#94A3B8',
                fontSize: '14px',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.25s',
                boxShadow: activeTab === tab.id ? '0 0 25px rgba(0, 229, 255, 0.3)' : 'none'
              }}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Main Live Broadcast Showcase Console */}
        <div className="glass-card" style={{
          padding: '36px',
          background: 'rgba(11, 15, 28, 0.95)',
          border: '1px solid rgba(0, 229, 255, 0.3)',
          boxShadow: '0 30px 90px rgba(0, 229, 255, 0.25)',
          borderRadius: '28px',
          marginBottom: '40px'
        }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}>
            
            {/* Left: Stream Telemetry Stats */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                color: '#10B981',
                padding: '4px 12px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 800,
                marginBottom: '16px'
              }}>
                <Radio size={14} className="pulse-icon" /> ONLINE • 0% PACKET LOSS
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#FFFFFF', marginBottom: '8px' }}>
                {currentCategory.channel}
              </h3>

              <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '24px' }}>
                {currentCategory.epg}
              </p>

              {/* Telemetry Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginBottom: '24px'
              }}>
                <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block' }}>FRAME RATE</span>
                  <strong style={{ fontSize: '16px', color: '#00E5FF' }}>{currentCategory.fps}</strong>
                </div>

                <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block' }}>BITRATE</span>
                  <strong style={{ fontSize: '16px', color: '#E91E63' }}>{currentCategory.bitrate}</strong>
                </div>

                <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block' }}>CODEC</span>
                  <strong style={{ fontSize: '16px', color: '#A855F7' }}>{currentCategory.codec}</strong>
                </div>

                <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block' }}>STREAM LATENCY</span>
                  <strong style={{ fontSize: '16px', color: '#10B981' }}>1.2 Seconds</strong>
                </div>
              </div>
            </div>

            {/* Right: Visual Signal HUD Frame */}
            <div style={{
              height: '280px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #070913 0%, #0F172A 100%)',
              border: '1px solid rgba(0, 229, 255, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '20px'
            }}>
              {/* HUD Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#00E5FF', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Activity size={16} /> SIGNAL STRENGTH: 100%
                </span>
                <span style={{ fontSize: '11px', color: '#94A3B8', background: 'rgba(255, 255, 255, 0.08)', padding: '4px 10px', borderRadius: '6px' }}>
                  BUFFER: 15.0s
                </span>
              </div>

              {/* Signal Equalizer Animation Bars */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                gap: '8px',
                height: '100px'
              }}>
                {[60, 90, 45, 100, 75, 95, 55, 85, 70, 90, 65, 80].map((val, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [`${val * 0.4}%`, `${val}%`, `${val * 0.5}%`] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
                    style={{
                      width: '8px',
                      borderRadius: '4px',
                      background: i % 2 === 0 ? '#00E5FF' : '#E91E63'
                    }}
                  />
                ))}
              </div>

              {/* HUD Footer */}
              <div style={{
                background: 'rgba(15, 23, 42, 0.8)',
                padding: '10px 14px',
                borderRadius: '10px',
                fontSize: '12px',
                color: '#CBD5E1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span>ExoPlayer Media3 Engine • Audio Boost 200%</span>
                <Wifi size={14} color="#10B981" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
