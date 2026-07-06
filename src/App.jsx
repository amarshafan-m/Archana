import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScreenQuestion1 from './components/ScreenQuestion1'
import ScreenGallery from './components/ScreenGallery'
import ScreenHateYou from './components/ScreenHateYou'
import ScreenCamera from './components/ScreenCamera'
import ScreenWhatsApp from './components/ScreenWhatsApp'
import FloatingParticles from './components/FloatingParticles'

function App() {
  const [currentScreen, setCurrentScreen] = useState('question1')
  const [photoSrc, setPhotoSrc] = useState(null)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  // Fast preload: Only block on the hero image so the site loads instantly.
  // The gallery images will download in the background.
  useEffect(() => {
    const heroImg = new Image()
    heroImg.onload = () => {
      setLoadingProgress(100)
      setTimeout(() => setImagesLoaded(true), 300)
    }
    heroImg.onerror = () => setImagesLoaded(true)
    heroImg.src = '/photos/hero.jpg'

    // Silently preload gallery in background
    const galleryImages = [
      '/photos/photo1.JPG',
      '/photos/Photo 2.jpg',
      '/photos/photo3.JPG',
      '/photos/photo4.jpg',
      '/photos/photo5.JPG',
      '/photos/photo6.jpg',
      '/photos/photo7.jpg',
      '/photos/photo8.jpg',
      '/photos/photo9.jpg',
      '/photos/photo10.jpg'
    ]
    galleryImages.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [])

  const handleCapture = (src) => {
    setPhotoSrc(src)
    setCurrentScreen('whatsapp')
  }

  // Define standard page transition
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  }

  return (
    <>
      <FloatingParticles />
      <div className="container">
        {!imagesLoaded ? (
          <div style={{ textAlign: 'center', color: '#5d4a66', marginTop: '20vh' }}>
            <motion.h2 
              animate={{ opacity: [0.5, 1, 0.5] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Loading Magic... ✨
            </motion.h2>
            <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>{loadingProgress}%</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
          {currentScreen === 'question1' && (
            <motion.div 
              key="q1" 
              initial="initial" 
              animate="in" 
              exit="out" 
              variants={pageVariants} 
              transition={pageTransition}
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <ScreenQuestion1 onYes={() => setCurrentScreen('gallery')} />
            </motion.div>
          )}

          {currentScreen === 'gallery' && (
            <motion.div 
              key="gallery" 
              initial="initial" 
              animate="in" 
              exit="out" 
              variants={pageVariants} 
              transition={pageTransition}
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <ScreenGallery onYes={() => setCurrentScreen('camera')} onNo={() => setCurrentScreen('hateyou')} />
            </motion.div>
          )}

          {currentScreen === 'hateyou' && (
            <motion.div 
              key="hateyou" 
              initial="initial" 
              animate="in" 
              exit="out" 
              variants={pageVariants} 
              transition={pageTransition}
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <ScreenHateYou onBack={() => setCurrentScreen('question1')} />
            </motion.div>
          )}

          {currentScreen === 'camera' && (
            <motion.div 
              key="camera" 
              initial="initial" 
              animate="in" 
              exit="out" 
              variants={pageVariants} 
              transition={pageTransition}
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <ScreenCamera onCapture={handleCapture} />
            </motion.div>
          )}

          {currentScreen === 'whatsapp' && (
            <motion.div 
              key="whatsapp" 
              initial="initial" 
              animate="in" 
              exit="out" 
              variants={pageVariants} 
              transition={pageTransition}
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <ScreenWhatsApp photoSrc={photoSrc} />
            </motion.div>
          )}
        </AnimatePresence>
        )}
      </div>
    </>
  )
}

export default App
