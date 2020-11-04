import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { mainReducer } from './main';
import { rootSaga } from './sagas/root-saga';

type RootReducerType = typeof rootReducer;
export type RootState = ReturnType<RootReducerType>;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionTypes<
  T extends {
    [key: string]: (...args: any[]) => unknown;
  }
> = ReturnType<PropertiesTypes<T>>;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  mainPage: mainReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
