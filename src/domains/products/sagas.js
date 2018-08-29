import { put, take, takeEvery, all } from 'redux-saga/effects';
import { success, error } from 'react-notification-system-redux';
import { formatNotification } from 'formatters/notifications';

import {
  ActionsTypes as ProductsActionsTypes,
} from 'domains/products';

function* addItemWorker() {
  const action = yield take([
    ProductsActionsTypes.ADD_ITEM_SUCCESS,
    ProductsActionsTypes.ADD_ITEM_FAILURE,
  ]);

  if (action.type === ProductsActionsTypes.ADD_ITEM_SUCCESS) {
    yield put(success(formatNotification(action)));
  } else {
    yield put(error(formatNotification(action)));
  }
}

function* addItemWatcher() {
  yield takeEvery(ProductsActionsTypes.ADD_ITEM_REQUEST, addItemWorker);
}

function* getItemWorker() {
  const action = yield take([
    ProductsActionsTypes.GET_ITEM_SUCCESS,
    ProductsActionsTypes.GET_ITEM_FAILURE,
  ]);

  if (action.type === ProductsActionsTypes.GET_ITEM_FAILURE) {
    yield put(error(formatNotification(action)));
  }
}

function* getItemWatcher() {
  yield takeEvery(ProductsActionsTypes.GET_ITEM_REQUEST, getItemWorker);
}

export default function* productsSaga () {
  yield all([
    addItemWatcher(),
    getItemWatcher(),
  ]);
}
