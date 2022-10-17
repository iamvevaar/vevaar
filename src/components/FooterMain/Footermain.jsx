import React from 'react'
import './footermain.css'
import { FaFacebook  } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Footermain = () => {
  return (
    <section className='footermain'>
    <div>
    <a href="#" className="footermainLogo">
        VEVAAR
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footermainSocials">
        <a href="https://github.com/iamvevaar" target="blank"><FaGithub/></a>
        <a href="https://www.facebook.com/gautam.suthar.37017"><FaFacebook/></a>
        <a href="https://www.instagram.com/iamvevaar/"><FaInstagram/></a>
        <a href="https://twitter.com/iamvevaar"><FaTwitter/></a>
      </div>

      <div className="footermainCopyright">
      <small>&copy; veVaaR</small>
      </div>
    </div>
    </section>
  )
}

export default Footermain