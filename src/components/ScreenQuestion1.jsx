import { useState, useRef } from 'react'

function ScreenQuestion1({ onYes }) {
  const [noButtonStyle, setNoButtonStyle] = useState({ position: 'relative' })
  const noButtonRef = useRef(null)

  const handleNoHover = () => {
    // Generate random coordinates within a reasonable range
    const randomX = Math.floor(Math.random() * 300) - 150 // -150px to 150px
    const randomY = Math.floor(Math.random() * 300) - 150 // -150px to 150px

    setNoButtonStyle({
      position: 'absolute',
      transform: `translate(${randomX}px, ${randomY}px)`,
      transition: 'transform 0.2s ease-in-out'
    })
  }

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <div className="polaroid" style={{ transform: 'rotate(-2deg)', marginBottom: '2rem' }}>
        <img 
          src="/photos/hero.jpg" 
          alt="Us" 
          onError={(e) => { e.target.src = 'https://via.placeholder.com/250/ffd6e0/5d4a66?text=Save+image+as+hero.jpg' }}
        />
        <div className="caption">Hey Arya! 👋</div>
      </div>
      
      <h1>Are you my best friend, Arya? 🥺</h1>
      
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', position: 'relative', height: '100px', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <button className="btn-yes" onClick={onYes}>
          Yes! 💕
        </button>
        
        <button 
          ref={noButtonRef}
          className="btn-no"
          style={noButtonStyle}
          onMouseEnter={handleNoHover}
          onClick={handleNoHover} // For mobile taps
        >
          No 🙅‍♀️
        </button>
      </div>
    </div>
  )
}

export default ScreenQuestion1
