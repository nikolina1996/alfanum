import React, { useState, useEffect } from 'react';
import bgImage from '../bg.png'; 
import { useLanguage } from './LanguageContext'; 

const AboutUs = () => {
  
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { texts } = useLanguage(); 

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
          <h2>{texts.aboutus.iskustvo.key}</h2>
        </div>
        <div>
          <h3>{texts.aboutus.iskustvo.value}</h3>
        </div>
      </div>
      <div
        className={`oNamaDetalji ${isVisible[1] ? 'visible' : ''}`}
        style={{ transitionDelay: '0.15s' }}
      >
        <div className="headerONama">
          <img src="/images/uspeh.png" alt="Logo" className="oNamaSlika" />
          <h2>{texts.aboutus.uspeh.key}</h2>
        </div>
        <div>
          <h3>{texts.aboutus.uspeh.value}</h3>
        </div>
      </div>
      <div
        className={`oNamaDetalji ${isVisible[2] ? 'visible' : ''}`}
        style={{ transitionDelay: '0.3s' }}
      >
        <div className="headerONama">
          <img src="/images/sigurnost.png" alt="Logo" className="oNamaSlika" />
          <h2>{texts.aboutus.sigurnost.key}</h2>
        </div>
        <div>
          <h3>{texts.aboutus.sigurnost.value}</h3>
        </div>
      </div>
      <div
        className={`oNamaDetalji ${isVisible[3] ? 'visible' : ''}`}
        style={{ transitionDelay: '0.45s' }}
      >
        <div className="headerONama">
          <img src="/images/prilagodljivost.png" alt="Logo" className="oNamaSlika" />
          <h2>{texts.aboutus.prilagodljivost.key}</h2>
        </div>
        <div>
          <h3>{texts.aboutus.prilagodljivost.value}</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
