import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MissionCard from '../components/MissionCard';

const Company = () => {
  const location = useLocation();
  const sectionRef = useRef(null);
  const direktoriRef = useRef(null);
  const kompanijaRef = useRef(null);
  const [triggeredCards, setTriggeredCards] = useState([false, false, false]);
  const [triggeredDirectors, setTriggeredDirectors] = useState([false, false, false, false]);
  const [triggeredCompanyText, setTriggeredCompanyText] = useState(false);

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo) || document.querySelector(`.${location.state.scrollTo}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          [0, 1, 2].forEach((index) => {
            setTimeout(() => {
              setTriggeredCards((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }, index * 350);
          });
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          [0, 1, 2, 3].forEach((index) => {
            setTimeout(() => {
              setTriggeredDirectors((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }, index * 350);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (direktoriRef.current) {
      observer.observe(direktoriRef.current);
    }

    return () => {
      if (direktoriRef.current) observer.unobserve(direktoriRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggeredCompanyText(true);
        }
      },
      { threshold: 0.3 }
    );

    if (kompanijaRef.current) {
      observer.observe(kompanijaRef.current);
    }

    return () => {
      if (kompanijaRef.current) observer.unobserve(kompanijaRef.current);
    };
  }, []);

  const direktoriData = [
    {
      ime: "Vlado Delić",
      opis: `Dr Vlado Delić (1964) je redovni profesor na Fakultetu tehničkih nauka Univerziteta u Novom Sadu i rukovodilac je na nekoliko razvojno-istraživačkih projekata na ovom fakultetu. Uža oblast rada profesora Delića je akustika, audio inženjerstvo i obrada signala, kao i razvoj govornih tehnologija. Okupio je tim izuzetnih mladih stručnjaka i sa njima izgradio poziciju regionalnog lidera u razvoju i primeni govornih tehnologija. Autor je i koautor više knjiga, 4 patenta i 10 tehničkih rešenja, kao i više od 250 naučnih radova objavljenih u naučnim časopisima i na konferencijama.`,
      slika: "images/vlado.jpg"
    },
    {
      ime: "Darko Pekar",
      opis: `Dr Darko Pekar (1972), diplomirao je na Fakultetu tehničkih nauka Univerziteta u Novom Sadu. Jedan je od vodećih eksperata uspešnog razvojnog tima iz oblasti govornih tehnologija na FTN, u kojem je stekao bogato iskustvo u razvoju aplikacija, kao i u menadžmentu naučno-tehnoloških projekata. Od 2003. godine je na poziciji direktora AlfaNuma, i u saradnji sa timom sa FTN upravlja zajedničkim radom i razvojem aplikacija iz oblasti govornih tehnologija. Autor je nekoliko uspešnih proizvoda i usluga zasnovanih na govornim tehnologijama. Iako je fokusiran na praktičan razvoj i izlazak na tržište ASR i TTS proizvoda, ima i bogatu naučnu produkciju - objavio je preko 70 radova na konferencijama i u naučnim časopisima, preko 20 tehničkih rešenja i 5 patenata.`,
      slika: "images/darko.png"
    },
    {
      ime: "Milan Sečujski",
      opis: `Dr Milan Sečujski (1975) je vanredni profesor i istraživač na Fakultetu tehničkih nauka u Novom Sadu. Bavi se razvojem govornih tehnologija, posebno sa lingvističkog aspekta. Već više od 15 godina predvodi istraživačko-razvojni tim na FTN i u AlfaNumu u oblasti sinteze govora, a radi i na razvoju govorno-jezičkih resursa na koje se oslanjaju brojna razvijena rešenja u oblasti govornih tehnologija. Njegovo poznavanje fonetike, morfologije, sintakse i prozodije južnoslovenskih jezika predstavlja važan oslonac tima sa FTN. Autor je i koautor preko 100 radova objavljenih u naučnim časopisima i na konferencijama, uključujući i 10 realizovanih tehničkih rešenja. Dobitnik je prestižne Pupinove nagrade Matice srpske za svoj magistarski rad u oblasti sinteze govora na srpskom jeziku.`,
      slika: "images/milan.png"
    },
    {
      ime: "Goran Đaković",
      opis: `Goran Đaković (1961) je po završetku američke srednje škole u Hagu (Holandija) upisao Elektrotehnički fakultet Univerziteta u Beogradu. Kompaniju Saga osnovao je 1989. godine, koja je pod njegovim vođstvom već skoro čitavu deceniju sistem integrator broj jedan u Srbiji (prema zvaničnim finansijskim izveštajima). Gospodin Đaković poseduje dugogodišnje iskustvo u poslovanju sa istaknutim multinacionalnim kompanijama i sarađuje sa rukovodiocima najvišeg nivoa, kao i sa vladinim i političkim zvaničnicima. Član je Srpske asocijacije menadžera, predsednik je Upravnog odbora Udruženja informatičke delatnosti Privredne komore Beograda, član je Upravnog odbora Privredne komore Beograda i Privredne komore Srbije, kao i mnogih drugih poslovnih i stručnih udruženja.`,
      slika: "images/goran.png"
    }
  ];

  return (
    <div className="company-container">
      <div className="naslovi" id="naslovKompanija">
        <h4>Profil kompanije</h4>
      </div>

      <div
        className={`o-kompaniji fade-section ${triggeredCompanyText ? 'visible' : ''}`}
        ref={kompanijaRef}
      >
        <p> AlfaNum je inovativno preduzeće koje okuplja tim eksperata koji od 2003. godine nastoji da približi svet savremenih govornih tehnologija širokom krugu korisnika. <br/> <br/>

U dosadašnjem periodu realizovane su softverske komponente za visoko kvalitetno prepoznavanje i sintezu govora na srpskom, hrvatskom i crnogorskom jeziku. U razvoju ovih govornih tehnologija, koje su inicijalno bile namenjene slepima i slabovidima, AlfaNum je prvi u regionu. Više informacija o našim komponentama možete naći na stranama o proizvodima i uslugama, a kako one rade, možete videti kroz demonstracije. <br/><br/>

Pored govornih tehnologija, AlfaNum se bavi razvojem i implementacijom proizvoda za osobe sa invaliditetom (OSI), kao i pozivnih centara, informacionih centara i baza podataka. Ako razmišljate o unapređenju svog sistema korišćenjem savremenih govornih tehnologija ili vam je potrebna neka druga stručna usluga, slobodno nam se obratite. Poverenje koje nam ukažete ispoštovaćemo u potpunosti.<br/><br/>

Napredak računarske tehnologije u poslednjih desetak godina omogućio je da i obični PC računari dostignu potrebnu efikasnost za uspešno prepoznavanje i sintezu govora. Pored toga, njihova relativno niska cena učinila je prednosti govornih tehnologija dostupnim sve većem broju korisnika. Specifičnosti južnoslovenskih jezika su velike, te je razvoj govornih tehnologija za svaki od njih vrlo izazovan zadatak. Pored toga, potencijalna tržišta nisu velika, što je dodatni razlog iz kog se nijedna svetska kompanija donedavno nije odlučila da krene u razvoj prepoznavanja i sintezu govora na srpskom i njemu srodnim jezicima. AlfaNum je na vreme prepoznao ovu stratešku prednost, krenuo u sopstveni razvoj i ostvarivanje sledećih osnovnih ciljeva i aktivnosti: <br/>

<ul>
          <li>Razvoj visoko kvalitetnog fleksibilnog sintetizatora govora na osnovu teksta (TTS)</li>
          <li>Razvoj automatskog prepoznavanja govora (ASR) na velikim rečnicima</li>
          <li>Razvoj sistema za konverziju govora</li>
          <li>Razvoj modula za obradu prirodnog jezika uključujući i upravljanje dijalogom</li>
          <li>Primene razvijenih govornih tehnologija u zemljama zapadnog Balkana:
            <ul>
              <li>u multimodalnim sistemima za dijalog čovek-mašina (interaktivni govorni sistemi, pametni telefoni, pametne kuće,...)</li>
              <li>u aplikacijama kao što su: čitanje teksta, diktiranje teksta, transkripcija govora</li>
              <li>kao asistivne tehnologije: pomagala za osobe sa oštećenjem vida, govora ili sluha.</li>
            </ul>
          </li>
        </ul>

<b>Naučno-istraživačkim radom u okviru AlfaNum tima bavi se grupa nastavnika i saradnika Katedre za telekomunikacije i obradu signala Fakulteta tehničkih nauka u Novom Sadu. Više detalja o tome možete naći na stranama projekta AlfaNum.</b> </p>
      </div>

      <div className="misijaVizijaRezultati" ref={sectionRef}>
        <MissionCard
          image="images/misija.png"
          title="Misija"
          text="Naša misija je da proizvedemo visoko kvalitetna, sigurna i inovativna IT rešenja i servise za klijente u raznim domenima."
          visible={triggeredCards[0]}
        />
        <MissionCard
          image="images/vizija.png"
          title="Vizija"
          text="Naša vizija je da ostanemo lider u regionu po pitanju govornih tehnologija za srpski i srodne jezike, neprestano unapređujući svoje proizvode i usluge."
          visible={triggeredCards[1]}
        />
        <MissionCard
          image="images/rezultati.png"
          title="Rezultati"
          text="O našim rezultatima pitajte naše klijente - od pojedinaca i malih preduzeća do državnih institucija."
          visible={triggeredCards[2]}
        />
      </div>

      <div className="naslovi" id="naslovProizvod">
        <h4>Bord direktora</h4>
      </div>

      <div className="direktori" ref={direktoriRef}>
        {direktoriData.map((direktor, index) => (
          <div
            key={index}
            className={`direktor-card ${triggeredDirectors[index] ? 'show' : ''}`}
            style={{
              transition: 'opacity 0.8s ease, transform 0.8s ease',
              opacity: triggeredDirectors[index] ? 1 : 0,
              transform: triggeredDirectors[index] ? 'translateY(0px)' : 'translateY(50px)'
            }}
          >
            <img src={direktor.slika} alt={direktor.ime} className="direktor-slika" />
            <div className="direktor-tekst">
              <h5>{direktor.ime}</h5>
              <p>{direktor.opis}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
