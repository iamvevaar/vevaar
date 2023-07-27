import React from "react";
import "./header.css";
import Icons from "./Icons";
import SPARKS from "../../assets/demodemo.png";

const Header = () => {
  return (
    <header>
      <div className="container headerContainer">
        <h5>Hello I'm</h5>
        <h1>Gautam Suthar</h1>
        <h5 className="text-light">Javascript Developer</h5>
        <div className="cta">
          <a
            href="https://drive.google.com/file/d/1QQWIXb7ZKXrVYe0VzvrVVM-oUKnazCLO/view?usp=sharing"
            className="btn "
          >
            Resume
          </a>
          <a href="#contact" className="btn btn-primary ">
            Let's Talk
          </a>
        </div>

        <Icons />

        <div className="level">

        <div className="memo">
          <img src={SPARKS} alt="sparkler" />
        </div>

        </div>

        <a href="#footer" className="scrollDown">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
