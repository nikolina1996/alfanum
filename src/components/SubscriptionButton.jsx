import React from "react";

const SubscriptionButton = ({ text, onClick, variant = "default" }) => {
  return (
    <button
      className={`subscription-button ${variant}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SubscriptionButton;