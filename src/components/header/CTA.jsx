import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'> Descargar CV </a>
        <a href="#portfolio" className='btn btn-primary'> Portafolio </a>
    </div>
    
  )
}

export default CTA