import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Television, Users, Lightning, Globe } from '@phosphor-icons/react';

const stats = [
  { 
    number: 1500, 
    suffix: '+', 
    label: 'Live Channels', 
    icon: <Television size={24} weight="duotone" />,
    color: 'var(--color-primary)'
  },
  { 
    number: 10000, 
    suffix: '+', 
    label: 'Active Users', 
    icon: <Users size={24} weight="duotone" />,
    color: 'var(--color-accent)'
  },
  { 
    number: 4, 
    suffix: 'K', 
    label: 'Max Resolution', 
    icon: <Lightning size={24} weight="duotone" />,
    color: 'var(--color-primary)'
  },
  { 
    number: 200, 
    suffix: '%', 
    label: 'Audio Boost', 
    icon: <Globe size={24} weight="duotone" />,
    color: 'var(--color-accent)'
  },
];

function AnimatedNumber({ target, suffix, inView }) {
  const [current, setCurrent] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!inView) return;
    
    const duration = 1500;
    const startTime = performance.now();
    
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * target));
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [inView, target]);

  return (
    <span>
      {current.toLocaleString()}{suffix}
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18,
    }
  }
};

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section style={{ padding: 'var(--space-10) var(--space-4)', position: 'relative', zIndex: 1 }} ref={ref}>
      <div className="section-container">

        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <span className="section-header__label">By the Numbers</span>
          <h2 className="section-header__title text-gradient-purple">Built for Scale</h2>
          <p className="section-header__description">Powering entertainment for thousands of users across the globe.</p>
        </motion.div>

        <motion.div
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card stat-card"
              whileHover={{ 
                y: -4,
                boxShadow: `0 8px 30px ${stat.color}15`,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
            >
              <div style={{ 
                color: stat.color, 
                marginBottom: 'var(--space-2)',
                opacity: 0.8
              }}>
                {stat.icon}
              </div>
              <div className="stat-card__number" style={{ color: stat.color }}>
                <AnimatedNumber target={stat.number} suffix={stat.suffix} inView={isInView} />
              </div>
              <div className="stat-card__label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
