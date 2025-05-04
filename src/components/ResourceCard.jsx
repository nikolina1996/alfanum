import React from "react";
import { useNavigate } from "react-router-dom";

const ResourceCard = ({ title, links, buttonText }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact-us", { replace: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="resource-card">
      <h3 className="resource-title">{title}</h3>
      <ul className="resource-list">
        {links.map((link, index) => (
          <li key={index} className="resource-item">
            <a href={`https://${link}`} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <button className="resource-button" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default ResourceCard;
