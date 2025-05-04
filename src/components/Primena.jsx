import React from "react";
import Slider from "./Slider";

const Primena = ({ title, text, sliderData, cardsPerPage = 3 }) => {
  return (
    <section className="primena">
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        {text && <p className="primena-text">{text}</p>}
        {sliderData && <Slider data={sliderData} cardsPerPage={cardsPerPage} />}
      </div>
    </section>
  );
};

export default Primena;
