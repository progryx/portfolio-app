import { call, put, takeLatest } from 'redux-saga/effects';

import { mainActions } from '../main';
import { mockData } from '../mockData';

const getServerData = () =>
  new Promise((resolve, _reject) => {
    // return reject('No data available') // Проверка вывода ошибки

    setTimeout(() => {
      resolve(mockData);
    }, 2000);
  });

function* getCardsFromServer() {
  try {
    const data = yield call(getServerData);
    yield put(mainActions.setCards(data));
  } catch (e) {
    yield put(mainActions.setError(e));
  }
}

export function* rootSaga() {
  yield takeLatest('GET_CARDS', getCardsFromServer);
}
