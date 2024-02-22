import { TypedUseSelectorHook, useDispatch as ReduxUseDispatch, useSelector as ReduxUseSelector } from 'react-redux';

import { CoreActions } from '@reducers/core';
import { rootReducer, RootState } from '@reducers/index';
import { configureStore } from '@reduxjs/toolkit';

export type StoreEvent = CoreActions;
export type Store = typeof store;

export const useDispatch = () => {
  const dispatch = ReduxUseDispatch();
  return (event: StoreEvent) => {
    dispatch(event);
  };
};

export const useSelector: TypedUseSelectorHook<RootState> = ReduxUseSelector;
export const store = configureStore({ reducer: rootReducer });
