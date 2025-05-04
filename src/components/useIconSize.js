import { useState, useEffect } from 'react';

const getIconSize = (width) => {
  if (width < 700) return 12;
  if (width <= 1200) return 14;
  return 16;
};

const useIconSize = () => {
  const [iconSize, setIconSize] = useState(getIconSize(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setIconSize(getIconSize(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return iconSize;
};

export default useIconSize;