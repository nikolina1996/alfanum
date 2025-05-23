import React from "react";
import Hero from "../components/Hero";
import Primena from "../components/Primena";
import SubscriptionSection from "../components/SubscriptionSection";
import useCardsPerPage from "../components/useCardsPerPage";
import { useLanguage } from '../components/LanguageContext';

function Medicta() {
  const { texts } = useLanguage();
  const tekstPrimena = [texts.medicta.tekstPrimena];
  const tekstPrednosti = [texts.medicta.tekstPrednosti];
  const featuresPrimena = [
    { title: [texts.medicta.featuresPrimena.akronim.key], description: [texts.medicta.featuresPrimena.akronim.value]},
    { title: [texts.medicta.featuresPrimena.latinski.key], description: [texts.medicta.featuresPrimena.latinski.value] },
    { title: [texts.medicta.featuresPrimena.formatiranje.key], description: [texts.medicta.featuresPrimena.formatiranje.value]  },
    { title: [texts.medicta.featuresPrimena.komande.key], description: [texts.medicta.featuresPrimena.komande.value] },
    { title: [texts.medicta.featuresPrimena.ispravke.key], description: [texts.medicta.featuresPrimena.ispravke.value]},
    { title: [texts.medicta.featuresPrimena.sabloni.key], description: [texts.medicta.featuresPrimena.sabloni.value] },
    { title: [texts.medicta.featuresPrimena.personalizacija.key], description: [texts.medicta.featuresPrimena.personalizacija.value] },
    { title: [texts.medicta.featuresPrimena.recnik.key], description: [texts.medicta.featuresPrimena.recnik.value] },
    { title: [texts.medicta.featuresPrimena.rezim.key], description: [texts.medicta.featuresPrimena.rezim.value] },
  ];
  const featuresPrednosti = [
    { title: [texts.medicta.featuresPrednosti.prilagodjenja.key], description: [texts.medicta.featuresPrednosti.prilagodjenja.value] },
    { title: [texts.medicta.featuresPrednosti.integracija.key], description: [texts.medicta.featuresPrednosti.integracija.value] },
    { title: [texts.medicta.featuresPrednosti.klijentserver.key], description: [texts.medicta.featuresPrednosti.klijentserver.value] },
    { title: [texts.medicta.featuresPrednosti.sigurnost.key], description: [texts.medicta.featuresPrednosti.sigurnost.value] },
    { title: [texts.medicta.featuresPrednosti.racunari.key], description: [texts.medicta.featuresPrednosti.racunari.value] },
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
        price: [`600e / ${texts.godisnja.godina}`],
        features: [texts.godisnja.koriscenje, texts.godisnja.govornik, texts.godisnja.podrska],
        buttonText: [texts.dugme.izaberi]
    },
    {
        title:  [texts.poslovni.naslov],
        features: [texts.poslovni.inhouse, texts.poslovni.kastomizacija, texts.poslovni.paket],
        buttonText: [texts.dugme.upit]
    }
    ];
  const cardsPerPage = useCardsPerPage();
  return (
    <div className="medicta-page">
      <Hero
        imageSrc="/images/medicta2.png"
        altText="Medicta Logo"
        text={texts.medicta.naslov}
      />
      <Primena
        title={texts.velikinaslovi.primena}
        text={tekstPrimena}
        sliderData={featuresPrimena}
        cardsPerPage={cardsPerPage}
      />
      <Primena
        title={texts.velikinaslovi.prednostiInstitucije}
        text={tekstPrednosti}
        sliderData={featuresPrednosti}
        cardsPerPage={cardsPerPage}
      />
      <SubscriptionSection
        title={texts.velikinaslovi.pretplate.medicta}
        description={texts.pretplata.medicta}
        packages={subscriptionPackages}
      />
    </div>
  );
}

export default Medicta;
