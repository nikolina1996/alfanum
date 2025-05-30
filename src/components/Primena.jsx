import React from "react";
import Slider from "./Slider";

const Primena = ({ title, text1, text2, sliderData, cardsPerPage = 3, imageSrc }) => {
  return (
    <section className="primena">
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        {text1 && <p className="primena-text">{text1}</p>}
        {imageSrc && (
          <div className="primena-image-wrapper">
            <img src={imageSrc} alt="Primena ilustracija" className="primena-image" />
          </div>
        )}
        {text2 && <p className="primena-text">{text2}</p>}
        {sliderData && <Slider data={sliderData} cardsPerPage={cardsPerPage} />}
      </div>
    </section>
  );
};


export default Primena;
