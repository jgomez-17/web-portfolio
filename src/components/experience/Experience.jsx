import React from 'react'
import './Experience.css'
import {BiLogoReact} from 'react-icons/bi'
import {LiaAngular} from 'react-icons/lia'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3Full} from 'react-icons/di'
import {TbBrandBootstrap} from 'react-icons/tb'
import {IoLogoNodejs} from 'react-icons/io'
import {GrMysql} from 'react-icons/gr'
import {FaJava} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import {TbBrandTypescript} from 'react-icons/tb'
import {SiAstro} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'
import {FaLinux} from 'react-icons/fa'


const Experience = () => {
  return (
    <section id='experience'>
      <h5> Mis conocimientos </h5>
      <h2> TEGNOLOGIAS </h2>

      <div className='container experience__container'>

        {/* BACKEND */}

        <div className='backend experience__backend'>
          <h3> BackEnd  </h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <IoLogoNodejs className='nodejs experience__details-icon'/>
              <div className='text__technologies'>
              <h4> Nodejs </h4>
              {/* <small className='text-light'> Experienced </small> */}
              </div>
            </article>

            <article className='experience__details'>
              <SiExpress className='expressjs experience__details-icon'/>
              <div className='text__technologies'>
              <h4> Expressjs </h4>
              {/* <small className='text-light'> Experienced </small> */}
              </div>
            </article>

            <article className='experience__details'>
              <GrMysql className='mysql experience__details-icon'/>
              <div className='text__technologies'>
              <h4> MySQL </h4>
              {/* <small className='text-light'> Experienced </small> */}
              </div>
            </article>

            <article className='experience__details'>
              <FaJava className='java experience__details-icon'/>
              <div className='text__technologies'>
              <h4> Java </h4>
              <small className='text-light'> Basic </small>
              </div>
            </article>
          </div>
        </div> 

        {/* FRONTEND */}

        <div className='frontend experiencie__frontend'>
          <h3> FrontEnd </h3>
          <div className='experience__content'>

          <article className='experience__details'>
              <DiJavascript1 className='js experience__details-icon'/>
              <div className='text__technologies'>
              <h4> JavaScript  </h4>
              {/* <small className='text-light'> Experienced </small> */}
              </div>
            </article>

            <article className='experience__details'>
              <BiLogoReact className='react experience__details-icon'/>
              <div className='text__technologies'>
              <h4> React  </h4>
              {/* <small className='text-light'> Experienced </small> */}
              </div>
            </article>

            <article className='experience__details'>
              <TbBrandTypescript className='ts experience__details-icon'/>
              <div className='text__technologies'>
              <h4> TypeScript  </h4>
              {/* <small className='text-light'> Experienced </small> */}
              </div>
            </article>

            <article className='experience__details'>
              <LiaAngular className='angular experience__details-icon'/>
              <div className='text__technologies'>
              <h4> Angular  </h4>
              {/* <small className='text-light'> Experienced </small> */}
              </div>
            </article>


            <article className='experience__details'>
              <AiOutlineHtml5 className='html experience__details-icon'/>
              <div className='text__technologies'>
              <h4> HTML  </h4>
              {/* <small className='text-light'> Experienced </small> */}
              </div>
            </article>

            <article className='experience__details'>
              <SiAstro className='astro experience__details-icon'/>
              <div className='text__technologies'>
              <h4> Astro  </h4>
              <small className='text-light'> Basic </small>
              </div>
            </article>

            <article className='experience__details'>
              <DiCss3Full className='css experience__details-icon'/>
              <div className='text__technologies'>
              <h4> CSS  </h4>
              {/* <small className='text-light'> Experienced </small> */}
              </div>
            </article>

            <article className='experience__details'>
              <TbBrandBootstrap className='bootstrap experience__details-icon'/>
              <div className='text__technologies'>
              <h4> Bootstrap  </h4>
              {/* <small className='text-light'> Experienced </small> */}
              </div>
            </article>

          </div>
        </div>

                {/* OTHERS */}

          <div className='backend experience__others'>
          <h3> Otras </h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <FaLinux className='linux experience__details-icon'/>
              <div className='text__technologies'>
              <h4> Linux </h4>
              {/* <small className='text-light'> Experienced </small> */}
              </div>
            </article>

            <article className='experience__details'>
              <BsGit className='git experience__details-icon'/>
              <div className='text__technologies'>
              <h4> Git </h4>
              {/* <small className='text-light'> Experienced </small> */}
              </div>
            </article>

          </div>
        </div> 

      </div>
    </section>
  )
}

export default Experience