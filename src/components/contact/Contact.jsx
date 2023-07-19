import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {PiMessengerLogoBold} from 'react-icons/pi'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {} from 'react-icons/'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5nbx6zw', 'template_3x5glyt', form.current, 'QOOX_G0fpmcDMbrut')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5> Get in touch </h5>
      <h2> Contactame </h2>

      <div className='container contact__container'>
        <div className='contact__options'>

          <article className='emailc contact__option'>
            <AiOutlineMail className='email contact__option-icon'/>
            <h4> Correo </h4>
            <h5> jossygomez509@gmail.com </h5>
            <a href="mailto:micorreo@gmail.com" className='email'> Enviar correo </a>
          </article>
{/* 
          <article className='contact__option'>
            <PiMessengerLogoBold className='contact__option-icon'/>
            <h4> Messenger </h4>
            <h5> Jossy </h5>
            <a href="https://m.me/JossyGomez17/"> send a message </a>
          </article> */}

          <article className='whatsappc contact__option'>
            <BsWhatsapp className='whatsapp contact__option-icon'/>
            <h4> WhatsApp </h4>
            <h5> +57 3017357821 </h5>
            <a href="https://api.whatsapp.com/send?phone+573017357821" className='whatsapp'> Enviar mensaje </a>
          </article>

        </div>

         {/* FORMULARIO */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nombre' required />
          <input type="email" placeholder='Correo' required />
          <textarea name="message" rows="7" placeholder='Deja tu mensaje aquí' required></textarea>
          <button type='submit' className='btn btn-primary'>
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact