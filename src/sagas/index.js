import { all } from 'redux-saga/effects';

import routerSaga from './router';
import logoutSaga from './logout';

import { saga as usersSaga } from 'domains/user';
import { saga as productsSaga } from 'domains/products';

export default function* rootSaga() {
  yield all([
    routerSaga(),
    logoutSaga(),

    // domains
    usersSaga(),
    productsSaga(),
  ]);
}
