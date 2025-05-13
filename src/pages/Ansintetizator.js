import React from "react";
import Hero from "../components/Hero";
import Primena from "../components/Primena";
import SubscriptionSection from "../components/SubscriptionSection";
import useCardsPerPage from "../components/useCardsPerPage";
import { useLanguage } from '../components/LanguageContext';

function Ansintetizator() {
  const { texts } = useLanguage();
  const tekstPrimena = [texts.ansintetizator.tekstPrimena];
  const featuresPrimena = [
    { title: [texts.ansintetizator.featuresPrimena.kvalitet.key], description: [texts.ansintetizator.featuresPrimena.kvalitet.value]},
    { title: [texts.ansintetizator.featuresPrimena.dijakritike.key], description: [texts.ansintetizator.featuresPrimena.dijakritike.value] },
    { title: [texts.ansintetizator.featuresPrimena.stranereci.key], description: [texts.ansintetizator.featuresPrimena.stranereci.value]  },
    { title: [texts.ansintetizator.featuresPrimena.platforme.key], description: [texts.ansintetizator.featuresPrimena.platforme.value] },
  ];
  const subscriptionPackages = [
    {
        title: [texts.paket1.naslov],
        price: [`40e / ${texts.mesecna.mesec}`],
        features: [texts.paket1.karakteri, texts.paket1.karakterinakon, texts.paket1.glas],
        buttonText: [texts.dugme.izaberi]
    },
    {
        title: [texts.paket2.naslov],
        price: [`80e / ${texts.mesecna.mesec}`],
        features: [texts.paket2.karakteri, texts.paket2.karakterinakon, texts.paket2.glas],
        buttonText: [texts.dugme.izaberi]
    },
    {
        title: [texts.poslovni.naslov],
        features: [texts.poslovni.inhouse, texts.poslovni.paket, texts.poslovni.api],
        buttonText: [texts.dugme.upit]
    }
    ];
  const cardsPerPage = useCardsPerPage();
  return (
    <div className="medicta-page">
      <Hero
        imageSrc="/images/ansintetizator.png"
        altText="Ansintetizator Logo"
        text={texts.ansintetizator.naslov}
      />
      <Primena
        title={texts.velikinaslovi.primena}
        text={tekstPrimena}
        sliderData={featuresPrimena}
        cardsPerPage={cardsPerPage}
      />
      <SubscriptionSection
        title={texts.velikinaslovi.pretplate.ansintetizator}
        description={texts.pretplata.ansintetizator}
        packages={subscriptionPackages}
      />
    </div>
  );
}

export default Ansintetizator;
