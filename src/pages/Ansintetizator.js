import React from "react";
import Hero from "../components/Hero";
import Primena from "../components/Primena";
import SubscriptionSection from "../components/SubscriptionSection";
import useCardsPerPage from "../components/useCardsPerPage";

const tekstPrimena = `AlfaNum TTS je sistem za sintezu govora na osnovu teksta sa ugrađenim elementima prirodne intonacije i važi za najbolji sintetizator na teritoriji cele bivše Jugoslavije. Postoje verzije za srpski, hrvatski i crnogorski jezik sa nekoliko govornika na raspolaganju (muških i ženskih), a ugrađeni elementi intonacije (akcentuacija) značajno doprinose razumljivosti generisanog govora. Ovo je takođe jedna od osnovnih softverskih komponenata koja izdvaja preduzeće AlfaNum od ostalih, može se koristiti zasebno, ali se može i ugraditi u mnoštvo različitih krajnjih rešenja i aplikacija. Dostupna je putem web portala, ali i API-ja. Sinteza se može odvijati u cloud-u ili na namenskom serveru instaliranom u Vašoj instituciji. Osobine AlfaNum TTS softvera su sledeće:`;

const featuresPrimena = [
  { title: "Kvalitet", description: "Kvalitet glasa je približan ljudskom govoru." },
  { title: "Dijakritike", description: "Čita čak i slova bez dijakritika na ispravan način." },
  { title: "Strane reči", description: "Ume da pročita na odgovarajuć način i mnoštvo stranih reči." },
  { title: "Platforme", description: "Raspoloživ je na PC i Android platformama." },
];
const subscriptionPackages = [
{
    title: "Paket 1",
    price: "40e / mes",
    features: ["200.000 karaktera/mes", "0.25e/1000 karaktera nakon toga", "Izbor glasa"],
    buttonText: "Izaberi"
},
{
    title: "Paket 2",
    price: "80e / mes",
    features: ["600.000 karaktera/mes", "0.17e/1000 karaktera nakon toga", "Izbor glasa"],
    buttonText: "Izaberi"
},
{
    title: "Poslovni paket",
    features: ["Mogućnost in-house servera", "Prilagođeni paketi", "Dostupan API"],
    buttonText: "Pošalji upit"
}
];

function Ansintetizator() {
  const cardsPerPage = useCardsPerPage();
  return (
    <div className="medicta-page">
      <Hero
        imageSrc="/images/ansintetizator.png"
        altText="Ansintetizator Logo"
        text="Softver za pretvaranje teksta u govor koji zvuči potpuno prirodno i to na srpskom jeziku, ali i hrvatskom i crnogorskom"
      />
      <Primena
        title="Primena"
        text={tekstPrimena}
        sliderData={featuresPrimena}
        cardsPerPage={cardsPerPage}
      />
      <SubscriptionSection
        title="Paketi pretplate za TTS web portal"
        description={`Za privatne korisnike nudimo dva paketa pretplate za korišćenje TTS web portala. Prvih 10 minuta je besplatno, pa napravite nalog i isprobajte portal pre same pretplate. Sinteza se vrši na našim serverima, stoga je moguće portalu pristupiti sa bilo kog uređaja putem browser-a.
                      Za poslovne korisnike postoje razne mogućnosti - od raznih specijalno kreiranih cloud-based paketa prema potrebama korisnika, do kastomizovanih aplikacija i on-premise rešenja. Budite slobodni da nam pošaljete upit, kako bismo pripremili ponudu koja će Vam odgovarati.`}
        packages={subscriptionPackages}
      />
    </div>
  );
}

export default Ansintetizator;
