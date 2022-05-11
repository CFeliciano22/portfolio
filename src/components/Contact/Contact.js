import './Contact.scss';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';


export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_tn4lr28', 'template_ctqhhey', form.current, 'La3EcI60Rvc2ILxBz')

      alert('Email sent successfully');
        
      e.target.reset();
    };
    return (
        <section id="contact">
        <h1 className='contact__title'>Contact Me</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input type='name' name='name' placeholder='Your Full Name' required/>
                <input type='email' name='email' placeholder='Your Email' required/>
                <textarea name='message' placeholder='Your Message' rows='7' required></textarea>
                <button className='btn' type='submit'>Send Message</button>
            </form>
            <div className='contact__info'>
                <p>Github: <a href=''></a></p>
                <p>LinkedIn: <a href=''></a></p>
                <p>Email: <a href=''></a></p>
            </div>
        </section>
    )
}