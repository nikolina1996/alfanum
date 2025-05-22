import React from 'react';
import Proizvod from './Proizvod';

const Proizvodi = ({ items }) => {
  return (
    <div className="proizvodi">
      {items.map((item, index) => (
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
