import { coreSelectors } from '@reducers/core';
import { useSelector } from '@reducers/store';
import { LocalesKeys, localesMap } from '@src/locales';

export const useLocale = () => {
  const currentLocale = useSelector(coreSelectors.getCurrentLang);

  return (value: LocalesKeys) => {
    return localesMap[currentLocale][value];
  };
};
