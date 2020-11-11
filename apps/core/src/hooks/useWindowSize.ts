import { useEffect, useState } from 'react';

import { isDefined } from '@portfolio-app/utilities';

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width } = windowSize;

  return {
    ...windowSize,
    isMobile: isDefined(width) && width <= 425,
    isLargeMobile: isDefined(width) && width <= 670,
    isTablet: isDefined(width) && width <= 768,
    isSmallDesktop: isDefined(width) && width <= 1270,
    isMediumDesktop: isDefined(width) && width <= 1600,
    isLargeDesktop: isDefined(width) && width <= 10000,
  };
};
