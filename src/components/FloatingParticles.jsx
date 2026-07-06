import React from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = () => {
  // Generate random particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // percentage of screen width
    y: Math.random() * 100, // initial vertical position percentage
    duration: Math.random() * 15 + 10, // 10s to 25s
    delay: Math.random() * -20, // Negative delay to start immediately at different points
    size: Math.random() * 15 + 10, // 10px to 25px
    type: Math.random() > 0.5 ? '💖' : '✨',
    opacity: Math.random() * 0.5 + 0.2 // 0.2 to 0.7
  }));

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: -1,
      overflow: 'hidden'
    }}>
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            fontSize: `${particle.size}px`,
            opacity: particle.opacity,
            bottom: '-10%' // Start slightly below screen
          }}
          animate={{
            y: [0, -window.innerHeight * 1.5], // Float up past the top
            rotate: [0, Math.random() * 360] // Spin randomly
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {particle.type}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingParticles;
