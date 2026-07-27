import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Tv, Radio, Monitor, ShieldCheck, Zap, Check } from 'lucide-react';

export default function FeatureShowcase() {
  const features = [
    {
      icon: <Tv size={32} color="#00E5FF" />,
      tag: "LIVE BROADCAST",
      title: "Cyber-Glass TV Player & Drawer",
      description: "400dp glassmorphic channel drawer with 60dp navigation rail, active playlist status (● ONLINE), live search bar, and category filters.",
      highlights: ["Top-Right Quick Action HUD (Settings, Info, Exit)", "54dp Glowing Active Indicator Channel Cards", "Instant EPG & Stream Quality Status"]
    },
    {
      icon: <LayoutGrid size={32} color="#E91E63" />,
      tag: "CINEMATIC VAULT",
      title: "5–8 Column Movie Grid",
      description: "Dynamically calculates display width to fit 5 to 8 movie cards per row. Zero vertical gaps, 100% full poster fitCenter scaling, and 2-line title display.",
      highlights: ["1080p / 720p / 4K Resolution Badges", "Movie & Series Tags", "Instant 1st Item Remote Focus"]
    },
    {
      icon: <Radio size={32} color="#A855F7" />,
      tag: "SIGNAL STANDBY",
      title: "TV Broadcast Signal Standby",
      description: "Replaced obstructive error popups and infinite skip loops with a polite broadcast signal standby graphic directly inside the video frame.",
      highlights: ["Polite Copy ('Channel Not Available Right Now')", "Zero Error Dialogs or Skip Loops", "1.8s Fast Dead Stream Detection"]
    },
    {
      icon: <Monitor size={32} color="#10B981" />,
      tag: "1-CLICK FOCUS",
      title: "Auto-Centered & 1st Remote Focus",
      description: "Perfect vertical centering across all TV & mobile screens. First card automatically receives focus on launch for 1-click remote control execution.",
      highlights: ["Instant Remote Highlight on Launch", "Zero Bottom Screen Gaps", "Unclipped Neon Focus Outlines"]
    },
    {
      icon: <ShieldCheck size={32} color="#F59E0B" />,
      tag: "PRODUCTION SECURITY",
      title: "RSA 2048-bit Keystore Signed",
      description: "Officially signed with a production release keystore valid through 2053. Guarantees tamper protection and clean seamless OTA updates.",
      highlights: ["Valid Through December 2053", "Anti-Spoofing & Malware Protection", "Store & Smart TV Compliant"]
    },
    {
      icon: <Zap size={32} color="#EC4899" />,
      tag: "MEDIA3 ENGINE",
      title: "Ultra-Fast Media3 Engine",
      description: "Built on AndroidX Media3 ExoPlayer with native FFmpeg audio boost, dynamic hardware decoders, and zero ads or data tracking.",
      highlights: ["100% Free & Ad-Free", "200% Audio Volume Booster", "Dynamic Hardware/Software Decoders"]
    }
  ];

  return (
    <section style={{ padding: '70px 16px', position: 'relative' }}>
      <div className="container-custom">
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(26px, 4vw, 48px)',
            fontWeight: 900,
            marginBottom: '14px'
          }}>
            Engineered for <span className="text-gradient-cyan">Maximum Performance</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--color-text-sub)', maxWidth: '600px', margin: '0 auto' }}>
            Built with Media3 ExoPlayer, custom native decoders, and a ground-up Cyber-Glass design system.
          </p>
        </div>

        {/* Responsive Feature Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '20px'
        }}>
          {features.map((item, idx) => (
            <motion.div
              key={item.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card"
              style={{
                padding: 'clamp(20px, 4vw, 30px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    padding: '10px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    {item.icon}
                  </div>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    color: 'var(--color-primary)',
                    background: 'rgba(0, 229, 255, 0.1)',
                    padding: '5px 10px',
                    borderRadius: '20px',
                    border: '1px solid rgba(0, 229, 255, 0.2)'
                  }}>
                    {item.tag}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(18px, 3vw, 21px)',
                  fontWeight: 800,
                  marginBottom: '10px',
                  lineHeight: 1.3
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: 'var(--color-text-sub)',
                  lineHeight: 1.6,
                  marginBottom: '18px'
                }}>
                  {item.description}
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '14px' }}>
                {item.highlights.map((point, pIdx) => (
                  <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', fontSize: '12px', color: '#CBD5E1' }}>
                    <Check size={14} color="#00E5FF" style={{ flexShrink: 0 }} /> <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
