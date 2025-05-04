import React from "react";

const Hero = ({ imageSrc, altText, text }) => {
    return (
      <section className="hero">
        <div className="hero-content">
          {imageSrc && <img src={imageSrc} alt={altText || "Hero image"} className="hero-logo" />}
          {text && <h1 className="hero-text">{text}</h1>}
        </div>
      </section>
    );
  };
  
  export default Hero;
  
