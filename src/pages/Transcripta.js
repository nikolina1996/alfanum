import React from "react";
import Hero from "../components/Hero";
import Primena from "../components/Primena";
import SubscriptionSection from "../components/SubscriptionSection";
import useCardsPerPage from "../components/useCardsPerPage";
import { useLanguage } from '../components/LanguageContext';

function Transcripta() {
  const { texts } = useLanguage();
  const tekstPrimena = [texts.transcripta.tekstPrimena];
  const tekstPrednosti = [texts.transcripta.tekstPrednosti];
  const featuresPrimena = [
    { title: [texts.transcripta.featuresPrimena.pojedinci.key], description: [texts.transcripta.featuresPrimena.pojedinci.value]},
    { title: [texts.transcripta.featuresPrimena.preduzeca.key], description: [texts.transcripta.featuresPrimena.preduzeca.value] },
    { title: [texts.transcripta.featuresPrimena.medijskekuce.key], description: [texts.transcripta.featuresPrimena.medijskekuce.value]  },
    { title: [texts.transcripta.featuresPrimena.sudovi.key], description: [texts.transcripta.featuresPrimena.sudovi.value] },
    { title: [texts.transcripta.featuresPrimena.ostali.key], description: [texts.transcripta.featuresPrimena.ostali.value]}
  ];
  const featuresPrednosti = [
    { title: [texts.transcripta.featuresPrednosti.tacnost.key], description: [texts.transcripta.featuresPrednosti.tacnost.value] },
    { title: [texts.transcripta.featuresPrednosti.integracija.key], description: [texts.transcripta.featuresPrednosti.integracija.value] },
    { title: [texts.transcripta.featuresPrednosti.jezik.key], description: [texts.transcripta.featuresPrednosti.jezik.value] },
    { title: [texts.transcripta.featuresPrednosti.brzina.key], description: [texts.transcripta.featuresPrednosti.brzina.value] },
    { title: [texts.transcripta.featuresPrednosti.editor.key], description: [texts.transcripta.featuresPrednosti.editor.value] },
  ];
  const subscriptionPackages = [
    {
        title: [texts.osnovni.naslov],
        price:  [`30e / ${texts.mesecna.mesec}`],
        features: [texts.osnovni.h30, texts.osnovni.nakonh30, texts.osnovni.dijarizacija, texts.osnovni.online],
        buttonText: [texts.dugme.izaberi]
    },
    {
        title: [texts.premium.naslov],
        price: [`50e / ${texts.mesecna.mesec}`],
        features: [texts.premium.h60, texts.premium.nakonh60, texts.premium.dijarizacija, texts.premium.online],
        buttonText: [texts.dugme.izaberi]
    },
    {
        title: [texts.poslovni.naslov],
        features: [texts.poslovni.inhouse, texts.poslovni.kastomizacija, texts.poslovni.paket, texts.poslovni.api],
        buttonText: [texts.dugme.upit]
      }
    ];
  const cardsPerPage = useCardsPerPage();
  return (
    <div className="medicta-page">
      <Hero
        imageSrc="/images/transcripta2.png"
        altText="Transcripta Logo"
        text={texts.transcripta.naslov}
      />
      <Primena
        title={texts.velikinaslovi.primena}
        text={tekstPrimena}
        sliderData={featuresPrimena}
        cardsPerPage={cardsPerPage}
      />
      <Primena
        title={texts.velikinaslovi.karakteristikeSistema}
        text={tekstPrednosti}
        sliderData={featuresPrednosti}
        cardsPerPage={cardsPerPage}
      />
      <SubscriptionSection
        title={texts.velikinaslovi.pretplate.transcripta}
        description={texts.pretplata.transcripta}
        packages={subscriptionPackages}
      />
    </div>
  );
}

export default Transcripta;
