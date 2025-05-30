import React from "react";
import Hero from "../components/Hero";
import Primena from "../components/Primena";
import PrimenaSaVideom from "../components/PrimenaSaVideom";
import SubscriptionSection from "../components/SubscriptionSection";
import useCardsPerPage from "../components/useCardsPerPage";
import { useLanguage } from '../components/LanguageContext';
import ResourceCard from "../components/ResourceCard";


function Ansintetizator() {
  const { texts } = useLanguage();
  const featuresPrimena = [
    { title: [texts.ansintetizator.featuresPrimena.kvalitet.key], description: [texts.ansintetizator.featuresPrimena.kvalitet.value]},
    { title: [texts.ansintetizator.featuresPrimena.dijakritike.key], description: [texts.ansintetizator.featuresPrimena.dijakritike.value] },
    { title: [texts.ansintetizator.featuresPrimena.stranereci.key], description: [texts.ansintetizator.featuresPrimena.stranereci.value]  },
    { title: [texts.ansintetizator.featuresPrimena.platforme.key], description: [texts.ansintetizator.featuresPrimena.platforme.value] },
  ];
  const subscriptionPackages = [
    {
        title: [texts.paket1.naslov],
        features: [texts.paket1.karakteri, texts.paket1.karakterinakon, texts.paket1.glas],
        price: [`40€ / ${texts.mesecna.mesec}`, `400€ / ${texts.godisnja.godina}`],
        buttonText: [texts.dugme.izaberi, texts.dugme.izaberi],
         subtitle: [texts.mesecna.naslov, texts.godisnja.naslov],
        layoutOrder: ["title", "features","subtitle", "price", "button","subtitle","price", "button"],
        buttonVariants: ["small", "small"]
      },  
    {
        title: [texts.paket2.naslov],
        price: [`80€ / ${texts.mesecna.mesec}`, `800€/ ${texts.godisnja.godina}`],
        features: [texts.paket2.karakteri, texts.paket2.karakterinakon, texts.paket2.glas],
        buttonText: [texts.dugme.izaberi, texts.dugme.izaberi],
        subtitle: [texts.mesecna.naslov, texts.godisnja.naslov],
        layoutOrder: ["title", "features","subtitle", "price", "button","subtitle","price", "button"],
        buttonVariants: ["small", "small"]
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
        title={texts.velikinaslovi.ansintetizator}
        text1={texts.ansintetizator.tekstPrimena1}
        imageSrc="/images/anSintetizator_img.jpg"
        text2={texts.ansintetizator.tekstPrimena2}
        sliderData={featuresPrimena}
        cardsPerPage={cardsPerPage}
      />
      <PrimenaSaVideom
        title={texts.velikinaslovi.videoAnsintetizator}
        text={texts.ansintetizator.tekstVideo}
        videoUrl="https://www.youtube.com/embed/uBeCkWphY_o?start=152"
        />
      <SubscriptionSection
        title={texts.velikinaslovi.pretplate.ansintetizator}
        description={texts.pretplata.ansintetizator}
        packages={subscriptionPackages}
      />
       <ResourceCard
        title={texts.ansintetizator.naslovResource}
        description={texts.ansintetizator.description}
        buttonText={texts.dugme.upit}
        noStyle={true}
      />
    </div>
   
  );
}

export default Ansintetizator;
