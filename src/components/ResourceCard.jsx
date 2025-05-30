import React from "react";
import { useNavigate } from "react-router-dom";

const ResourceCard = ({
  title,
  links = [],
  buttonText,
  description,
  noStyle = false // Opcioni prop za uklanjanje stila
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact-us", { replace: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`resource-card ${noStyle ? "no-style" : ""}`}>
      <h3 className="resource-title">{title}</h3>

      {description && typeof description === "object" ? (
        <div className="resource-description">
          {description.intro && (
            <p dangerouslySetInnerHTML={{ __html: description.intro }} />
          )}
          {description.list && (
            <ul className="resource-bullet-list">
              {description.list.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}
          {description.middle && (
            <p dangerouslySetInnerHTML={{ __html: description.middle }} />
          )}
          {description.extraList && (
            <ul className="resource-extra-list">
              {description.extraList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          {description.conclusion && (
            <p dangerouslySetInnerHTML={{ __html: description.conclusion }} />
          )}
        </div>
      ) : (
        description && (
          <p
            className="resource-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )
      )}

      {links.length > 0 && (
        <ul className="resource-list">
          {links.map((link, index) => (
            <li key={index} className="resource-item">
              <a
                href={`https://${link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}

      {buttonText && (
        <button className="resource-button" onClick={handleClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default ResourceCard;
