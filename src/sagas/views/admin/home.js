import { put, take, takeEvery, all } from 'redux-saga/effects';
import { success, error } from 'react-notification-system-redux';
import { formatNotification } from 'formatters/notifications';

// action creators
import {
  ActionsTypes as UserActionsTypes,
} from 'domains/user';

function* addAdminWorker() {
  const action = yield take([
    UserActionsTypes.ADD_ADMIN_SUCCESS,
    UserActionsTypes.ADD_ADMIN_FAILURE,
  ]);

  if (action.type === UserActionsTypes.ADD_ADMIN_SUCCESS) {
    yield put(success(formatNotification(action)));
  } else {
    yield put(error(formatNotification(action)));
  }
}

function* addAdminWatcher() {
  yield takeEvery(UserActionsTypes.ADD_ADMIN_REQUEST, addAdminWorker);
}

export default function* adminHomeSaga() {
  yield all([
    addAdminWatcher(),
  ]);
}
