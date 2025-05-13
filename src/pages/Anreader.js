import React from "react";
import Hero from "../components/Hero";
import Primena from "../components/Primena";
import SubscriptionSection from "../components/SubscriptionSection";
import { useLanguage } from '../components/LanguageContext';


function Anreader() {
  const { texts } = useLanguage();
  const tekstPrimena = (
    <>
      {texts.anreader.tekstPrimena}{" "}
      <a href="https://anreader.alfanum.co.rs/" target="_blank" rel="noopener noreferrer" className="download-link">
        {texts.anreader.strana}
      </a>.
    </>
  );
  const subscriptionPackages = [
    {
        title: [texts.tromesecni],
        price: [`30e / ${texts.mesecna.mesec}`],
        features: [texts.osnovni.h30, texts.osnovni.nakonh30, texts.osnovni.dijarizacija, texts.osnovni.online],
        buttonText: [texts.dugme.izaberi]
    },
    {
        title:  [texts.godisnjaLicenca],
        price: [`50e / ${texts.mesecna.mesec}`],
        features: [texts.premium.h60, texts.premium.nakonh60, texts.premium.dijarizacija, texts.premium.online],
        buttonText: [texts.dugme.izaberi]
    },
    ];
  return (
    <div className="medicta-page">
      <Hero
        imageSrc="/images/anreader.png"
        altText="Anreader Logo"
        text={texts.anreader.naslov}
      />
      <Primena
        title={texts.velikinaslovi.primena}
        text={tekstPrimena}
      />
      <SubscriptionSection
        title={texts.velikinaslovi.pretplate.anreader}
        description={texts.pretplata.anreader}
        packages={subscriptionPackages}
      />
    </div>
  );
}

export default Anreader;
