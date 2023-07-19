import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/fondo3.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'titulo del proyecto 1',
    github: 'https://github.com/',
    demo: 'link del proyecto en dribble'
  },
  {
    id: 2,
    image: IMG1,
    title: 'titulo del proyecto 2',
    github: 'https://github.com/',
    demo: 'link del proyecto en dribble'
  },
  {
    id: 3,
    image: IMG1,
    title: 'titulo del proyecto 3',
    github: 'https://github.com/',
    demo: 'link del proyecto en dribble'
  },
  {
    id: 4,
    image: IMG1,
    title: 'titulo del proyecto 4',
    github: 'https://github.com/',
    demo: 'link del proyecto en dribble'
  },
  {
    id: 5,
    image: IMG1,
    title: 'titulo del proyecto 5',
    github: 'https://github.com/',
    demo: 'link del proyecto en dribble'
  },
  {
    id: 6,
    image: IMG1,
    title: 'titulo del proyecto 6',
    github: 'https://github.com/',
    demo: 'link del proyecto en dribble'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> Mi trabajo reciente </h5>
      <h2> PORTAFOLIO </h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
                <h3> {title} </h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'> Github </a>
                  <a href={demo} className='btn btn-primary' target='_blank'> Live demo </a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio