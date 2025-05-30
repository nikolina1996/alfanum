import React from "react";
import SubscriptionCard from "./SubscriptionCard";

const SubscriptionSection = ({ title, description, packages }) => {
  return (
    <section className="subscription-section">
      <div className="container">
        <h2 className="subscription-heading">{title}</h2>

        {description && (
          <p
            className="subscription-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}

        <div className="subscription-cards-wrapper">
          {packages.map((pack, index) => (
            <SubscriptionCard
              key={index}
              title={pack.title}
              subtitle={pack.subtitle}
              price={pack.price}
              features={pack.features}
              buttonText={pack.buttonText}
              layoutOrder={pack.layoutOrder}
              buttonVariants={pack.buttonVariants}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;

