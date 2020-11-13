import { coreSlice } from '@reducers/core';
import { combineReducers } from '@reduxjs/toolkit';

import { selectPcPriceSlice } from './selectPcPrice';
import { selectPcTasksSlice } from './selectPcTasks';
import { selectPcTypeSlice } from './selectPcType';
import { showResultsSlice } from './showResults';

export const rootReducer = combineReducers({
  core: coreSlice.reducer,
  selectPcType: selectPcTypeSlice.reducer,
  selectPcPrice: selectPcPriceSlice.reducer,
  selectPcTasks: selectPcTasksSlice.reducer,
  showResults: showResultsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
