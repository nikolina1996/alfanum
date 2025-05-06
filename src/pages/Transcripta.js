import React from "react";
import Hero from "../components/Hero";
import Primena from "../components/Primena";
import SubscriptionSection from "../components/SubscriptionSection";
import useCardsPerPage from "../components/useCardsPerPage";

const tekstPrimena = `TRANSCRIPTA je proizvod namenjen transkripciji govora bez ograničenja na specifičan domen. Ovaj sistem pogodan je za transkripciju različitih vrsta audio-zapisa, od telefonskih razgovora i sastanaka, preko intervjua i emisija, do ročišta i sednica. Odlikuje ga izuzetna fleksibilnost u transkripciji, odnosno, praktično neograničen vokabular. Pored mogućnosti transkripcije, TRANSCRIPTA poseduje i mogućnost dijarizacije (razdvajanja teksta po govornicima) uz tačnu identifikaciju položaja svake prepoznate reči u odgovarajućem audiosnimku. Odgovarajući postprocesing automatski otklanja deo grešaka u transkriptu, dok efikasan korisnički interfejs omogućuje preslušavanje radi eventualne korekcije transkripta.`;

const tekstPrednosti = `TRANSCRIPTA funkcioniše u okviru klijent-server arhitekture. Konverzija govora u tekst vrši se na serveru, a klijentske aplikacije mogu da se postave na više računara, pri čemu se sve obraćaju serveru za uslugu konverzije. Samo server zahteva specifičan hardver, dok računari sa kojih se koriste klijentske aplikacije mogu da budu proizvoljnih konfiguracija. 
                        Sistem se realizuje kao cloud ili on-premise rešenje. Cloud rešenje podrazumeva da se sama konverzija govora u tekst vrši na udaljenim serverima, što iziskuje da se audio podaci šalju van istitucije, što je izuzetno rizično kada je reč o poverljivim podacima, pogotovo kada su u pitanju serveri u drugim država i u vlasništvu drugih institucija. Zato je AlfaNum jedno od retkih preduzeća koje nudi i on-premise rešenje, što znači da se server instalira u instituciji korisnika. Samim tim, konverzija govora u tekst izvršava se na hardveru korisnika i podaci ne izlaze na javnu mrežu, što znači da je njihova privatnost apsolutno garantovana.`;
const featuresPrimena = [
  { title: "Pojedinci", description: "Transkripcija podkasta, emisija i ostalih audio i video materijala - povećajte SEO, unapredite vidljivost i povećajte svoju publiku." },
  { title: "Preduzeća", description: "Snimanje sastanaka, predavanja i drugih događaja omogućava da sve ostane zabeleženo - transkripcija Vam omogućava kasnije brzo i jednostavno pretraživanje i analizu sadržaja." },
  { title: "Medijske kuće", description: "Omogućava titlovanje, lakši prevod i pravljenje arhiva koje se mogu jednostavno pretraživati." },
  { title: "Sudovi", description: "Brza i jednostavna transkripcija ročišta uz automatsko razdvajanje transkripcije po govorniku." },
  { title: "Ostali", description: "Transkripcija intervjua, različitih uviđaja, nastavnih materijala i još mnogo toga." },
];
const featuresPrednosti = [
    { title: "Tačnost", description: "Tačnost sistema je 90% na nivou reči, a preko 95% na nivou karaktera (slova)." },
    { title: "Interpukcija", description: "Sistem postavlja znakove interpunkcije i velika slova na logična mesta." },
    { title: "Jezik", description: "Podržava srpski jezik (ekavski i ijekavski izgovor), hrvatski i srodne jezike, ali i engleski, ruski i mnoge druge." },
    { title: "Brzina", description: "Zavisno od hardvera, može da radi i znatno brže od realnog vremena (npr. da transkribuje snimak od 1h za nekoliko minuta)." },
    { title: "Editor", description: "Poseduje i grafički korisnički interfejs za jednostavnu korekciju transkripcije." },
  ];
const subscriptionPackages = [
{
    title: "Osnovni paket",
    price: "30e / mes",
    features: ["30h mesečno", "1.2e/h nakon 30h", "Dijarizacija", "Online editor"],
    buttonText: "Izaberi"
},
{
    title: "Premium paket",
    price: "50e / mes",
    features: ["60h mesečno", "1e/h nakon 30h", "Dijarizacija", "Online editor"],
    buttonText: "Izaberi"
},
{
    title: "Poslovni paket",
    features: ["Mogućnost in-house servera", "Kastomizacija aplikacije", "Prilagođeni paketi", "Dostupan API"],
    buttonText: "Pošalji upit"
}
];

function Transcripta() {
  const cardsPerPage = useCardsPerPage();
  return (
    <div className="medicta-page">
      <Hero
        imageSrc="/images/transcripta2.png"
        altText="Transcripta Logo"
        text="Softver za pretvaranje govora u tekst od sada i na srpskom jeziku za sve vrste audio i video snimaka"
      />
      <Primena
        title="Primena"
        text={tekstPrimena}
        sliderData={featuresPrimena}
        cardsPerPage={cardsPerPage}
      />
      <Primena
        title="Karakteristike sistema"
        text={tekstPrednosti}
        sliderData={featuresPrednosti}
        cardsPerPage={cardsPerPage}
      />
      <SubscriptionSection
        title="Paketi pretplate za TRANSCRIPTA web portal"
        description={`Za privatne korisnike nudimo dva paketa pretplate za korišćenje Transcripte putem web portala sa dostupnim svim funkcionalnostima - transkripcija, dijarizacija i online tekst editor. Prvih 10 minuta je besplatno, pa napravite nalog i isprobajte portal pre same pretplate. Prepoznavanje se vrši na našim serverima, stoga je moguće portalu pristupiti sa bilo kog uređaja putem browser-a.
        Za poslovne korisnike postoje razne mogućnosti - od raznih specijalno kreiranih cloud-based paketa prema potrebama korisnika, do kastomizovanih aplikacija i on-premise rešenja. Budite slobodni da nam pošaljete upit, kako bismo pripremili ponudu koja će Vam odgovarati.`}
        packages={subscriptionPackages}
      />
    </div>
  );
}

export default Transcripta;
