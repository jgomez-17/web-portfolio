import React from 'react'
import './Footer.css'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'> JGOMEZZ </a>

      <ul className='permalinks'>
        <li><a href="#"> Inicio </a></li>
        <li><a href="#about"> Acerca de mi </a></li>
        <li><a href="#experience"> Tegnologias </a></li>
        {/* <li><a href="#"> Services </a></li> */}
        <li><a href="#portfolio"> Portafolio </a></li>
        {/* <li><a href="#"> Testimonials </a></li> */}
        <li><a href="#contact"> Contacto </a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/"><BiLogoFacebook className='facebook'/></a>
        <a href="https://www.instagram.com/"><AiOutlineInstagram className='instagram'/></a>
        <a href="https://www.youtube.com/"><AiOutlineYoutube className='youtube'/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; JGOMEZZ Dev. </small>
      </div>
    </footer>
  )
}

export default Footer