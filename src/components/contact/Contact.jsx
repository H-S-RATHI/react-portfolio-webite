import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_ok9vbl7', 'template_rizb1wm', form.current, 'ovuZPJnrkNamvBsXU')

    e.target.reset();

    
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <acticle className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5></h5>
            <a href="mailto:golusingh.70881@gmail.com" target='_blank'>Send a Message</a>
          </acticle>
          <acticle className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5></h5>
            <a href="#" >Send a Message</a>
          </acticle>
          <acticle className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5></h5>
            <a href="https://api.whatsapp.com/send?phone=917454029951" target='_blank'>Send a Message</a>
          </acticle>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" id="" rows="7" placeholder='Your Mesaage' required></textarea>
          <button type='submit' class='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact