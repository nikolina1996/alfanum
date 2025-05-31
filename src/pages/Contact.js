import React, { useEffect, useState } from 'react';
import { FaHome, FaPhone, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import bgImage from '../bg.png';
import { useLanguage } from '../components/LanguageContext';

const Contact = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { texts } = useLanguage();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBackgroundStyle = () => {
    if (windowWidth < 700) {
      return { background: 'none' }; 
    } else if (windowWidth < 1200) {
      return {
        backgroundImage: `url(${bgImage})`,
        height: '700px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: '-20px'
      };
    } else {
      return {
        backgroundImage: `url(${bgImage})`,
        height: '800px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: '-20px'
      };
    }
  };

  return (
    <div style={getBackgroundStyle()}>
      <div className="contactContainer">
        <div className="left-div">
          <form
            className="contactForm"
            action="https://formsubmit.co/info@alfanum.co.rs"
            method="POST"
          >
            <div className="left-text">
              <p className="title">
                {texts.kontakt.tekst1} {texts.kontakt.tekst2}
              </p>
              <p>{texts.kontakt.podnaslov}</p>
            </div>
            <input type="text" name="ime" placeholder={texts.kontakt.forma.ime} required />
            <input type="text" name="prezime" placeholder={texts.kontakt.forma.prezime} required />
            <input type="email" name="email" placeholder={texts.kontakt.forma.email} required />
            <textarea name="poruka" placeholder={texts.kontakt.forma.poruka} rows="5" required></textarea>
            <button type="submit">{texts.kontakt.forma.posalji}</button>
          </form>
        </div>

        <div className="right-column">
          <div className="top-right">
            <div className="contactInfo">
              <p><strong>AlfaNum d.o.o</strong></p>
              <p><FaHome className="icon" /> Krajiška 41, 21132 Petrovaradin</p>
              <p><FaPhone className="icon" /> {texts.kontakt.forma.prodaja}: 064/809-5758</p>
              <p><FaPhone className="icon" /> {texts.kontakt.forma.podrska}: 066/809-6324</p>
            </div>
          </div>

          <div className="bottom-right">
            <div className="social-section">
              <p className="social-text">{texts.kontakt.forma.mreze}</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/alfanum.serbia" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://www.linkedin.com/company/alfanum-d-o-o-/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.youtube.com/@alfanumcompany9318" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
