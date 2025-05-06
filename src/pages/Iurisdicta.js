import React from "react";
import Hero from "../components/Hero";
import Primena from "../components/Primena";
import SubscriptionSection from "../components/SubscriptionSection";
import PrimenaSaVideom from "../components/PrimenaSaVideom";
import useCardsPerPage from "../components/useCardsPerPage";


const tekstPrimena = `IURISDICTA sistem za diktiranje pravnih dokumenata, odnosno, automatsko sastavljanje tekstualnih dokumenata na osnovu diktiranog teksta, ima za cilj da poveća efikasnost pravnika (sudija, advokata i drugih) i omogući im da se fokusiraju na važnije aspekte svog posla.
Sistem je specijalizovan za pravni rečnik, pa prepoznaje prirodno izgovoren tekst praktično bez greške na računaru prosečnih karakteristika u realnom vremenu. Omogućen je besplatan test period za svakog korisnika.`;

const tekstPrednosti = `Mnogo više detalja o sistemu i mogućnostima da ga prilagodite svojim potrebama možete saznati iz korisničkog uputstva. Pored svih navedenih prednosti, za korišćenje IURISDICTA sistema nije Vam potreban posebno jak ili skup računar, jer konverziju govora u tekst ne vrši računar na kom radite već server na koji je on povezan. U slučaju pojedinačnih korisnika preporučuje se da to bude server kompanije „AlfaNum“, sa kojim će Vaš računar biti povezan preko interneta, dok se većim institucijama preporučuje instalacija posebnog IURISDICTA servera u prostorijama institucije, koji bi mogao da koristi i veći broj zaposlenih.
Zahvaljujući najsavremenijim tehnikama otklanjanja buke, kao i mogućnosti adaptacije na glas korisnika, IURISDICTA sistem možete koristiti i sa mikrofonom prosečnog kvaliteta, u standardnim uslovima kancelarijske buke. IURISDICTA uspešno prepoznaje i vrlo tih govor, dokle god je koliko-toliko razumljiv, što je posebno važno onima koji ordinaciju dele sa kolegama. U takvim situacijama veoma korisni su posebni mikrofoni (usmereni i/ili naglavni), koje AlfaNum nudi po i dalje vrlo pristupačnim cenama.`;
const featuresPrimena = [
  { title: "Akronimi", description: "Prepoznaje i interpretira akronime, merne jedinice, pravnu terminologiju i dr." },
  { title: "Imena", description: "Rečnik je obogađen mnoštvom vlastitih imena karakterističnih za srpsko područje." },
  { title: "Formatiranje", description: "Diktirajte interpunkciju i glasom formatirajte tekst." },
  { title: "Komande", description: 'Podržava specijalne komande poput: "obriši reč", "kraj diktata" i dr.' },
  { title: "Ručne ispravke", description: "Omogućuje efikasan unos ručnih ispravki." },
  { title: "Šabloni", description: "Podržava korišćenje šablona, čime se izbegava diktiranje tipskih delova pravnih dokumenata." },
  { title: "Personalizacija", description: "Formiranje rečnika na osnovu Vaših prethodnih nalaza." },
  { title: "Rečnik", description: "Samostalno možete dodati reč u rečnik ili izbaciti neku koju ne koristite, a često se javi kao pogrešno prepoznata." },
  { title: "Režim trake", description: "Možete diktirati u bilo koju eksternu aplikaciju koja podržava rad sa tekstom." },
];
const featuresPrednosti = [
    { title: "Integracija", description: "Može se lako integrisati u bilo koji postojeći sistem i aplikaciju koje su već u upotrebi." },
    { title: "Klijent-server", description: "Ovakva arhitektura omogućava da se prepoznavanje radi na jednom centralizovanom serveru, u cloud-u ili fizički lociranom u instituciji." },
    { title: "Sigurnost", description: "Sa serverom lociranim u instituciji, snimci ne izlaze na javnu mrežu, čime je sigurnost apsolutno garantovana." },
    { title: "Računari", description: "Sam server mora da ima određene hardverske zahteve, dok su računari za krajnje korisnike prosečni računari, nema potrebe za nabavkom novih i jačih." },
  ];
const subscriptionPackages = [
{
    title: "Mesečna pretplata",
    price: "60e / mes",
    features: ["Do 30h diktata mesečno", "Za jednog govornika", "Online podrška"],
    buttonText: "Izaberi"
},
{
    title: "Godišnja pretplata",
    price: "600e / god",
    features: ["Do 30h diktata mesečno", "Za jednog govornika", "Online podrška"],
    buttonText: "Izaberi"
},
{
    title: "Poslovni paket",
    features: ["Mogućnost in-house servera", "Kastomizacija aplikacije", "Prilagođeni paketi"],
    buttonText: "Pošalji upit"
}
];

function Iurisdicta() {
  const cardsPerPage = useCardsPerPage();
  return (
    <div className="medicta-page">
      <Hero
        imageSrc="/images/iurisdicta2.png"
        altText="Iurisdicta Logo"
        text="Softver za diktiranje pravnih dokumenata od sada i na srpskom jeziku sa podržanim vlastitim imenima i skraćenicama"
      />
      <Primena
        title="Primena"
        text={tekstPrimena}
        sliderData={featuresPrimena}
        cardsPerPage={cardsPerPage}
      />
      <Primena
        title="Prednosti za institucije"
        text={tekstPrednosti}
        sliderData={featuresPrednosti}
        cardsPerPage={cardsPerPage}
      />
      <PrimenaSaVideom
        title="Pogledajte kako funkcioniše IURISDICTA"
        text="Kratak video demonstrira kako IURISDICTA funkcioniše u realnom okruženju. Pogledajte video kako se koristi i kakve rezultate daje i procenite kako bi ovaj alat mogao unaprediti Vaš rad."
        videoUrl="https://www.youtube.com/embed/uBeCkWphY_o?start=152"
        />
      <SubscriptionSection
        title="Paketi pretplate za IURISDICTA aplikaciju"
        description={`Za privatne korisnike nudimo dva paketa pretplate za korišćenje Iurisdicta aplikacije. Prve dve nedelje su besplatne, pa se prijavite i na mail ćete dobiti aplikaciju i uputstvo za instalaciju. Isprobajte pre same pretplate. Prepoznavanje se vrši na našim serverima, stoga je moguće aplikaciju koristiti sa bilo kog windows računara.
                      Za poslovne korisnike postoje razne mogućnosti - od raznih specijalno kreiranih cloud-based paketa prema potrebama korisnika, do kastomizovanih aplikacija i on-premise rešenja. Budite slobodni da nam pošaljete upit, kako bismo pripremili ponudu koja će Vam odgovarati.`}
        packages={subscriptionPackages}
      />
    </div>
  );
}

export default Iurisdicta;
