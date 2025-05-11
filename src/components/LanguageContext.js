import React, { createContext, useState, useContext, useEffect } from 'react';
import srTexts from '../locales/sr.json';
import enTexts from '../locales/en.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Inicijalizuj jezik iz localStorage ili podrazumevani (sr)
  const savedLanguage = localStorage.getItem('language');
  const [language, setLanguage] = useState(savedLanguage || 'sr'); 

  // Kada promeniš jezik, sačuvaj ga u localStorage
  const toggleLanguage = () => {
    const newLanguage = language === 'sr' ? 'en' : 'sr';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage); // Sačuvaj novi jezik
  };

  const texts = language === 'sr' ? srTexts : enTexts;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
