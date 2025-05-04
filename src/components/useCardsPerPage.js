import { useState, useEffect } from 'react';

const getCardsPerPage = (width) => {
  if (width < 700) return 1;
  if (width <= 1200) return 2;
  return 3;
};

const useCardsPerPage = () => {
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(getCardsPerPage(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return cardsPerPage;
};

export default useCardsPerPage;