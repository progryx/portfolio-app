import { useDispatch as ReduxUseDispatch } from 'react-redux';

import { CoreActions } from '@reducers/core';
import { SelectPcPriceActions } from '@reducers/selectPcPrice';
import { SelectPcTypeActions } from '@reducers/selectPcType';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from '.';

export type StoreEvent = CoreActions | SelectPcTypeActions | SelectPcPriceActions;
export type Store = typeof store;

export const useDispatch = () => {
  const dispatch = ReduxUseDispatch();
  return (event: StoreEvent) => {
    dispatch(event);
  };
};

export const store = configureStore({ reducer: rootReducer });
