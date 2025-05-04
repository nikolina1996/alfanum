import React from 'react';
import Partner from './Partner'; 

const Partneri = () => {

  const divData = [
    { 
      image: '/images/ftn.png', 
      link: 'https://ftn.uns.ac.rs/'
    },
    {
      image: '/images/mts.svg',
      link: 'https://mts.rs/'
    },
    {
      image: '/images/effecta.png',
      link: 'https://www.esolutions.rs/'
    },
    {
      image: '/images/telegroup.png',
      link: 'https://www.telegroup-ltd.com/'
    },
    {
      image: '/images/saga.png',
      link: 'https://saga.rs/'
    },
    {
      image: '/images/algotech.png',
      link: 'https://www.algotech.rs/'
    },
  ];

  return (
    <div className="partneri">
      {divData.map((item, index) => (
        <Partner key={index} image={item.image} isCentered={index >= 3} isFirst={index === 0} link={item.link}/>
      ))}
    </div>
  );
};

export default Partneri;