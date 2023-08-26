import React from 'react'
import "./services.css";
import Image1 from  "../../assets/images/service-1.svg"
import Image2 from "../../assets/images/service-2.svg";
import Image3 from "../../assets/images/service-3.svg"

const data = [
  {
    id: 1,
    image: Image1,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Image2,
    title: "Symfony PHP Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Image3,
    title: "Data Science",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
  {
    id: 4,
    image: Image3,
    title: "Pyton Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
];

function Services() {
  return (
    <section className="services__container container section">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Services
