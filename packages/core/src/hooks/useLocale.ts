import { coreSelectors } from '@reducers/core';
import { LocalesKeys, localesMap } from '@src/locales';
import { useSelector } from '@src/store';

export const useLocale = () => {
  const currentLocale = useSelector(coreSelectors.getCurrentLang);

  return (value: LocalesKeys) => {
    return localesMap[currentLocale][value];
  };
};
