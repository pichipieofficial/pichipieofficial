import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Film, Star, Play, Sparkles, LayoutGrid, Check } from 'lucide-react';

export default function MovieVaultSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const movies = [
    { title: 'Cyberpunk 2077: Edgerunners', rating: '4.9', quality: '4K', type: 'SERIES', year: '2026', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&q=80' },
    { title: 'Avatar: The Way of Water', rating: '4.8', quality: '1080p', type: 'MOVIE', year: '2026', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&q=80' },
    { title: 'Interstellar: Beyond Time', rating: '5.0', quality: '4K', type: 'MOVIE', year: '2025', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80' },
    { title: 'Arcane: League of Legends', rating: '4.9', quality: '1080p', type: 'SERIES', year: '2026', image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=500&q=80' },
    { title: 'Blade Runner 2049', rating: '4.7', quality: '4K', type: 'MOVIE', year: '2025', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80' },
    { title: 'Dune: Part Two', rating: '4.9', quality: '4K', type: 'MOVIE', year: '2026', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&q=80' }
  ];

  return (
    <section id="vault" style={{ padding: '80px 24px', background: 'rgba(7, 9, 19, 0.7)', position: 'relative' }}>
      <div className="container-custom">
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{
            background: 'rgba(233, 30, 99, 0.12)',
            border: '1px solid rgba(233, 30, 99, 0.3)',
            color: '#E91E63',
            fontSize: '12px',
            fontWeight: 800,
            padding: '6px 16px',
            borderRadius: '20px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Cinematic Engine
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 900,
            marginTop: '12px',
            marginBottom: '12px'
          }}>
            5–8 Column <span className="text-gradient-pink">Adaptive Movie Vault</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--color-text-sub)', maxWidth: '650px', margin: '0 auto' }}>
            Calculates display width dynamically to fit 5 to 8 cards per row with 100% full poster fitCenter scaling, 4K/1080p badges, and 2-line title readability.
          </p>
        </div>

        {/* Interactive Poster Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          {movies.map((movie, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="glass-card"
              style={{
                padding: '12px',
                background: 'rgba(15, 23, 42, 0.8)',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {/* Poster Image Frame */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '240px',
                borderRadius: '14px',
                overflow: 'hidden',
                marginBottom: '12px'
              }}>
                <img
                  src={movie.image}
                  alt={movie.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                
                {/* Quality Badge */}
                <span style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(8px)',
                  color: '#00E5FF',
                  fontSize: '10px',
                  fontWeight: 900,
                  padding: '3px 8px',
                  borderRadius: '6px',
                  border: '1px solid rgba(0, 229, 255, 0.3)'
                }}>
                  {movie.quality}
                </span>

                {/* Series / Movie Tag */}
                <span style={{
                  position: 'absolute',
                  top: '8px',
                  left: '8px',
                  background: 'rgba(233, 30, 99, 0.85)',
                  backdropFilter: 'blur(8px)',
                  color: '#FFFFFF',
                  fontSize: '9px',
                  fontWeight: 900,
                  padding: '3px 8px',
                  borderRadius: '6px'
                }}>
                  {movie.type}
                </span>
              </div>

              {/* Movie Title & Info */}
              <h4 style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.3,
                marginBottom: '6px',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                height: '36px'
              }}>
                {movie.title}
              </h4>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: '#94A3B8' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FBBF24', fontWeight: 700 }}>
                  <Star size={12} fill="#FBBF24" /> {movie.rating}
                </span>
                <span>{movie.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
