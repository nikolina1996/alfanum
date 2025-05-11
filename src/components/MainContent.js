import React from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutUs from "./AboutUs";
import Proizvodi from "./Proizvodi";
import Korisnici from "./Korisnici";
import Partneri from "./Partneri";
import { useLanguage } from './LanguageContext';
const MainContent = () => {
  const location = useLocation();
  const { texts } = useLanguage(); 
  useEffect(() => {
      if (location.state && location.state.scrollTo) {
        const element = document.getElementById(location.state.scrollTo) || document.querySelector(`.${location.state.scrollTo}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
  return (
    <div id= "veliki">
    <div id= "pocetni">
        <div id= "leviPocetni">
            <p id= "naslov">{texts.main.naslovjedan} <span className="highlighted"> <br />{texts.main.naslovdva}<br /></span> </p> 
            <p id= "podnaslov"> <br />{texts.main.podnaslov}</p>
        </div>
        <div id= "desniPocetni">
          <img src="/images/main.png" alt="Logo" id="pocetnaSlika" />
        </div>
    </div>
    <AboutUs/>
    <div className= "naslovi" id='naslovProizvod'>
      <h4> {texts.proizvodiNaslov}</h4>
    </div>
    <div >
      <Proizvodi/>
    </div>
    <div className= "naslovi" id='naslovKorisnik'>
      <h4> {texts.korisniciNaslov}</h4>
    </div>
    <Korisnici/>
    <div className= "naslovi" id="naslovPartner">
      <h4 >{texts.partneri.naslov}</h4>
      <p id= "partnerOpis">{texts.partneri.podnaslov}</p>
    </div>
    <Partneri/>
    </div >
    
    
  );
};

export default MainContent;