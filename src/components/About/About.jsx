import React from "react";
import "./about.css";
import DP from "../../assets/Portrait.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscProject } from "react-icons/vsc";

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
              <FaAward className="aboutIcon" />
              <h5>Experience</h5>
              <small>1+Years Working</small>
            </article>
            <article className="aboutCard">
              <FiUsers className="aboutIcon" />
              <h5>Clients</h5>
              <small>5+ Happy Clients</small>
            </article>
            <article className="aboutCard">
              <VscProject className="aboutIcon" />
              <h5>Projects</h5>
              <small>10+ Compeleted</small>
            </article>
          </div>
          <p>
            Hello Saab I am Gautam, a smiley tech geek student and learner who
            loves Programming | Editing & Designing. In Programming, I'm very
            confident with Frontend Web Development using React. Sometimes I try
            my hands on React Native because it helps me always to remain close
            with javascript. If I talk about Designing, somehow it is very
            natural for me to design beautiful kinds of stuff, And the most
            important thing, I'm a 3rd Year College student pursuing my bachelor's in
            Computer Science Last but not least me amo español y aprendiendo el
            idioma española Yes I'm learning Spanish too In addition, I'm not a
            photographer but an Editor who loves to enhance the beauty in
            Picture MODE So may you can visit my page on Instagram `{<a href="https://www.instagram.com/vevaarclicks/" target="_blank"> @vevaarclicks. </a>}`
            Thanks for your kind attention.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
