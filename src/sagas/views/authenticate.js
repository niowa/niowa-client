import { put, take, takeEvery, all } from 'redux-saga/effects';
import { success, error } from 'react-notification-system-redux';
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
  navigateToHome,
} from 'actionCreators/routing';

import ActionTypes from 'actionTypes/views/authenticate';

function* waitForSignUp({ payload }) {
  yield put(startLoading());

  yield put(UserActionsCreators.startCreateProfile(payload));

  const finishCreateProfile = yield take(UserActionsTypes.FINISH_CREATE_PROFILE);

  if (finishCreateProfile.payload.isSuccess) {
    yield put(UserActionsCreators.startGetProfile());
    yield take(UserActionsTypes.FINISH_GET_PROFILE);
    yield put(navigateToHome());
  }

  yield put(stopLoading());

  if (!finishCreateProfile.payload.isSuccess) {
    yield put(error(formatNotification(finishCreateProfile.payload)));
  }
}

function* signUpWatcher() {
  yield takeEvery(ActionTypes.SIGN_UP_CLICK, waitForSignUp);
}

function* waitForSignIn({ payload }) {
  yield put(startLoading());

  yield put(UserActionsCreators.startCreateSession(payload));

  const finishCreateSession = yield take(UserActionsTypes.FINISH_CREATE_SESSION);

  if (finishCreateSession.payload.isSuccess) {
    yield put(UserActionsCreators.startGetProfile());
    yield take(UserActionsTypes.FINISH_GET_PROFILE);
    yield put(navigateToHome());
  }

  yield put(stopLoading());

  if (!finishCreateSession.payload.isSuccess) {
    yield put(error(formatNotification(finishCreateSession.payload)));
  }
}

function* signInWatcher() {
  yield takeEvery(ActionTypes.SIGN_IN_CLICK, waitForSignIn);
}

export default function* authSaga() {
  yield all([
    signUpWatcher(),
    signInWatcher(),
  ]);
}
