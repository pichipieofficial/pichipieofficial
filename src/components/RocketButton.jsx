import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RocketButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRocketLaunch = () => {
    if (isLaunching) return;
    setIsLaunching(true);

    // Fiery rocket launch particle burst
    confetti({
      particleCount: 70,
      angle: 90,
      spread: 60,
      origin: { x: 0.9, y: 0.9 },
      colors: ['#FF4500', '#FF8C00', '#FFD700', '#00E5FF']
    });

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Reset rocket position after launch animation
    setTimeout(() => {
      setIsLaunching(false);
    }, 1200);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 999
        }}
      >
        <motion.button
          onClick={handleRocketLaunch}
          animate={isLaunching ? {
            y: -900,
            scale: 1.5,
            opacity: [1, 1, 0]
          } : {
            y: [0, -4, 0]
          }}
          transition={isLaunching ? {
            duration: 1,
            ease: 'easeIn'
          } : {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.8) 0%, rgba(0, 229, 255, 0.8) 100%)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: isLaunching
              ? '0 0 50px #FF4500, 0 0 100px #FF8C00'
              : '0 10px 30px rgba(0, 229, 255, 0.4)',
            backdropFilter: 'blur(12px)',
            outline: 'none'
          }}
          title="Rocket Launch Back to Top 🚀"
        >
          <Rocket size={26} style={{ transform: 'rotate(-45deg)' }} />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
