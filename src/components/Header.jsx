import React, { useState, useContext } from 'react';
import Menu from './Menu';
import HamburgerMenu from './HamburgerMenu';
import useWindowWidth from './useWindowWidth';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

function Header() {
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const width = useWindowWidth();

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setActiveItem('O nama');
  };

  const handleContactClick = () => {
    if (location.pathname === '/contact-us') {
      // Refrešuj stranicu
      navigate(0);
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      navigate('/contact-us');
    }
    setActiveItem(null);
  };
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="App-header">
      <div id="logoPolje" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <img src="/images/alfanum-logo.png" alt="Logo" className="logo" />
      </div>

      {width > 700 ? (
        <Menu activeItem={activeItem} setActiveItem={setActiveItem} />
      ) : (
        <HamburgerMenu
          handleClick={(item) => {
            setActiveItem(item);
            if (location.pathname !== '/') {
              navigate('/', { state: { scrollTo: item } });
            } else {
              const sectionMap = {
                'O nama': document.querySelector('body'),
                'Proizvodi': document.querySelector('#naslovProizvod'),
                'Reference': document.querySelector('#naslovKorisnik'),
              };
              const el = sectionMap[item];
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          navigateToCompanySection={(key) => {
            const sectionMap = {
              directors: 'direktori',
              korisnici: 'naslovKorisnik',
              naslovPartner: 'naslovPartner',
              oKompaniji: 'company-container',
            };
            const pageMap = {
              directors: '/company',
              oKompaniji: '/company',
              korisnici: '/',
              naslovPartner: '/',
            };
            const parentItem = key === 'korisnici' || key === 'naslovPartner' ? 'Reference' : 'O nama';
            setActiveItem(parentItem);
            const sectionId = sectionMap[key];
            const targetPage = pageMap[key];
            if (location.pathname !== targetPage) {
              navigate(targetPage, { state: { scrollTo: sectionId } });
            } else {
              const el = document.getElementById(sectionId) || document.querySelector(`.${sectionId}`);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          navigateToProduct={(path) => {
            setActiveItem('Proizvodi');
            navigate(path);
          }}
        />
      )}

      <div id="kontakt">
        <button onClick={handleContactClick} className="my-button">
          KONTAKT
        </button>
        <button onClick={toggleLanguage} className="lang-button">
          {language === 'sr' ? 'EN' : 'SR'}
        </button>
      </div>
    </header>
  );
}

export default Header;
