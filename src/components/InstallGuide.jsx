import React from 'react';
import { motion } from 'framer-motion';
import { Download, Tv, Smartphone, ShieldCheck, Globe } from 'lucide-react';

export default function InstallGuide({ onDownloadClick }) {
  return (
    <section id="guide" style={{ padding: '80px 24px', background: 'rgba(9, 13, 22, 0.6)', position: 'relative' }}>
      <div className="container-custom" style={{ maxWidth: '1000px' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 900,
            marginBottom: '12px'
          }}>
            How to Install <span className="text-gradient-cyan">PichiPie TV APK</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--color-text-sub)' }}>
            Follow these simple steps to install v1.0.2 on your Smart TV or Mobile device.
          </p>
        </div>

        {/* 2 Column Guide Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          
          {/* Card 1: Android TV & Smart TV */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ padding: '32px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ padding: '12px', background: 'rgba(56, 189, 248, 0.15)', borderRadius: '14px', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                <Tv size={28} color="#00E5FF" />
              </div>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800 }}>Android TV / Fire TV</h3>
                <span style={{ fontSize: '12px', color: 'var(--color-text-sub)' }}>Smart TV Installation</span>
              </div>
            </div>

            <ol style={{ paddingLeft: '20px', color: '#CBD5E1', fontSize: '14px', lineHeight: 1.8, marginBottom: '24px' }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>Method A (TV Web Browser)</strong>: Open <em>Silk</em>, <em>Chrome</em>, or <em>TV Browser</em> on your TV, go to <strong style={{ color: '#00E5FF' }}>https://pichipieofficial.vercel.app/</strong>, click <strong>Download APK</strong> directly on your TV, and install!
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Method B (USB Drive)</strong>: Download <strong>PichiPie-TV.apk</strong> to your PC/USB, insert the drive into your TV, open TV <em>File Manager</em>, select the APK, and install.
              </li>
              <li>
                <strong>Method C (Send Files to TV App)</strong>: Download the APK to your phone and send it to your Smart TV using the <em>Send Files to TV</em> app.
              </li>
            </ol>

            <button
              onClick={onDownloadClick}
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
            style={{ padding: '32px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ padding: '12px', background: 'rgba(236, 72, 153, 0.15)', borderRadius: '14px', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                <Smartphone size={28} color="#EC4899" />
              </div>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800 }}>Mobile &amp; Tablet</h3>
                <span style={{ fontSize: '12px', color: 'var(--color-text-sub)' }}>Android Smartphone Installation</span>
              </div>
            </div>

            <ol style={{ paddingLeft: '20px', color: '#CBD5E1', fontSize: '14px', lineHeight: 1.8, marginBottom: '24px' }}>
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
              onClick={onDownloadClick}
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
          marginTop: '40px',
          padding: '20px 24px',
          borderRadius: '18px',
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
          <ShieldCheck size={28} color="#10B981" />
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#10B981', marginBottom: '2px' }}>
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
