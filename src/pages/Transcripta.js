import React from "react";
import Hero from "../components/Hero";
import Primena from "../components/Primena";
import SubscriptionSection from "../components/SubscriptionSection";
import useCardsPerPage from "../components/useCardsPerPage";
import { useLanguage } from '../components/LanguageContext';
import PrimenaSaVideom from "../components/PrimenaSaVideom";
import ResourceCard from "../components/ResourceCard";

function Transcripta() {
  const { texts } = useLanguage();
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
        price:  [`30€ / ${texts.mesecna.mesec}`, `300€ / ${texts.godisnja.godina}` ],
        features: [texts.osnovni.h30, texts.osnovni.nakonh30, texts.osnovni.dijarizacija, texts.osnovni.online],
        buttonText: [texts.dugme.izaberi, texts.dugme.izaberi],
        subtitle: [texts.mesecna.naslov, texts.godisnja.naslov],
        layoutOrder: ["title", "features","subtitle", "price", "button","subtitle","price", "button"],
        buttonVariants: ["small", "small"]
    },
    {
        title: [texts.premium.naslov],
        price: [`50€ / ${texts.mesecna.mesec}`, `500€ / ${texts.godisnja.godina}`],
        features: [texts.premium.h60, texts.premium.nakonh60, texts.premium.dijarizacija, texts.premium.online],
        buttonText: [texts.dugme.izaberi, texts.dugme.izaberi],
        subtitle: [texts.mesecna.naslov, texts.godisnja.naslov],
        layoutOrder: ["title", "features","subtitle", "price", "button","subtitle","price", "button"],
        buttonVariants: ["small", "small"]
    },
   
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
        title={texts.velikinaslovi.transcripta}
        text1={texts.transcripta.tekstPrimena1}
        imageSrc="/images/anSintetizator_img.jpg"
        sliderData={featuresPrimena}
        cardsPerPage={cardsPerPage}
        text2={texts.transcripta.tekstPrimena2}
      />
      <PrimenaSaVideom
        title={texts.velikinaslovi.videoTranscripta}
        text={texts.transcripta.tekstVideo}
        videoUrl="https://www.youtube.com/embed/uBeCkWphY_o?start=152"
        />
      <Primena
        title={texts.velikinaslovi.karakteristikeSistema}
        text1={tekstPrednosti}
        sliderData={featuresPrednosti}
        cardsPerPage={cardsPerPage}
      />
      <SubscriptionSection
        title={texts.velikinaslovi.pretplate.transcripta}
        description={texts.pretplata.transcripta}
        packages={subscriptionPackages}
      />
      <ResourceCard
        title={texts.transcripta.naslovResource}
        description={texts.transcripta.description}
        buttonText={texts.dugme.upit}
        noStyle={true}
      />
    </div>
  );
}

export default Transcripta;
