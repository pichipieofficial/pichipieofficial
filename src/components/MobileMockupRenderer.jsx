import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function MobileMockupRenderer({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['4deg', '-4deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-4deg', '4deg']);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1200px',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <motion.div 
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
      >
        <div className="mobile-mockup__bezel">
          {/* Dynamic gloss reflection */}
          <motion.div 
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 40%)',
              zIndex: 10,
              pointerEvents: 'none',
              borderRadius: 'inherit'
            }}
          />
          <div className="mobile-mockup__screen">
            {children}
          </div>
          {/* Top Notch/Dynamic Island */}
          <div className="mobile-mockup__notch" />
        </div>
      </motion.div>
    </motion.div>
  );
}
