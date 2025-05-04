import React from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutUs from "./AboutUs";
import Proizvodi from "./Proizvodi";
import Korisnici from "./Korisnici";
import Partneri from "./Partneri";
const MainContent = () => {
  const location = useLocation();
  useEffect(() => {
      if (location.state && location.state.scrollTo) {
        const element = document.getElementById(location.state.scrollTo) || document.querySelector(`.${location.state.scrollTo}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
  return (
    <div id= "pocetni">
        <div id= "leviPocetni">
            <p id= "naslov">Govorne tehnologije <span className="highlighted"> <br />AlfaNum.<br /></span> </p> 
            <p id= "podnaslov"> <br />Kompanija sa iskustvom od preko 20 godina koja se bavi govornim tehnologijama za srpski i srodne jezike, bazira se na AI i dugogodišnjem iskustvu našeg tima. Nudimo najkvalitetnija rešenja za sintezu i prepoznavanje govora u domenima medicine, prava i za opštu namenu.</p>
        </div>
        <div id= "desniPocetni">
        <img src="/images/main.png" alt="Logo" id="pocetnaSlika" />
        </div>
    <AboutUs/>
    <div className= "naslovi" id='naslovProizvod'>
      <h4> Ovo su samo neki od AlfaNum proizvoda.</h4>
    </div>
    <div >
      <Proizvodi/>
    </div>
    <div className= "naslovi" id='naslovKorisnik'>
      <h4> Korisnici naših usluga su privatne i državne institucije:</h4>
    </div>
    <Korisnici/>
    <div className= "naslovi" id="naslovPartner">
      <h4 > AlfaNum partneri.</h4>
      <p>Sarađujemo sa malim i velikim preduzećima u Srbiji i šire
      i zajedno činimo <br/> govorne tehnologije dostupne svima.</p>
    </div>
    <Partneri/>
    </div >
    
    
  );
};

export default MainContent;