import React from 'react';

const MissionCard = ({ image, title, text, visible }) => {
  return (
    <div className="info-card">
      <img
        src={image}
        alt={title}
        className={`mission-image ${visible ? 'zoom' : ''}`}
      />
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
};

export default MissionCard;
