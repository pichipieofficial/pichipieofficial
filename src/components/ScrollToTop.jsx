import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretUp } from '@phosphor-icons/react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 229, 255, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '40px',
            right: '40px',
            zIndex: 1000,
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(12, 16, 36, 0.8)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(0, 229, 255, 0.4)',
            color: '#00E5FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
          }}
        >
          <CaretUp size={28} weight="bold" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
