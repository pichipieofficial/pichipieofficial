import React from 'react';
import { motion } from 'framer-motion';
import { Radio, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function StandbySlateSection() {
  return (
    <section id="standby" style={{ padding: '70px 16px', position: 'relative' }}>
      <div className="container-custom" style={{ maxWidth: '1000px' }}>
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{
            background: 'rgba(168, 85, 247, 0.12)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            color: '#A855F7',
            fontSize: '12px',
            fontWeight: 800,
            padding: '6px 16px',
            borderRadius: '20px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'inline-block'
          }}>
            Signal Standby Engine
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(26px, 4vw, 44px)',
            fontWeight: 900,
            marginTop: '12px',
            marginBottom: '12px'
          }}>
            TV Broadcast <span className="text-gradient-cyan">Signal Standby Slate</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--color-text-sub)', maxWidth: '650px', margin: '0 auto' }}>
            Replaced obstructive error dialogs and infinite skip loops with a clean broadcast signal standby graphic integrated directly inside the video frame.
          </p>
        </div>

        {/* Live Graphic Mockup of Standby Slate */}
        <div className="glass-card" style={{
          padding: 'clamp(20px, 4vw, 40px)',
          background: 'rgba(11, 15, 28, 0.95)',
          border: '1px solid rgba(168, 85, 247, 0.4)',
          boxShadow: '0 25px 80px rgba(168, 85, 247, 0.2)',
          borderRadius: '24px',
          textAlign: 'center'
        }}>
          
          <div style={{
            maxWidth: '540px',
            margin: '0 auto',
            padding: 'clamp(18px, 4vw, 32px)',
            background: 'rgba(15, 23, 42, 0.9)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)'
          }}>
            {/* Pulsing Signal Icon */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(168, 85, 247, 0.15)',
                border: '1px solid rgba(168, 85, 247, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}
            >
              <Radio size={28} color="#A855F7" />
            </motion.div>

            <h3 style={{ fontSize: 'clamp(18px, 3.5vw, 22px)', fontWeight: 900, color: '#FFFFFF', marginBottom: '8px' }}>
              This Channel is Not Available Right Now
            </h3>

            <p style={{ fontSize: '14px', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '20px' }}>
              Sorry for the inconvenience. Please select another channel using your remote or swipe gesture.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              background: 'rgba(0, 229, 255, 0.1)',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '11px',
              color: '#00E5FF',
              fontWeight: 700,
              maxWidth: '100%'
            }}>
              <CheckCircle2 size={13} /> Zero Obstructive Popups • Auto Reconnect Active
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
