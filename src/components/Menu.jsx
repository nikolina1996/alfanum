import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Menu({ activeItem, setActiveItem }) {
  const [pendingItem, setPendingItem] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const autoScrollRef = useRef(false);

  const handleClick = (item) => {
    setActiveItem(item);
    autoScrollRef.current = true;
    setActiveDropdown(null);
    setIsOverlayVisible(false);

    if (location.pathname !== '/') {
      setPendingItem(item);
      navigate('/');
    } else {
      scrollToSection(item);
    }
  };
  const navigateToProduct = (path) => {
    setActiveItem('Proizvodi');
    navigate(path);
    closeDropdowns();
  };
  const scrollToSection = (item) => {
    let element = null;

    if (item === 'O nama') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item === 'Proizvodi') {
      element = document.querySelector('.proizvodi');
    } else if (item === 'Reference') {
      element = document.querySelector('#naslovKorisnik');
    }

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
      autoScrollRef.current = false;
    }, 1000);
  };

  useEffect(() => {
    if (pendingItem && location.pathname === '/') {
      scrollToSection(pendingItem);
      setPendingItem(null);
    }
  }, [location, pendingItem]);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const sectionMap = {
      'O nama': document.querySelector('body'),
      'Proizvodi': document.querySelector('#naslovProizvod'),
      'Reference': document.querySelector('#naslovKorisnik'),
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (autoScrollRef.current) return;

        const visible = entries.find(entry => entry.isIntersecting);
        if (visible) {
          const activeKey = Object.keys(sectionMap).find(
            key => sectionMap[key] === visible.target
          );
          if (activeKey) setActiveItem(activeKey);
        }
      },
      {
        root: null,
        threshold: 0.7,
      }
    );

    Object.values(sectionMap).forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location, setActiveItem]);

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
      setIsOverlayVisible(false);
    } else {
      setActiveDropdown(dropdown);
      setIsOverlayVisible(true);
    }
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
    setIsOverlayVisible(false);
  };

  const navigateToCompanySection = (sectionKey) => {
    autoScrollRef.current = true;

    let targetSection = 'company-container'; // default za o kompaniji
    let targetPage = '/company'; // default stranica
    let parentItem = 'O nama'; // defaultno roditelj koji treba da bude aktivan
  
    if (sectionKey === 'directors') {
      targetSection = 'direktori';
      targetPage = '/company';
      parentItem = 'O nama';
    } else if (sectionKey === 'korisnici') {
      targetSection = 'naslovKorisnik';
      targetPage = '/';
      parentItem = 'Reference';
    } else if (sectionKey === 'naslovPartner') {
      targetSection = 'naslovPartner';
      targetPage = '/';
      parentItem = 'Reference';
    } else if (sectionKey === 'oKompaniji') {
      targetSection = 'company-container';
      targetPage = '/company';
      parentItem = 'O nama';
    }
  
    setActiveItem(parentItem); // <<< Dodajemo ovde da se roditeljska stavka aktivira
  
    if (location.pathname !== targetPage) {
      navigate(targetPage, { state: { scrollTo: targetSection } });
    } else {
      const el = document.getElementById(targetSection) || document.querySelector(`.${targetSection}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    closeDropdowns();
  };
  

  return (
    <div className="meni">
    <div
      className={`body-overlay ${isOverlayVisible ? 'visible' : ''}`}
      onClick={closeDropdowns}
    ></div>

    <nav>
      <ul className="nav-list">
        <li
          className={`nav-item ${activeItem === 'O nama' ? 'active' : ''} ${activeDropdown === 'onama' ? 'active-dropdown' : ''}`}
          onMouseEnter={() => toggleDropdown('onama')}
          onMouseLeave={closeDropdowns}
        >
          <span onClick={() => handleClick('O nama')}>O nama</span>
          <ul className="dropdown">
            <li onClick={() => navigateToCompanySection('oKompaniji')}>O kompaniji</li>
            <li onClick={() => navigateToCompanySection('directors')}>Direktori</li>
          </ul>
        </li>

        <li
          className={`nav-item ${activeItem === 'Proizvodi' ? 'active' : ''} ${activeDropdown === 'proizvodi' ? 'active-dropdown' : ''}`}
          onMouseEnter={() => toggleDropdown('proizvodi')}
          onMouseLeave={closeDropdowns}
        >
          <span onClick={() => handleClick('Proizvodi')}>Proizvodi</span>
          <ul className="dropdown">
            <li onClick={() => { navigateToProduct('/medicta'); }}>Medicta</li>
            <li onClick={() => { navigateToProduct('/iurisdicta');  }}>Iurisdicta</li>
            <li onClick={() => { navigateToProduct('/transcripta');  }}>Transcripta</li>
            <li onClick={() => { navigateToProduct('/an-sintetizator');  }}>AN-sintetizator</li>
            <li onClick={() => { navigateToProduct('/an-reader');  }}>AN-reader</li>
            <li onClick={() => { navigateToProduct('/citaj-mi');  }}>Čitaj mi!</li>
          </ul>
        </li>

        <li
          className={`nav-item ${activeItem === 'Reference' ? 'active' : ''} ${activeDropdown === 'reference' ? 'active-dropdown' : ''}`}
          onMouseEnter={() => toggleDropdown('reference')}
          onMouseLeave={closeDropdowns}
        >
          <span onClick={() => handleClick('Reference')}>Reference</span>
          <ul className="dropdown">
            <li onClick={() => navigateToCompanySection('korisnici')}>Korisnici</li>
            <li onClick={() => navigateToCompanySection('naslovPartner')}>Partneri</li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
);
}

export default Menu;
