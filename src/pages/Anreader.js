import React from "react";
import Hero from "../components/Hero";
import Primena from "../components/Primena";
import SubscriptionSection from "../components/SubscriptionSection";

const tekstPrimena = (
    <>
      AnReader je sistem za sintezu govora prevashodno namenjen slepim i slabovidim osobama. Softver podržava Microsoft SAPI4 i SAPI5 infterfejse, tako da se može se koristiti uz sve poznatije programe za čitanje ekrana (NVDA, JAWS, Window-Eyes, Dolphin ScreenReader...). Poseduje sve funkcionalnosti sistema AlfaNum TTS.
      <br />
      AnReader mogu da koriste i osobe sa drugim tipovima invaliditeta. Osobe koje boluju od multiple skleroze i osobe sa dečijom i cerebralnom paralizom često nisu sposobne same da čitaju jer im to predstavlja izuzetan napor. Nemi bi mogli da otkucaju ono što žele da računar kaže umesto njih. Osobe sa disleksijom imaju teškoća u čitanju, kako u pogledu brzine čitanja tako i tačnosti, što utiče i na nivo razumevanja pročitanog. Sve to utiče na njihovu samostalnost kako u životu, tako i u radu, što posebno pogađa decu i mlade kao ličnosti u razvoju.
      <br />
      AnReader može biti veoma koristan u procesu obrazovanja i kada su svi ostali u pitanju. On daje mogućnost da se pojedine lekcije i drugi tekstualni materijali pretvore u audio fajlove i stave na raspolaganje svima. Zahvaljujući tome, svako može da uči (preko mobilnog telefona i MP3 plejera) čak i u situacijama kada to inače ne bi mogao (na putu, tokom fizičkih aktivnosti i slično).
      <br /><br />
      Program možete preuzeti sa{" "}
      <a href="https://anreader.alfanum.co.rs/" target="_blank" rel="noopener noreferrer" className="download-link">
        AnReader download strane
      </a>.
    </>
  );
const subscriptionPackages = [
{
    title: "Tromesečni paket",
    price: "30e / mes",
    features: ["30h mesečno", "1.2e/h nakon toga", "Dijarizacija", "Online editor"],
    buttonText: "Izaberi"
},
{
    title: "Godišnja licenca",
    price: "50e / mes",
    features: ["60h mesečno", "1e/h nakon toga", "Dijarizacija", "Online editor"],
    buttonText: "Izaberi"
},
];

function Anreader() {
  return (
    <div className="medicta-page">
      <Hero
        imageSrc="/images/anreader.png"
        altText="Anreader Logo"
        text="Sistem za sintezu govora na srpskom jeziku, namenjen prevashodno slepim i slabovidim korisnicima"
      />
      <Primena
        title="Primena"
        text={tekstPrimena}
      />
      <SubscriptionSection
        title="Paketi pretplate za AnReader softver"
        description={`AnReader softver može se nabaviti preko RFZO kao osnovno pomagalo za slepe i slabovide. Ukoliko Vam je softver potreban za ličnu upotrebu, a ne ostvarujete pravo preko RFZO, možete ga kupiti kroz nekoliko različitih paketa.
`}
        packages={subscriptionPackages}
      />
    </div>
  );
}

export default Anreader;
