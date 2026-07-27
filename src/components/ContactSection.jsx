import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Check, Copy } from 'lucide-react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const devEmail = "pichipie.official@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(devEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{ padding: '90px 24px', position: 'relative' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '20px',
            background: 'rgba(0, 229, 255, 0.1)',
            border: '1px solid rgba(0, 229, 255, 0.3)',
            color: '#00E5FF',
            fontSize: '13px',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            <MessageSquare size={15} /> Contact Developer
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 900,
            marginBottom: '14px'
          }}>
            Get in Touch with <span className="text-gradient-cyan">Dev</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--color-text-sub)', maxWidth: '600px', margin: '0 auto 36px' }}>
            Have a feature request, bug report, stream source inquiry, or want to collaborate? Drop us an email anytime directly to the developer!
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="glass-card"
          style={{
            padding: '36px 28px',
            borderRadius: '24px',
            maxWidth: '620px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(168, 85, 247, 0.2))',
            border: '1px solid rgba(0, 229, 255, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Mail size={30} color="#00E5FF" />
          </div>

          <div>
            <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#94A3B8', fontWeight: 700, marginBottom: '6px' }}>
              Developer Direct Contact
            </div>
            <a
              href={`mailto:${devEmail}`}
              style={{
                fontSize: 'clamp(18px, 3vw, 24px)',
                fontWeight: 800,
                color: '#FFFFFF',
                textDecoration: 'none',
                wordBreak: 'break-all',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#00E5FF'}
              onMouseOut={(e) => e.currentTarget.style.color = '#FFFFFF'}
            >
              {devEmail}
            </a>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}>
            <a
              href={`mailto:${devEmail}`}
              className="btn-primary-gradient"
              style={{
                padding: '12px 26px',
                fontSize: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                borderRadius: '30px'
              }}
            >
              <Send size={16} /> Send Email
            </a>

            <button
              onClick={handleCopy}
              className="btn-glass-secondary"
              style={{
                padding: '12px 24px',
                fontSize: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                borderRadius: '30px'
              }}
            >
              {copied ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
              {copied ? 'Copied to Clipboard!' : 'Copy Email'}
            </button>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

