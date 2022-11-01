import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolioContainer">


      <article className="portfolioItem">
          <div className="portfolioItemImage">
            <img
              src="https://user-images.githubusercontent.com/69046800/196301741-c0e34585-8ea8-490d-bd89-c96aff360429.png"
              alt=""
            />
          </div>
          <div className="portfolioHead">
            <h3>Vechat</h3>
            <p>Frontend | Firebase | React.js</p>
          </div>
          <div className="portfolioItemCTA">
            <a href="https://github.com/iamvevaar/vchat" className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a
              href="https://vechats.netlify.app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolioItem">
          <div className="portfolioItemImage">
            <img
              src="https://user-images.githubusercontent.com/69046800/199338623-2cd8e9fd-c5f0-4242-91ec-7b9c9d7b20e0.png"
              alt=""
            />
          </div>
          <div className="portfolioHead">
            <h3>Vecoins</h3>
            <p>Frontend | React.js | API </p>
          </div>
          <div className="portfolioItemCTA">
            <a href="https://github.com/iamvevaar/vecoins.git" className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a
              href="https://vecoins.netlify.app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolioItem">
          <div className="portfolioItemImage">
            <img
              src="https://user-images.githubusercontent.com/69046800/196300739-f9b13a60-f40c-40d8-bec8-6084a502c7df.png"
              alt=""
            />
          </div>
          <div className="portfolioHead">
            <h3>Weather App</h3>
            <p>Vanilla Javascript</p>
          </div>
          <div className="portfolioItemCTA">
            <a href="https://github.com/iamvevaar/vether/tree/master" className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a
              href="https://veathers.netlify.app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>


   

{/* 
        <article className="portfolioItem">
          <div className="portfolioItemImage">
            <img
              src="https://user-images.githubusercontent.com/69046800/192615408-ace08305-9856-49a4-8ab2-84ce29446748.png"
              alt=""
            />
          </div>
          <div className="portfolioHead">
            <h3>Blog Publisher</h3>
            <p>Frontend</p>
          </div>
          <div className="portfolioItemCTA">
            <a href="https://github.com/iamvevaar/velogs" className="btn" target="blank">
              Github
            </a>
            <a
              href="https://velogs.netlify.app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>


        


        <article className="portfolioItem">
          <div className="portfolioItemImage">
            <img
              src="https://user-images.githubusercontent.com/69046800/186210957-97cda125-567d-4b2c-aa6e-458fad14a739.png"
              alt=""
            />
          </div>
          <div className="portfolioHead">
            <h3>Background Loop Video</h3>
            <p>Frontend</p>
          </div>
          <div className="portfolioItemCTA">
            <a href="https://github.com" className="btn" target="blank">
              Github
            </a>
            <a
              href="https://iamvevaar.github.io/BGloop/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>


        <article className="portfolioItem">
          <div className="portfolioItemImage">
            <img
              src="https://user-images.githubusercontent.com/69046800/186210957-97cda125-567d-4b2c-aa6e-458fad14a739.png"
              alt=""
            />
          </div>
          <div className="portfolioHead">
            <h3>Background Loop Video</h3>
            <p>Frontend</p>
          </div>
          <div className="portfolioItemCTA">
            <a href="https://github.com" className="btn" target="blank">
              Github
            </a>
            <a
              href="https://iamvevaar.github.io/BGloop/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}


      

        
      </div>
    </section>
  );
};

export default Portfolio;
