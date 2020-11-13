import { PropertiesTypes } from '@portfolio-app/utilities';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ShowResultsActions = ReturnType<PropertiesTypes<typeof showResultsActions>>;

export const initialState = {};

export const showResultsSlice = createSlice({
  name: 'showResults',
  initialState,
  reducers: {
    selectItem: (state, { payload }: PayloadAction<{ id: string }>) => {
      return {
        ...state,
        selectedItem: payload.id,
      };
    },
  },
});

export const showResultsActions = {
  ...showResultsSlice.actions,
};
