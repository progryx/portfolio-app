import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ROUTES_MAP } from '@constants/routesMap';

export const useNavigation = (initialTab?: string): string => {
  const location = useLocation();

  const [currentTab, setCurrentTab] = useState(initialTab || '0');

  useEffect(() => {
    switch (location.pathname) {
      case ROUTES_MAP.main: {
        setCurrentTab('0');
        break;
      }

      case ROUTES_MAP.projects: {
        setCurrentTab('1');
      }
    }
  }, [location]);

  return currentTab;
};
