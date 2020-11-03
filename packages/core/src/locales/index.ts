import { GetFormKeys } from '@src/utilities';

import { EN_LOCALE } from './en';
import { RU_LOCALE } from './ru';

export type Languages = 'RU' | 'EN';

type LocalesMap = {
  [key in Languages]: typeof EN_LOCALE | typeof RU_LOCALE;
};

export type LocalesKeys = GetFormKeys<typeof EN_LOCALE & typeof RU_LOCALE>;

export const LANG_NAMES: { [key in Languages]: string } = {
  EN: 'English',
  RU: 'Русский',
};

export const localesMap: LocalesMap = {
  EN: { ...EN_LOCALE },
  RU: { ...RU_LOCALE },
};
