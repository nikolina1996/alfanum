import React from "react";
import { CheckCircle } from "lucide-react"; 
import { useNavigate } from "react-router-dom";
import useIconSize from "./useIconSize";

const SubscriptionCard = ({ title, price, features, buttonText }) => {
  const navigate = useNavigate();
  const iconSize = useIconSize();
  const handleClick = () => {
    if (buttonText === "Pošalji upit") {
      navigate("/contact-us", { replace: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      console.log(`Izabran paket: ${title}`);
    }
  };
  

  return (
    <div className="subscription-card">
      <h3 className="subscription-title">{title}</h3>
      <p className="subscription-price">{price || "\u00A0"}</p>
      <ul className="subscription-features">
        {features.map((feature, idx) => (
          <li key={idx} className="feature-item">
            <span className="check-icon">
              <CheckCircle size={iconSize} color="#fff" />
            </span>
            {feature}
          </li>
        ))}
      </ul>
      {buttonText && (
        <button className="subscription-button" onClick={handleClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

  const SubscriptionSection = ({ title, description, packages }) => {
    return (
      <section className="subscription-section">
        <div className="container">
          <h2 className="subscription-heading">{title}</h2>
          <p className="subscription-description">{description}</p>
          <div className="subscription-cards-wrapper">
            {packages.map((pack, index) => (
              <SubscriptionCard
                key={index}
                title={pack.title}
                price={pack.price}
                features={pack.features}
                buttonText={pack.buttonText}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };

export default SubscriptionSection;
