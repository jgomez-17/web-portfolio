import React from 'react'
import './Services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5> What i offer </h5>
      <h2> Services </h2>

      <div className='container services__container'>

        {/* UI/UX DESIGN */}

        <article className='service'>
          <div className='service__head'>
            <h3> UI/UX Design </h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        {/* WEB DEVELOPMENT */}

        <article className='service'>
          <div className='service__head'>
            <h3> Web development </h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

          {/* CONTENT CREATION */}

        <article className='service'>
          <div className='service__head'>
            <h3> Content creation </h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services