import React, { useRef, useCallback } from 'react'
import Webcam from 'react-webcam'
import { Camera } from 'lucide-react'

function ScreenCamera({ onCapture }) {
  const webcamRef = useRef(null)

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    onCapture(imageSrc)
  }, [webcamRef, onCapture])

  return (
    <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', height: '100%', maxHeight: '85vh', justifyContent: 'center' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>Show me your excited face! 🤩</h1>
      <p style={{ marginBottom: '1rem', color: '#7a7a7a' }}>Take a picture to capture the moment</p>
      
      <div style={{ 
        padding: '10px', 
        background: 'white', 
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        display: 'inline-block',
        marginBottom: '1rem',
        alignSelf: 'center'
      }}>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode: "user" }}
          style={{ borderRadius: '15px', maxWidth: '100%', width: '400px', maxHeight: '50vh', objectFit: 'cover', backgroundColor: '#eee' }}
        />
      </div>

      <div>
        <button 
          className="btn-yes" 
          onClick={capture}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto' }}
        >
          <Camera size={20} />
          Capture Moment
        </button>
      </div>
    </div>
  )
}

export default ScreenCamera
