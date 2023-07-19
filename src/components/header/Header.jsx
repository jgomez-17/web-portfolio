import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/react.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <p> Bienvenid@, mi nombre es </p>
        <h1 className='name__header'> Jossy Gomez Moreno </h1>
        <p className='profesion'> Estudiante de ingeniería de sistemas & desarrollador web </p>

        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <HeaderSocials />

        <a href="#contact" className='scroll__down'> Scroll Down </a>

      </div>
    </header>
  )
}

export default Header