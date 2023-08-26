import React from 'react'
import "./portfolio.css";
function Portfolio() {
  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span className="work__item">Everything</span>
        <span className="work__item">Creative</span>
        <span className="work__item">Art</span>
        <span className="work__item">Design</span>
        <span className="work__item">Branding</span>
      </div>

      <div className="work__container grid"></div>
    </section>
  )
}

export default Portfolio
