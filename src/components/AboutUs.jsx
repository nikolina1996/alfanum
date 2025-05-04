import React, { useState, useEffect } from 'react';
import bgImage from '../bg.png'; 

const AboutUs = () => {
  
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const checkVisibility = (index) => {
    const element = document.querySelectorAll('.oNamaDetalji')[index];
    const rect = element.getBoundingClientRect();
    const isHalfVisible = rect.top + rect.height / 2 <= window.innerHeight && rect.bottom >= 0;
    return isHalfVisible;
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.oNamaDetalji');

    const handleVisibilityChange = () => {
      const visibility = Array.from(elements).map((_, index) => checkVisibility(index));
      setIsVisible(visibility);
    };

    handleVisibilityChange();

    window.addEventListener('scroll', handleVisibilityChange);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  return (
    <div
      id="oNama"
      style={{
        backgroundImage: screenWidth >= 700 ? `url(${bgImage})` : 'none', 
        height: '600px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div
        className={`oNamaDetalji ${isVisible[0] ? 'visible' : ''}`}
        style={{ transitionDelay: '0s' }}
      > 
        <div className="headerONama">
          <img src="/images/iskustvo.png" alt="Logo" className="oNamaSlika" />
          <h2>Iskustvo</h2>
        </div>
        <div>
          <h3>Domaća kompanija koja preko 20 godina razvija svoje proizvode. Zahvaljujući dugogodišnjem radu, posedujemo ogromne resurse za srpski i njemu srodne jezike koji nam omogućuju da imamo najkvalitetnija rešenja.</h3>
        </div>
      </div>
      <div
        className={`oNamaDetalji ${isVisible[1] ? 'visible' : ''}`}
        style={{ transitionDelay: '0.15s' }}
      >
        <div className="headerONama">
          <img src="/images/uspeh.png" alt="Logo" className="oNamaSlika" />
          <h2>Uspeh</h2>
        </div>
        <div>
          <h3>Činjenica da je kompanija opstala već 20 godina radeći isključivo na svojim proizvodima, vrlo je jasan pokazatelj uspešnosti i kvaliteta proizvoda koje nudi.</h3>
        </div>
      </div>
      <div
        className={`oNamaDetalji ${isVisible[2] ? 'visible' : ''}`}
        style={{ transitionDelay: '0.3s' }}
      >
        <div className="headerONama">
          <img src="/images/sigurnost.png" alt="Logo" className="oNamaSlika" />
          <h2>Sigurnost</h2>
        </div>
        <div>
          <h3>Sa svojim resursima, svojim data centrom i timom, pruža apsolutnu sigurnost svojim klijentima. U ponudi imamo i "in-house" rešenja za sve kako Vaši podaci ne moraju izlaziti na internet.</h3>
        </div>
      </div>
      <div
        className={`oNamaDetalji ${isVisible[3] ? 'visible' : ''}`}
        style={{ transitionDelay: '0.45s' }}
      >
        <div className="headerONama">
          <img src="/images/prilagodljivost.png" alt="Logo" className="oNamaSlika" />
          <h2>Prilagodljivost</h2>
        </div>
        <div>
          <h3>Prepoznavanje i sinteza govora su tehnologije koje uspešno razvijamo, a proizvodi su ugradnja istih - stoga tehnologiju možemo da prilagodimo kako Vašim proizvodima tako i Vašim potrebama.</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
