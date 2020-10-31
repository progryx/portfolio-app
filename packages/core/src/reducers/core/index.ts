import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Languages, LANG_NAMES } from '@src/locales';
import { PropertiesTypes } from '@src/utilities';

import { RootState } from '../index';

export type CoreActionTypes = ReturnType<PropertiesTypes<typeof coreActions>>;

export type CoreState = {
  toastMessage: string | null;
  language: Languages;
};

export const initialState: CoreState = {
  toastMessage: null,
  language: 'EN',
};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    setMessage: (state, { payload }: PayloadAction<{ message: string | null }>) => {
      return {
        ...state,
        toastMessage: payload.message,
      };
    },

    setLanguage: (state, { payload }: PayloadAction<{ lang: Languages }>) => {
      return {
        ...state,
        language: payload.lang,
      };
    },
  },
});

export const coreSelectors = {
  getCurrentLang: (state: RootState) => state.core.language,
  getCurrentLangName: (state: RootState) =>
    state.core.language === 'EN' ? LANG_NAMES.EN : LANG_NAMES.RU,
  isEnLanguage: (state: RootState) => state.core.language === 'EN',
  getToastMessage: (state: RootState) => state.core.toastMessage,
};

export const coreActions = {
  ...coreSlice.actions,
};
