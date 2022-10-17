import React from 'react' 
import "./header.css"
import {BsLinkedin , BsInstagram , BsGithub} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'

const Icons = () => {
  return (
    <div className="headerSocials">
        <a href="https://www.linkedin.com/in/iamvevaar/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/iamvevaar" target="blank"><BsGithub/></a>
        <a href="https://instagram.com/iamvevaar" target="blank"><BsInstagram/></a>
        <a href="https://www.facebook.com/gautam.suthar.37017"><FaFacebook/></a>        
    </div>
    )
}

export default Icons