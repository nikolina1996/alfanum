import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext'; 

function HamburgerMenu({ handleClick, navigateToCompanySection, navigateToProduct }) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage(); 

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleAndClose = (fn) => {
    fn();
    closeMenu();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="hamburger-menu-container">
      <button className="hamburger-toggle" onClick={toggleMenu}>
        {isOpen ? <X size={20} /> : <Menu size={28} />}
      </button>

      {isOpen && (
  <div className="hamburger-overlay">
    <div className="x-icon" onClick={closeMenu}>
      <X size={22} style={{ strokeWidth: "1px" }} />
    </div>

    <ul className="hamburger-nav">
      <li>
        <span onClick={() => handleAndClose(() => handleClick('O nama'))}>O nama</span>
        <ul>
          <li onClick={() => handleAndClose(() => navigateToCompanySection('oKompaniji'))}>O kompaniji</li>
          <li onClick={() => handleAndClose(() => navigateToCompanySection('directors'))}>Direktori</li>
        </ul>
      </li>
      <li>
        <span onClick={() => handleAndClose(() => handleClick('Proizvodi'))}>Proizvodi</span>
        <ul>
          <li onClick={() => handleAndClose(() => navigateToProduct('/medicta'))}>Medicta</li>
          <li onClick={() => handleAndClose(() => navigateToProduct('/iurisdicta'))}>Iurisdicta</li>
          <li onClick={() => handleAndClose(() => navigateToProduct('/transcripta'))}>Transcripta</li>
          <li onClick={() => handleAndClose(() => navigateToProduct('/an-sintetizator'))}>AN-sintetizator</li>
          <li onClick={() => handleAndClose(() => navigateToProduct('/an-reader'))}>AN-reader</li>
          <li onClick={() => handleAndClose(() => navigateToProduct('/citaj-mi'))}>Čitaj mi!</li>
        </ul>
      </li>
      <li>
        <span onClick={() => handleAndClose(() => handleClick('Reference'))}>Reference</span>
        <ul>
          <li onClick={() => handleAndClose(() => navigateToCompanySection('korisnici'))}>Korisnici</li>
          <li onClick={() => handleAndClose(() => navigateToCompanySection('naslovPartner'))}>Partneri</li>
        </ul>
      </li>
    </ul>

    <div className="language-section" onClick={() => handleAndClose(toggleLanguage)}>
      <Globe
        size={25}
        style={{
          marginRight: '8px',
          marginTop: '15px',
          color: '#7e2021',
          strokeWidth: '1px'
        }}
      />
      {language === 'sr' ? 'EN' : 'SR'}
    </div>
  </div>
)}

    </div>
  );
}

export default HamburgerMenu;
