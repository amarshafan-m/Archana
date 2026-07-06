import React from 'react'
import { motion } from 'framer-motion'

function ScreenGallery({ onYes, onNo }) {
  const photos = [
    { src: '/photos/photo1.JPG', alt: 'Cute moment 1', caption: 'Memories ✨' },
    { src: '/photos/Photo 2.jpg', alt: 'Cute moment 2', caption: 'Us 💖' },
    { src: '/photos/photo3.JPG', alt: 'Cute moment 3', caption: 'Smiles 😊' },
    { src: '/photos/photo4.jpg', alt: 'Cute moment 4', caption: 'Adventures 🌟' },
    { src: '/photos/photo5.JPG', alt: 'Cute moment 5', caption: 'Forever & Always 🎀' },
    { src: '/photos/photo6.jpg', alt: 'Cute moment 6', caption: 'Love this! 📸' },
    { src: '/photos/photo7.jpg', alt: 'Cute moment 7', caption: 'Happy days ☀️' },
    { src: '/photos/photo8.jpg', alt: 'Cute moment 8', caption: 'Together 💞' },
    { src: '/photos/photo9.jpg', alt: 'Cute moment 9', caption: 'Perfect moment ✨' },
    { src: '/photos/photo10.jpg', alt: 'Cute moment 10', caption: 'Always 🥰' },
  ]

  return (
    <div style={{ textAlign: 'center', width: '100%' }}>
      <h1>Look at us! 📸</h1>
      
      <motion.div 
        className="gallery"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
      >
        {photos.map((photo, index) => (
          <motion.div 
            key={index} 
            className="polaroid"
            variants={{
              hidden: { opacity: 0, y: -50, rotate: (Math.random() - 0.5) * 40 },
              visible: { 
                opacity: 1, 
                y: 0, 
                rotate: (Math.random() - 0.5) * 10,
                transition: { type: 'spring', damping: 12, stiffness: 100 }
              }
            }}
          >
            <img 
              src={photo.src} 
              alt={photo.alt} 
              style={{ objectPosition: 'center 20%' }}
              onError={(e) => { e.target.src = 'https://via.placeholder.com/250/ffd6e0/5d4a66?text=Your+Photo+Here' }}
            />
            <div className="caption">{photo.caption}</div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ marginTop: '2rem', padding: '2rem', background: 'rgba(255,255,255,0.5)', borderRadius: '20px', backdropFilter: 'blur(5px)' }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#5d4a66' }}>Did I make you happy, Arya? 🥰</h2>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <button className="btn-yes" onClick={onYes}>Yes, so much! ✨</button>
          <button className="btn-no" onClick={onNo}>No 😔</button>
        </div>
      </div>
    </div>
  )
}

export default ScreenGallery
