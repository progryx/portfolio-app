import { call, put, takeLatest } from 'redux-saga/effects';

import { actions } from '../main';
import { mockData } from '../mockData';

const getServerData = () =>
  new Promise((resolve, _reject) => {
    // return reject('No data available') // Проверка вывода ошибки

    setTimeout(() => {
      resolve(mockData);
    }, 2000);
  });

function* getUsersFromServer() {
  try {
    const data = yield call(getServerData);
    yield put(actions.setUsers(data));
  } catch (e) {
    yield put(actions.setError(e));
  }
}

export function* rootSaga() {
  yield takeLatest('GET_USERS', getUsersFromServer);
}
