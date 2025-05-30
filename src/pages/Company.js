import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MissionCard from '../components/MissionCard';
import { useLanguage } from '../components/LanguageContext';

const Company = () => {
  const location = useLocation();
  const sectionRef = useRef(null);
  const direktoriRef = useRef(null);
  const kompanijaRef = useRef(null);
  const [triggeredCards, setTriggeredCards] = useState([false, false, false]);
  const [triggeredDirectors, setTriggeredDirectors] = useState([false, false, false, false]);
  const [triggeredCompanyText, setTriggeredCompanyText] = useState(false);
  const { texts } = useLanguage();

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
      ime: [texts.direktori.direktor1.ime],
      opis: [texts.direktori.direktor1.biografija],
      slika: "images/vlado.jpg"
    },
    {
      ime: [texts.direktori.direktor2.ime],
      opis: [texts.direktori.direktor2.biografija],
      slika: "images/darko.png"
    },
    {
      ime: [texts.direktori.direktor3.ime],
      opis: [texts.direktori.direktor3.biografija],
      slika: "images/milan.png"
    },
    {
      ime: [texts.direktori.direktor4.ime],
      opis: [texts.direktori.direktor4.biografija],
      slika: "images/goran.png"
    }
  ];

  return (
    <div className="company-container">
      <div className="naslovi" id="naslovKompanija">
        <h4>{texts.kompanija.naslov}</h4>
      </div>

      <div
        className={`o-kompaniji fade-section ${triggeredCompanyText ? 'visible' : ''}`}
        ref={kompanijaRef}
      >
        <p> {texts.kompanija.tekst1} <br/> <br/>

        {texts.kompanija.tekst2} <br/><br/>

{texts.kompanija.tekst3}<br/><br/>

{texts.kompanija.tekst4} <br/>

        <ul>
          <li>{texts.kompanija.li1}</li>
          <li>{texts.kompanija.li2}</li>
          <li>{texts.kompanija.li3}</li>
        </ul>

<b>{texts.kompanija.bold}</b> </p>
      </div>

      <div className="misijaVizijaRezultati" ref={sectionRef}>
        <MissionCard
          image="images/misija.png"
          title={texts.kartice.misija.naslov}
          text={texts.kartice.misija.tekst}
          visible={triggeredCards[0]}
        />
        <MissionCard
          image="images/vizija.png"
          title={texts.kartice.vizija.naslov}
          text={texts.kartice.vizija.tekst}
          visible={triggeredCards[1]}
        />
        <MissionCard
          image="images/rezultati.png"
          title={texts.kartice.rezultati.naslov}
          text={texts.kartice.rezultati.tekst}
          visible={triggeredCards[2]}
        />
      </div>

      <div className="naslovi" id="naslovProizvod">
        <h4>{texts.direktori.naslov}</h4>
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
