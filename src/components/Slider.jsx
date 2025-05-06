import React, { useState } from "react";
import Card from "./Card";

const Slider = ({ data, cardsPerPage = 3 }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - cardsPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + cardsPerPage, data.length - cardsPerPage)
    );
  };

  const isAtStart = startIndex === 0;
  const isAtEnd = startIndex + cardsPerPage >= data.length;

  return (
    <div className="slider">
      {!isAtStart && (
        <button onClick={handlePrev} className="slider-button">
          &lt;
        </button>
      )}
      <div className="slider-cards">
        {data.slice(startIndex, startIndex + cardsPerPage).map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
      {!isAtEnd && (
        <button onClick={handleNext} className="slider-button">
          &gt;
        </button>
      )}
    </div>
  );
};

export default Slider;
