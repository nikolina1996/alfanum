import React, { createContext, useState, useContext } from 'react';
import srTexts from '../locales/sr.json'
import enTexts from '../locales/en.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('sr');

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
