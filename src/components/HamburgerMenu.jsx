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
  const { texts } = useLanguage(); 
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
        <div
          className="hamburger-overlay"
          onClick={(e) => e.stopPropagation()} // Sprečava klik sa strane da zatvori meni
        >
          <div
            className="hamburger-content"
            onClick={(e) => e.stopPropagation()} // Sprečava klik unutar menija da zatvori meni
          >
            <div className="x-icon" onClick={closeMenu}>
              <X size={22} style={{ strokeWidth: "1px" }} />
            </div>

            <ul className="hamburger-nav">
              <li>
                <span onClick={() => handleAndClose(() => handleClick('O nama'))}>{texts.header.aboutus.key}</span>
                <ul>
                  <li onClick={() => handleAndClose(() => navigateToCompanySection('oKompaniji'))}>{texts.header.aboutus.company}</li>
                  <li onClick={() => handleAndClose(() => navigateToCompanySection('directors'))}>{texts.header.aboutus.directors}</li>
                </ul>
              </li>
              <li>
                <span onClick={() => handleAndClose(() => handleClick('Proizvodi'))}>{texts.header.products}</span>
                <ul>
                  <li className="dropdown-group-title" onClick={() => handleAndClose(() => navigateToCompanySection('naslovProizvod'))}>ASR</li>
                  <li onClick={() => handleAndClose(() => navigateToProduct('/medicta'))}>Medicta</li>
                  <li onClick={() => handleAndClose(() => navigateToProduct('/iurisdicta'))}>Iurisdicta</li>
                  <li onClick={() => handleAndClose(() => navigateToProduct('/transcripta'))}>Transcripta</li>
                  <li className="dropdown-group-title" onClick={() => handleAndClose(() => navigateToCompanySection('naslovProizvodTts'))}>TTS</li>
                  <li onClick={() => handleAndClose(() => navigateToProduct('/an-sintetizator'))}>AN-sintetizator</li>
                  <li onClick={() => handleAndClose(() => navigateToProduct('/an-reader'))}>AN-reader</li>
                  <li onClick={() => handleAndClose(() => navigateToProduct('/citaj-mi'))}>Čitaj mi!</li>
                </ul>
              </li>
              <li>
                <span onClick={() => handleAndClose(() => handleClick('Reference'))}>{texts.header.references.key}</span>
                <ul>
                  <li onClick={() => handleAndClose(() => navigateToCompanySection('korisnici'))}>{texts.header.references.users}</li>
                  <li onClick={() => handleAndClose(() => navigateToCompanySection('naslovPartner'))}>{texts.header.references.partners}</li>
                </ul>
              </li>
            </ul>

            <div className="language-section" onClick={toggleLanguage}>
              <Globe
                size={25}
                style={{
                  marginRight: '8px',
                  color: '#7e2021',
                  strokeWidth: '1px',
                  marginTop: '-2px'
                }}
              />
              {language === 'sr' ? 'EN' : 'SR'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
