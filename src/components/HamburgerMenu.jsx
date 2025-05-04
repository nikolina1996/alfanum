import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function HamburgerMenu({ handleClick, navigateToCompanySection, navigateToProduct }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleAndClose = (fn) => {
    fn();
    closeMenu();
  };

  return (
    <div className="hamburger-menu-container">
      <button className="hamburger-toggle" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="hamburger-overlay">
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
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
