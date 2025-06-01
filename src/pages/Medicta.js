import React from "react";
import Hero from "../components/Hero";
import Primena from "../components/Primena";
import SubscriptionSection from "../components/SubscriptionSection";
import useCardsPerPage from "../components/useCardsPerPage";
import { useLanguage } from '../components/LanguageContext';
import PrimenaSaVideom from "../components/PrimenaSaVideom";
import ResourceCard from "../components/ResourceCard";

function Medicta() {
  const { texts } = useLanguage();
  const tekstPrednosti1 = (
  <>
    {texts.medicta.tekstPrednosti1}
    <a href=" https://www.alfanum.co.rs/images/medicta_korisnicko_uputstvo.pdf" target="_blank" rel="noopener noreferrer" className="download-link">
      {texts.medicta.strana}
    </a>{texts.medicta.tekstPrednosti2}{" "}
  </>
  );
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
        price:  [`60€ / ${texts.mesecna.mesec}`],
        features: [texts.mesecna.koriscenje, texts.mesecna.govornik, texts.mesecna.podrska],
        buttonText: [texts.dugme.izaberi]
    },
    {
        title: [texts.godisnja.naslov],
        price: [`600€ / ${texts.godisnja.godina}`],
        features: [texts.godisnja.koriscenje, texts.godisnja.govornik, texts.godisnja.podrska],
        buttonText: [texts.dugme.izaberi]
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
        title={texts.velikinaslovi.medicta}
        text1={texts.medicta.tekstPrimena1}
        imageSrc="/images/medicta_img.jpg"
        text2={texts.medicta.tekstPrimena2}
        sliderData={featuresPrimena}
        cardsPerPage={cardsPerPage}
      />
      <PrimenaSaVideom
        title={texts.velikinaslovi.videoMedicta}
        text={texts.medicta.tekstVideo}
        videoUrl="https://www.youtube.com/embed/uBeCkWphY_o?start=152"
        />
      <Primena
        title={texts.velikinaslovi.prednostiInstitucije}
        text1={tekstPrednosti1}
        sliderData={featuresPrednosti}
        cardsPerPage={cardsPerPage}
      />
      <SubscriptionSection
        title={texts.velikinaslovi.pretplate.medicta}
        description={texts.pretplata.medicta}
        packages={subscriptionPackages}
      />
      <ResourceCard
        title={texts.medicta.naslovResource}
        description={texts.medicta.description}
        buttonText={texts.dugme.upit}
        noStyle={true}
      />
    </div>
  );
}

export default Medicta;
