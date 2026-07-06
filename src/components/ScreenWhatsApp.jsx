import React, { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

function ScreenWhatsApp({ photoSrc }) {
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSendEmail = async () => {
    if (!photoSrc) return
    setIsSending(true)
    
    try {
      const formData = new FormData()
      formData.append('fi-text-message', 'Hii! I just went through the website and loved it! Look at my excited face! ✨')
      
      const res = await fetch(photoSrc)
      const blob = await res.blob()
      const file = new File([blob], 'reaction.jpg', { type: 'image/jpeg' })
      formData.append('fi-file-photo', file) 

      const response = await fetch('https://forminit.com/f/m5yt1bs1890', {
        method: 'POST',
        body: formData,
        headers: {
            "Accept": "application/json",
        },
      })

      if (response.ok) {
        setIsSent(true)
      } else {
        const errorText = await response.text()
        console.error("Forminit Error:", errorText)
        alert('Failed to send: ' + errorText)
      }
    } catch (e) {
      console.error(e)
      alert('Network Error: ' + e.message)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <h1>Yay! You're the best! 💖</h1>
      
      {photoSrc && (
        <div className="polaroid" style={{ transform: 'rotate(0)', margin: '2rem 0' }}>
          <img src={photoSrc} alt="Your excited face" />
          <div className="caption">Best moment! ✨</div>
        </div>
      )}

      <p style={{ marginBottom: '2rem', fontSize: '1.2rem', maxWidth: '400px' }}>
        Send me your reaction! This will magically send the photo straight to my phone.
      </p>

      {isSent ? (
        <div style={{ color: '#1a533b', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#dcedc1', padding: '15px 30px', borderRadius: '50px' }}>
          <CheckCircle2 size={24} />
          Sent successfully! I can't wait to see it! 🥰
        </div>
      ) : (
        <button 
          className="btn-yes" 
          onClick={handleSendEmail}
          disabled={isSending}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '15px 40px', fontSize: '1.2rem', opacity: isSending ? 0.7 : 1, margin: '0 auto' }}
        >
          <Send size={24} />
          {isSending ? 'Sending magically... ✨' : 'Send to Me! 💌'}
        </button>
      )}
    </div>
  )
}

export default ScreenWhatsApp
