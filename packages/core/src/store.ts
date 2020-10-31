import {
  TypedUseSelectorHook,
  useDispatch as _useDispatch,
  useSelector as _useSelector,
} from 'react-redux';

import { CoreActionTypes } from '@reducers/core';
import { rootReducer, RootState } from '@reducers/index';
import { configureStore } from '@reduxjs/toolkit';

export type StoreEvent = CoreActionTypes;

export function useDispatch() {
  const dispatch = _useDispatch();
  return (event: StoreEvent) => {
    dispatch(event);
  };
}

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;

export const store = configureStore({ reducer: rootReducer });
export type Store = typeof store;
