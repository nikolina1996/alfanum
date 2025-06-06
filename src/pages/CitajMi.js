import React from "react";
import Hero from "../components/Hero";
import Primena from "../components/Primena";
import ResourceCard from "../components/ResourceCard";
import { useLanguage } from '../components/LanguageContext';


function CitajMi() {
  const { texts } = useLanguage();
  return (
    <div className="medicta-page">
      <Hero
        imageSrc="/images/citajmi.png"
        altText="Citajmi Logo"
        text={texts.citajmi.naslov}
      />
      <Primena
        title={texts.velikinaslovi.citajmi}
        text1={texts.citajmi.tekstPrimena}
      />
      <ResourceCard
        title={texts.citajmi.ozvuceniSajtovi}
        links={["www.rts.rs", "www.e-uprava.rs", "www.poverenik.rs"]}
        buttonText={texts.dugme.upit}
      />
    </div>
  );
}

export default CitajMi
