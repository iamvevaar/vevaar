import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import {BsWhatsapp} from 'react-icons/bs';
import {RiFacebookCircleLine} from 'react-icons/ri';
import {RiTelegramLine} from 'react-icons/ri';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tlxfnuf', 'template_48lxs0h', form.current, 'XSmka9Mx2D4-J0UwV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    };
  
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2 id='special'>Contact ME</h2>

      <div className="container contactContainer">
        <div className="contactOptions">
          <article className="contactOption">
            <MdOutlineEmail className="contactOptionIcon"/>
            <h4>Email</h4>
            <h5>iamvevaar@gmail.com</h5>
            <a href="mailto:iamvevaar@gmail.com">Email Me</a>
          </article>

          <article className="contactOption">
            <RiFacebookCircleLine className="contactOptionIcon"/>
            <h4>Messenger</h4>
            <h5>iamvevaar</h5>
            <a href="https://m.me/gautam.suthar.37017" target='blank'>Say Hey</a>
          </article>

          <article className="contactOption">
            <BsWhatsapp className="contactOptionIcon"/>
            <h4>WhatsApp</h4>
            <h5> <span>+91</span> 9928191868</h5>
            <a href="https://api.whatsapp.com/send?phone=9928191868" target='blank'>Say Hello Saab</a>
          </article>

          <article className="contactOption">
            <RiTelegramLine className="contactOptionIcon"/>
            <h4>Telegram</h4>
            <h5> <span>+91</span> 9928191868</h5>
            <a href="https://telegram.me/iamvevaar" target='blank'>Say Hello Saab</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Yout EmailId" required />
          <textarea name="message" id="" placeholder="Your Message" rows="7" required></textarea>
          <button type="submit" className="btn btn-primary" >Send Message</button>
        </form>


       

      </div>
    </section>
  );
};

export default Contact;
