import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useIconSize from "./useIconSize";
import SubscriptionButton from "./SubscriptionButton";  // Ako je koristiš

const SubscriptionCard = ({
  title,
  subtitle = [],
  price = [],
  features = [],
  buttonText = [],
  buttonVariants = [],
  layoutOrder = ["title", "features", "subtitle", "price", "button"]
}) => {
  const navigate = useNavigate();
  const iconSize = useIconSize();

  const handleClick = (btnText) => {
    if (btnText === "Pošalji upit") {
      navigate("/contact-us", { replace: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      console.log(`Izabran paket: ${title} (${btnText})`);
    }
  };

  // Brojači za višestruke instance
  let subtitleIndex = 0;
  let priceIndex = 0;
  let buttonIndex = 0;

  // Indeksi koje preskačemo jer su već prikazani (npr. button uz price)
  const skipIndexes = new Set();

  const renderPart = (part, index) => {
    switch (part) {
      case "title":
        return (
          <h3 className="subscription-title" key={index}>
            {Array.isArray(title) ? title[0] : title}
          </h3>
        );

      case "subtitle":
        if (subtitleIndex < subtitle.length) {
          const content = subtitle[subtitleIndex++];
          return (
            <p className="subscription-subtitle" key={`subtitle-${index}`}>
              {content}
            </p>
          );
        }
        return null;

      case "price":
        const nextPart = layoutOrder[index + 1];
        const isNextButtonSmall =
          nextPart === "button" && buttonVariants?.[buttonIndex] === "small";

        if (priceIndex < price.length) {
          const content = price[priceIndex++];

          if (isNextButtonSmall && buttonIndex < buttonText.length) {
            const btn = buttonText[buttonIndex];
            const variant = buttonVariants[buttonIndex] || "default";
            buttonIndex++;

            // Preskoči sledeći "button"
            skipIndexes.add(index + 1);

            return (
              <div className="price-button-inline" key={`price-button-${index}`}>
                <p className="subscription-price">{content}</p>
                <button
                  className={`subscription-button ${variant === "small" ? "small" : ""}`}
                  onClick={() => handleClick(btn)}
                >
                  {btn}
                </button>
              </div>
            );
          } else {
            return (
              <p className="subscription-price" key={`price-${index}`}>
                {content}
              </p>
            );
          }
        }
        return null;

      case "features":
        return (
          <ul className="subscription-features" key={index}>
            {features.map((feature, idx) => (
              <li key={idx} className="feature-item">
                <span className="check-icon">
                  <CheckCircle size={iconSize} color="#fff" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        );

      case "button":
        // Preskočen ako je već prikazan uz price
        if (buttonIndex < buttonText.length) {
          const btn = buttonText[buttonIndex];
          const variant = buttonVariants?.[buttonIndex] || "default";
          buttonIndex++;

          return (
            <button
              className={`subscription-button ${variant === "small" ? "small" : ""}`}
              key={`button-${index}`}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          );
        }
        return null;

      default:
        return null;
    }
  };

  return (
    <div className="subscription-card">
      {layoutOrder.map((part, index) =>
        skipIndexes.has(index) ? null : renderPart(part, index)
      )}
    </div>
  );
};

export default SubscriptionCard;
