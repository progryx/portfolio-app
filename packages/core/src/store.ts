import {
  TypedUseSelectorHook,
  useDispatch as ReduxUseDisptach,
  useSelector as ReduxUseSelector,
} from 'react-redux';

import { CoreActions } from '@reducers/core';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer, RootState } from '@src/reducers';

export type StoreEvent = CoreActions;
export type Store = typeof store;

export const useDispatch = () => {
  const dispatch = ReduxUseDisptach();
  return (event: StoreEvent) => {
    dispatch(event);
  };
};

export const useSelector: TypedUseSelectorHook<RootState> = ReduxUseSelector;
export const store = configureStore({ reducer: rootReducer });
