import React from "react";
import Hero from "../components/Hero";
import Primena from "../components/Primena";
import SubscriptionSection from "../components/SubscriptionSection";
import PrimenaSaVideom from "../components/PrimenaSaVideom";
import useCardsPerPage from "../components/useCardsPerPage";
import { useLanguage } from '../components/LanguageContext';
import ResourceCard from "../components/ResourceCard";


function Iurisdicta() {
  const { texts } = useLanguage();
  const tekstPrimena = [texts.iurisdicta.tekstPrimena];
  const tekstPrednosti = [texts.iurisdicta.tekstPrednosti];
  const featuresPrimena = [
    { title: [texts.iurisdicta.featuresPrimena.akronim.key], description: [texts.iurisdicta.featuresPrimena.akronim.value]},
    { title: [texts.iurisdicta.featuresPrimena.imena.key], description: [texts.iurisdicta.featuresPrimena.imena.value] },
    { title: [texts.iurisdicta.featuresPrimena.formatiranje.key], description: [texts.iurisdicta.featuresPrimena.formatiranje.value]  },
    { title: [texts.iurisdicta.featuresPrimena.komande.key], description: [texts.iurisdicta.featuresPrimena.komande.value] },
    { title: [texts.iurisdicta.featuresPrimena.ispravke.key], description: [texts.iurisdicta.featuresPrimena.ispravke.value]},
    { title: [texts.iurisdicta.featuresPrimena.sabloni.key], description: [texts.iurisdicta.featuresPrimena.sabloni.value] },
    { title: [texts.iurisdicta.featuresPrimena.personalizacija.key], description: [texts.iurisdicta.featuresPrimena.personalizacija.value] },
    { title: [texts.iurisdicta.featuresPrimena.recnik.key], description: [texts.iurisdicta.featuresPrimena.recnik.value] },
    { title: [texts.iurisdicta.featuresPrimena.rezim.key], description: [texts.iurisdicta.featuresPrimena.rezim.value] },
  ];
  const featuresPrednosti = [
    { title: [texts.iurisdicta.featuresPrednosti.integracija.key], description: [texts.iurisdicta.featuresPrednosti.integracija.value] },
    { title: [texts.iurisdicta.featuresPrednosti.klijentserver.key], description: [texts.iurisdicta.featuresPrednosti.klijentserver.value] },
    { title: [texts.iurisdicta.featuresPrednosti.sigurnost.key], description: [texts.iurisdicta.featuresPrednosti.sigurnost.value] },
    { title: [texts.iurisdicta.featuresPrednosti.racunari.key], description: [texts.iurisdicta.featuresPrednosti.racunari.value] },
  ];
  const subscriptionPackages = [
    {
        title: [texts.mesecna.naslov],
        price:  [`60e / ${texts.mesecna.mesec}`],
        features: [texts.mesecna.koriscenje, texts.mesecna.govornik, texts.mesecna.podrska],
        buttonText: [texts.dugme.izaberi]
    },
    {
        title: [texts.godisnja.naslov],
        price:  [`600e / ${texts.godisnja.godina}`],
        features: [texts.mesecna.koriscenje, texts.godisnja.govornik, texts.godisnja.podrska],
        buttonText: [texts.dugme.izaberi]
    }
    ];
  const cardsPerPage = useCardsPerPage();
  return (
    <div className="medicta-page">
      <Hero
        imageSrc="/images/iurisdicta2.png"
        altText="Iurisdicta Logo"
        text={texts.iurisdicta.naslov}
      />
      <Primena
        title={texts.velikinaslovi.iurisdicta}
        text1={tekstPrimena}
        sliderData={featuresPrimena}
        cardsPerPage={cardsPerPage}
      />
      <PrimenaSaVideom
        title={texts.velikinaslovi.iurisdicta}
        text={texts.iurisdicta.tekstVideo}
        videoUrl="https://www.youtube.com/embed/uBeCkWphY_o?start=152"
        />
      <Primena
        title={texts.velikinaslovi.prednostiInstitucije}
        text1={tekstPrednosti}
        sliderData={featuresPrednosti}
        cardsPerPage={cardsPerPage}
      />
      <SubscriptionSection
        title={texts.velikinaslovi.pretplate.iurisdicta}
        description={texts.pretplata.iurisdicta}
        packages={subscriptionPackages}
      />
      <ResourceCard
        title={texts.iurisdicta.naslovResource}
        description={texts.iurisdicta.description}
        buttonText={texts.dugme.upit}
        noStyle={true}
      />
    </div>
  );
}

export default Iurisdicta;
