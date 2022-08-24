import React from "react";
import "./about.css";
import DP from "../../assets/Portrait.png"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscProject} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container aboutContainer">
        <div className="aboutMe">
          <div className="aboutMe-image">
            <img src={DP} alt="Meri DP" />
          </div>
        </div>

        <div className="aboutContent">
        <div className="aboutCards">
          <article className="aboutCard">
            <FaAward className="aboutIcon"/>
            <h5>Experience</h5>
            <small>1+Years Working</small>
          </article>
          <article className="aboutCard">
            <FiUsers className="aboutIcon"/>
            <h5>Clients</h5>
            <small>5+ Happy Clients</small>
          </article>
          <article className="aboutCard">
            <VscProject className="aboutIcon"/>
            <h5>Projects</h5>
            <small>10+ Compeleted</small>
          </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut nobis, at ab officiis deleniti vel aspernatur dolorum expedita repudiandae laboriosam atque nesciunt odio modi. Quas nulla illum sequi officia fugit?
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
