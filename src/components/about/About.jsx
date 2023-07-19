import React from 'react'
import './About.css'
import ME from '../../assets/me2.jpg'
import {AiOutlineUser} from 'react-icons/ai'
import {IoIosArrowForward} from 'react-icons/io'
import {MdOutlineComputer} from 'react-icons/md'
import {BiMap} from 'react-icons/bi'
import {RiRoadMapLine} from 'react-icons/ri'
import {RiMapPin4Line} from 'react-icons/ri'
import {FaGraduationCap} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
      <h5> Conoce un poco </h5>
      <h2> SOBRE MI </h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
          <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <AiOutlineUser className='about__icon'/>
              <h4>Jossy Alexander Gomez Moreno</h4>
              <div className='list__container'>
              <div className='list__intereses'>
              <small><IoIosArrowForward className='small__icon'/> 22 Años </small>
              </div>
              <div className='list__intereses'>
              <small><BiMap className='small__icon'/> Barranquilla/Colombia </small>
              </div>
              <div className='list__intereses'>
              <small><RiMapPin4Line className='small__icon'/> Disponible para viajar: si </small>
              </div>
              <div className='list__intereses'>
              <small><RiRoadMapLine className='small__icon'/> Cambio de residencia: si </small>
              </div>
              </div>
            </article>

            <article className='about__card'>
              <MdOutlineComputer className='about__icon'/>
              <h4> Intereses </h4>
              <div className='list__container'>
              <div className='list__intereses'>
              <small><IoIosArrowForward className='small__icon'/> Desarrollo web fullstack </small>
              </div>
              <div className='list__intereses'>
              <small><IoIosArrowForward className='small__icon'/> UI/UX Design </small>
              </div>
              <div className='list__intereses'>
              <small><IoIosArrowForward className='small__icon'/> Tecnico de sistemas </small>
              </div>
              <div className='list__intereses'>
              <small><IoIosArrowForward className='small__icon'/> Soporte de sistemas </small>
              </div>
              </div>
            </article>

            <article className='about__card'>
              <FaGraduationCap className='about__icon'/>
              <h4> Educacion </h4>
              <div className='list__container'>
              <div className='list__intereses'>
              <small> Ingeniería de sistemas </small>
              </div>
              <div className='list__intereses'>
              <small> Universidad libre seccional barranquilla </small>
              </div>
              <div className='list__intereses'>
              <small> 2018 - Actualidad </small>
              </div>
              </div>
            </article>


          </div>
          <p>
          Me enfoco en el desarrollo web tanto en el FrontEnd y BackEnd como en UX/UI Design. Cuento con habilidades sólidas en 
          programación y experiencia en proyectos prácticos. Busco la oportunidad de contribuir al 
          crecimiento del sector, enfrentando desafíos técnicos y trabajando en 
          equipos multidisciplinarios para crear soluciones efectivas. 
          </p>
          
          <a href="#contact" className='btn btn-primary'> Hablemos </a>

        </div>
      </div>
    </section>
  )
}

export default About