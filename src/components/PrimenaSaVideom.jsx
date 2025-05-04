import React from "react";

const PrimenaSaVideom = ({ title, text, videoUrl }) => {
  return (
    <section className="video-section">
      <h2 className="video-title">{title}</h2>
      <div className="video-text">
        <p>{text}</p>
      </div>
      <div className="video-embed-wrapper">
        <iframe
          className="video-iframe"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default PrimenaSaVideom;
