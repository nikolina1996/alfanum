import React, { createContext, useState, useContext } from 'react';
import srTexts from '../locales/sr.json';  // Srpski prevodi
import enTexts from '../locales/en.json';  // Engleski prevodi

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('sr'); // Početni jezik sr

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'sr' ? 'en' : 'sr'));
  };

  const texts = language === 'sr' ? srTexts : enTexts;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
