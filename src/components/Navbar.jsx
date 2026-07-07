import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { DownloadSimple } from '@phosphor-icons/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setScrolled(latest > 40);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 150, damping: 25, delay: 0.5 }}
    >
      <div className="navbar__inner">
        <motion.div 
          className="navbar__logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer' }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <div className="navbar__logo-icon">
            <img src="/Icon.png" alt="PichiPie" style={{ objectFit: 'cover', transform: 'scale(1.35)' }} />
          </div>
          <span className="navbar__logo-text">PichiPie TV</span>
        </motion.div>

        <ul className="navbar__links">
          {[
            { label: 'Features', id: 'features' },
            { label: 'Showcase', id: 'showcase' },
            { label: 'Install', id: 'install' },
          ].map((item) => (
            <motion.li
              key={item.id}
              className="navbar__link"
              onClick={() => scrollTo(item.id)}
              whileHover={{ color: '#EEEEF3' }}
              transition={{ duration: 0.15 }}
            >
              {item.label}
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="https://github.com/pichipieofficial/app-update/releases/latest/download/PichiPie-TV.apk"
          className="navbar__cta"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <DownloadSimple size={16} weight="bold" />
          Download
        </motion.a>
      </div>
    </motion.nav>
  );
}
