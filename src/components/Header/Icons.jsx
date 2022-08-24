import React from 'react' 
import "./header.css"
import {BsLinkedin , BsInstagram , BsGithub} from 'react-icons/bs'

const Icons = () => {
  return (
    <div className="headerSocials">
        <a href="https://linkedin.com" target="blank"><BsLinkedin/></a>
        <a href="https://github.com" target="blank"><BsGithub/></a>
        <a href="https://instagram.com" target="blank"><BsInstagram/></a>
        
    </div>
    )
}

export default Icons