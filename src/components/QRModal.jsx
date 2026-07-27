import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, QrCode } from 'lucide-react';

export default function QRModal({ isOpen, onClose, apkUrl }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(apkUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // QR Code generator using quickchart.io SVG API
  const qrImageUrl = `https://quickchart.io/qr?text=${encodeURIComponent(apkUrl)}&size=240&margin=1&dark=000000&light=ffffff`;

  return (
    <AnimatePresence>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(5, 7, 15, 0.85)',
        backdropFilter: 'blur(16px)'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="glass-card"
          style={{
            maxWidth: '420px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: 'clamp(20px, 4vw, 32px)',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>

          <QrCode size={32} color="#38BDF8" style={{ marginBottom: '10px' }} />

          <h3 style={{ fontSize: 'clamp(18px, 3.5vw, 22px)', fontWeight: 800, marginBottom: '6px' }}>
            Scan to Download APK
          </h3>

          <p style={{ fontSize: '13px', color: 'var(--color-text-sub)', marginBottom: '20px' }}>
            Scan this QR code with your mobile camera to instantly download <strong>PichiPie TV v1.0.2</strong>.
          </p>

          {/* QR Container */}
          <div style={{
            background: '#FFFFFF',
            padding: '14px',
            borderRadius: '18px',
            display: 'inline-block',
            marginBottom: '20px',
            boxShadow: '0 10px 30px rgba(56, 189, 248, 0.3)'
          }}>
            <img
              src={qrImageUrl}
              alt="PichiPie TV APK Download QR Code"
              style={{ width: '180px', height: '180px', maxWidth: '100%', display: 'block' }}
            />
          </div>

          {/* Direct Copy Button */}
          <button
            onClick={handleCopy}
            className="btn-glass-secondary"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}
          >
            {copied ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
            {copied ? "Link Copied!" : "Copy Direct Download Link"}
          </button>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
