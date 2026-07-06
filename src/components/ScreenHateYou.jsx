import React from 'react'

function ScreenHateYou({ onBack }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', color: '#8c2842' }}>I hate you 😤</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Just kidding! But you have to say yes... 🥺</p>
      <button className="btn-yes" onClick={onBack}>Go Back & Fix It 🔙</button>
    </div>
  )
}

export default ScreenHateYou
