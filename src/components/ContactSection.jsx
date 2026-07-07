import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeSimple, ChatTeardropText } from '@phosphor-icons/react';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: '100px var(--space-4)', position: 'relative' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="section-header"
        >
          <span className="section-header__label" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <ChatTeardropText weight="fill" size={14} /> Contact & Feedback
          </span>
          <h2 className="section-header__title">Get in Touch</h2>
          <p className="section-header__subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Have a feature request, found a bug, or just want to say hi? We are always looking for ways to improve PichiPie. Drop us an email anytime!
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}
        >
          <a 
            href="mailto:pichipie.official@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '30px',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = '#00E5FF';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,229,255,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
            }}
          >
            <EnvelopeSimple size={24} color="#00E5FF" />
            pichipie.official@gmail.com
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}
