import React from 'react';
import "./propos.css";
import Propos from "../../assets/images/avatar-2.svg";
import ProposBox from './ProposBox';

function propos() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Propos} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Jules Yannick NDOH, web developer and Data Science. 
              I have experience in web site design and building, 
              also i am good Data science and python web developer.
            </p>
            <a href="../../assets/cv/web_dev.pdf" className="btn web_dev">CV Web Development</a>
            <a href="../../assets/cv/web_dev.pdf" className="btn php_dev">CV Symfony/PHP Development</a>
            <a href="../../assets/cv/web_dev.pdf" className="btn data_science">CV Data Science</a>
            <a href="../../assets/cv/web_dev.pdf" className="btn python_dev">CV Python Development</a>
          </div>

          <div className="about__skills_grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Web Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Symfony PHP Development</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage symfony_php"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Data Science</h3>
                <span className="skills__number">85%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage data_science"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Python Development</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage python_development"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProposBox />
    </section>
  )
}

export default propos
