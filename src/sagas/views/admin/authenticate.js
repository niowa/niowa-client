import { put, take, takeEvery, all } from 'redux-saga/effects';
import { error } from 'react-notification-system-redux';
import { formatNotification } from 'formatters/notifications';

// action creators
import {
  ActionsCreators as UserActionsCreators,
  ActionsTypes as UserActionsTypes,
} from 'domains/user';
import {
  startLoading,
  stopLoading,
} from 'actionCreators/loading';

import {
  navigateToAdminPanel,
  navigateToAuth,
} from 'actionCreators/routing';
import ActionTypes from 'actionTypes/views/authenticate';

function* waitAdminForSignIn({ payload }) {
  yield put(startLoading());

  yield put(UserActionsCreators.startCreateAdminSession(payload));

  const finishCreateSession = yield take(UserActionsTypes.FINISH_CREATE_ADMIN_SESSION);

  if (finishCreateSession.payload.isSuccess) {
    yield put(UserActionsCreators.startGetProfile());
    yield take(UserActionsTypes.FINISH_GET_PROFILE);
    yield put(navigateToAdminPanel());
  }

  yield put(stopLoading());

  if (!finishCreateSession.payload.isSuccess) {
    yield put(error(formatNotification(finishCreateSession.payload)));
  }
}

function* signInAdminWatcher() {
  yield takeEvery(ActionTypes.SIGN_IN_ADMIN_CLICK, waitAdminForSignIn);
}

export default function* adminAuthSaga() {
  yield all([
    signInAdminWatcher(),
  ]);
}
