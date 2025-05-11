import React from 'react';
import Proizvod from './Proizvod';
import { useLanguage } from './LanguageContext';
 

const Proizvodi = () => {
  const { texts } = useLanguage(); 
  const divData = [
    { 
      image: '/images/medicta2.png',
      text: [texts.proizvodi.medicta],
      link: '/medicta', 
    },
    {
      image: '/images/iurisdicta2.png',
      text: [texts.proizvodi.iurisdicta],
      link: '/iurisdicta', 
    },
    {
      image: '/images/transcripta2.png',
      text: [texts.proizvodi.transcripta],
      link: '/transcripta', 
    },
    {
      image: '/images/ansintetizator.png',
      text: [texts.proizvodi.ansintetizator],
      link: '/an-sintetizator', 
    },
    {
      image: '/images/anreader.png',
      text: [texts.proizvodi.anreader],
      link: '/an-reader', 
    },
    {
      image: '/images/citajmi.png',
      text: [texts.proizvodi.citajmi],
      link: '/citaj-mi', 
    },
  ];

  return (
    <div className="proizvodi">
      {divData.map((item, index) => (
        <Proizvod 
          key={index} 
          image={item.image} 
          text={item.text} 
          link={item.link} 
        />
      ))}
    </div>
  );
};

export default Proizvodi;
