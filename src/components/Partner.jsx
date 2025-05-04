import React, { useState } from 'react';

const Partner = ({ image, link, isCentered, isFirst }) => {
    const [selected, setSelected] = useState(false);
  
    const handleClick = () => {
      setSelected(true);
      setTimeout(() => {
        setSelected(false);
      }, 2000);
    };
  
    return (
      <div className={`partner ${isCentered ? 'centered' : ''} ${isFirst ? 'prvi' : ''} ${selected ? 'selected' : ''}`}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt="Partner"
            className="slikaPartner"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
          />
        </a>
      </div>
    );
  };
  

export default Partner;
