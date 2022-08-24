import React from "react";
import "./experiences.css";
import { DiHtml5 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiSolidity } from "react-icons/si";
import { SiEthereum } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";

const Experiences = () => {
  return (
    <section id="experiences">
      <h5>What Skills I Have</h5>
      <h2>My Experiences</h2>

      <div className="container experiencesContainer">
        <div className="experiencesFrontend">
          <h3>Frontend Technologies</h3>
          <div className="experiencesContent">
            <article className="experiencesDetail">
                <DiHtml5 className="experiencesIcon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experiencesDetail">
              <DiCss3 className="experiencesIcon"/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experiencesDetail">
              <DiJavascript1 className="experiencesIcon"/>
              <div>
              <h4>Javascript</h4>
              <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experiencesDetail">
              <SiTailwindcss className="experiencesIcon"/>
              <div>
              <h4>Tailwind </h4>
              <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experiencesDetail">
              <DiBootstrap className="experiencesIcon"/>
              <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Intermidiate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experiencesBackend">
          <h3>Backend Technologies</h3>
          <div className="experiencesContent">
            <article className="experiencesDetail">
              <DiNodejsSmall className="experiencesIcon"/>
              <div>
              <h4>NodeJS</h4>
              <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experiencesDetail">
              <SiExpress className="experiencesIcon"/>
              <div>
              <h4>Express</h4>
              <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experiencesDetail">
              <DiMongodb className="experiencesIcon"/>
              <div>
              <h4>MongoDB </h4>
              <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experiencesDetail">
              <SiSolidity className="experiencesIcon"/>
              <div>
              <h4>Solidity</h4>
              <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experiencesDetail">
              <SiEthereum className="experiencesIcon"/>
              <div>
              <h4>Ethereum</h4>
              <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="experiencesDetail">
              <DiGithubBadge className="experiencesIcon"/>
              <div>              
              <h4>Github</h4>
              <small className="text-light">Intermidiate</small>
              </div>
            </article>

          </div>
          <div className="experienceContent"></div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
