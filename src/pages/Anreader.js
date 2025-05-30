import React from "react";
import Hero from "../components/Hero";
import Primena from "../components/Primena";
import { useLanguage } from '../components/LanguageContext';
import ResourceCard from "../components/ResourceCard";


function Anreader() {
  const { texts } = useLanguage();
  const tekstPrimena2 = (
    <>
      {texts.anreader.tekstPrimena2}{" "}
      <a href="https://anreader.alfanum.co.rs/" target="_blank" rel="noopener noreferrer" className="download-link">
        {texts.anreader.strana}
      </a>.
    </>
  );
  return (
    <div className="medicta-page">
      <Hero
        imageSrc="/images/anreader.png"
        altText="Anreader Logo"
        text={texts.anreader.naslov}
      />
      <Primena
        title={texts.velikinaslovi.anreader}
        text1={texts.anreader.tekstPrimena1}
        imageSrc="/images/anReader_img.jpg"
        text2={tekstPrimena2}
      />
      <ResourceCard
        title={texts.anreader.naslovResource}
        description={texts.anreader.description}
        buttonText={texts.dugme.upit}
      />
    </div>
  );
}

export default Anreader;
