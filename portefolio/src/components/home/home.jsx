import React from 'react';
import "./home.css";
import Me from "../../assets/images/avatar-1.svg"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Ndohvich</h1>
        <span className="home__education">I'm a FullStack Developper And Data Science</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown />

      </div>

      <Shapes />

    </section>
  )
}

export default home
