import React from 'react';
import Proizvod from './Proizvod'; 

const Proizvodi = () => {
  
  const divData = [
    { 
      image: '/images/medicta.png',
      text: 'Softver za diktiranje medicinskih nalaza prilagođen za srpski jezik.',
      link: '/medicta', 
    },
    {
      image: '/images/iurisdicta.png',
      text: 'Softver za diktiranje pravnih dokumenata prilagođen za srpski jezik.',
      link: '/iurisdicta', 
    },
    {
      image: '/images/transcripta.png',
      text: 'Prepoznavač govora opšte namene na srpskom i drugim jezicima.',
      link: '/transcripta', 
    },
    {
      image: '/images/ansintetizator.png',
      text: 'Visokokvalitetan sintetizator govora na srpskom jeziku.',
      link: '/an-sintetizator', 
    },
    {
      image: '/images/anreader.png',
      text: 'Čitač ekrana za slepe i slabovide osobe.',
      link: '/an-reader', 
    },
    {
      image: '/images/citajmi.png',
      text: 'Ugradnja opcije "Čitaj mi" na web sajtove.',
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
