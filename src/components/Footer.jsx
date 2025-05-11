import React from 'react';
import { useLanguage } from './LanguageContext'; 

function Footer() {
  const { texts } = useLanguage(); // Dobijamo prevode za footer

  return (
    <footer>
      <p>{texts.footer.text}</p>
    </footer>
  );
}

export default Footer;
