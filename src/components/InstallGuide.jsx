import React from 'react';
import { motion } from 'framer-motion';
import { Download, Tv, Smartphone, ShieldCheck, Globe } from 'lucide-react';

export default function InstallGuide({ onDownloadClick }) {
  return (
    <section id="guide" style={{ padding: '70px 16px', background: 'rgba(9, 13, 22, 0.6)', position: 'relative' }}>
      <div className="container-custom" style={{ maxWidth: '1000px' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(26px, 4vw, 44px)',
            fontWeight: 900,
            marginBottom: '12px'
          }}>
            How to Install <span className="text-gradient-cyan">PichiPie TV APK</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--color-text-sub)' }}>
            Follow these simple steps to install v1.0.2 on your Smart TV or Mobile device.
          </p>
        </div>

        {/* 2 Column Responsive Guide Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '20px'
        }}>
          
          {/* Card 1: Android TV & Smart TV */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ padding: 'clamp(20px, 4vw, 32px)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <div style={{ padding: '10px', background: 'rgba(56, 189, 248, 0.15)', borderRadius: '14px', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                <Tv size={26} color="#00E5FF" />
              </div>
              <div>
                <h3 style={{ fontSize: 'clamp(18px, 3vw, 20px)', fontWeight: 800 }}>Android TV / Fire TV</h3>
                <span style={{ fontSize: '12px', color: 'var(--color-text-sub)' }}>Smart TV Installation</span>
              </div>
            </div>

            <ol style={{ paddingLeft: '18px', color: '#CBD5E1', fontSize: '14px', lineHeight: 1.7, marginBottom: '22px' }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>Method A (TV Web Browser)</strong>: Open <em>Silk</em>, <em>Chrome</em>, or <em>TV Browser</em> on your TV, go to <strong style={{ color: '#00E5FF', wordBreak: 'break-all' }}>https://pichipieofficial.vercel.app/</strong>, click <strong>Download APK</strong> directly on your TV, and install!
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Method B (USB Drive)</strong>: Download <strong>PichiPie-TV.apk</strong> to your PC/USB, insert the drive into your TV, open TV <em>File Manager</em>, select the APK, and install.
              </li>
              <li>
                <strong>Method C (Send Files to TV App)</strong>: Download the APK to your phone and send it to your Smart TV using the <em>Send Files to TV</em> app.
              </li>
            </ol>

            <button
              onClick={(e) => onDownloadClick(e)}
              className="btn-primary-gradient"
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <Download size={18} /> Download TV APK (v1.0.2)
            </button>
          </motion.div>

          {/* Card 2: Mobile & Tablet */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ padding: 'clamp(20px, 4vw, 32px)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <div style={{ padding: '10px', background: 'rgba(236, 72, 153, 0.15)', borderRadius: '14px', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                <Smartphone size={26} color="#EC4899" />
              </div>
              <div>
                <h3 style={{ fontSize: 'clamp(18px, 3vw, 20px)', fontWeight: 800 }}>Mobile &amp; Tablet</h3>
                <span style={{ fontSize: '12px', color: 'var(--color-text-sub)' }}>Android Smartphone Installation</span>
              </div>
            </div>

            <ol style={{ paddingLeft: '18px', color: '#CBD5E1', fontSize: '14px', lineHeight: 1.7, marginBottom: '22px' }}>
              <li style={{ marginBottom: '10px' }}>
                Click <strong>Download APK</strong> directly on your mobile web browser.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Allow <em>Install from Unknown Sources</em> in Android system settings if prompted.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Open the downloaded file in your browser downloads or File Manager.
              </li>
              <li>
                Tap <strong>Install</strong> to launch PichiPie TV immediately.
              </li>
            </ol>

            <button
              onClick={(e) => onDownloadClick(e)}
              className="btn-glass-secondary"
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <Download size={18} /> Direct Mobile Download
            </button>
          </motion.div>

        </div>

        {/* Security Notice Banner */}
        <div style={{
          marginTop: '32px',
          padding: '16px 20px',
          borderRadius: '18px',
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          flexWrap: 'wrap'
        }}>
          <ShieldCheck size={26} color="#10B981" style={{ flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: '220px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#10B981', marginBottom: '2px' }}>
              Official Production Keystore Signed
            </h4>
            <p style={{ fontSize: '13px', color: '#CBD5E1' }}>
              PichiPie TV v1.0.2 is officially signed with an RSA 2048-bit production keystore valid through 2053. Clean, malware-free, and safe for all devices.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
