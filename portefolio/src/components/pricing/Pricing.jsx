import React from 'react'
import './pricing.css'
import Image1 from "../../assets/images/price-1.svg";
import Image2 from "../../assets/images/price-2.svg";
import Image3 from "../../assets/images/price-3.svg";

function Pricing() {
  return (
   <section className="princing container section">
    <h2 className="section__title">Pricing Plan</h2>

    <div className="princing__container grid">
      <div className="princing__item">
        <img src={Image1} alt="" className="princing__img" />
        <h3 className="princing__plan">Basic</h3>
        <p className="princing__title">A simple option but powerful to manage your business</p>
        <p className="princing__support">Email support</p>
        <h3 className="price">
          <em>Fcfa</em> 9 <span>Month</span>
        </h3>
        <a href="www" className="btn">Get Started</a>
      </div>

      <div className="princing__item best">
        <span className="badge">Recommended</span>
        <img src={Image2} alt="" className="princing__img" />
        <h3 className="princing__plan">Premium</h3>
        <p className="princing__title">Unlimited product including app integration and more features</p>
        <p className="princing__support">Mon-Fri support</p>
        <h3 className="price">
          <em>Fcfa</em> 15 <span>Month</span>
        </h3>
        <a href="sxx" className="btn">Get Started</a>
      </div>

      <div className="princing__item">
        <img src={Image3} alt="" className="princing__img" />
        <h3 className="princing__plan">Ultimate</h3>
        <p className="princing__title">A wise option for large companies and individuals</p>
        <p className="princing__support">24/7 Support</p>
        <h3 className="price">
          <em>Fcfa</em> 19 <span>Month</span>
        </h3>
        <a href="xxx" className="btn">Get Started</a>
      </div>
    </div>
   </section>
  )
}

export default Pricing
