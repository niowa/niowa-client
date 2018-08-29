import { put, take, all, takeEvery } from 'redux-saga/effects';
import ActionTypes from './actionTypes';
import * as ActionCreators from './actionCreators';

function* createSessionWorker({ payload }) {
  yield put(ActionCreators.createSession(payload));

  const response = yield take([
    ActionTypes.CREATE_SESSION_SUCCESS,
    ActionTypes.CREATE_SESSION_FAILURE,
  ]);

  yield put(ActionCreators.finishCreateSession({
    isSuccess: !response.error,
    ...response,
  }));
}

function* createSessionWatcher() {
  yield takeEvery(ActionTypes.START_CREATE_SESSION, createSessionWorker);
}

function* createProfileWorker({ payload }) {
  yield put(ActionCreators.registerNewUser(payload));

  const response = yield take([
    ActionTypes.CREATE_PROFILE_SUCCESS,
    ActionTypes.CREATE_PROFILE_FAILURE,
  ]);

  yield put(ActionCreators.finishCreateProfile({
    isSuccess: !response.error,
    ...response,
  }));
}

function* createProfileWatcher() {
  yield takeEvery(ActionTypes.START_CREATE_PROFILE, createProfileWorker);
}

function* getProfileWorker() {
  yield put(ActionCreators.getProfile());

  yield take([
    ActionTypes.GET_PROFILE_SUCCESS,
    ActionTypes.GET_PROFILE_FAILURE,
  ]);

  yield put(ActionCreators.finishGetProfile());
}

function* getProfileWatcher() {
  yield takeEvery(ActionTypes.START_GET_PROFILE, getProfileWorker);
}

function* createAdminSessionWorker({ payload }) {
  yield put(ActionCreators.createAdminSession(payload));

  const response = yield take([
    ActionTypes.CREATE_ADMIN_SESSION_SUCCESS,
    ActionTypes.CREATE_ADMIN_SESSION_FAILURE,
  ]);

  yield put(ActionCreators.finishCreateAdminSession({
    isSuccess: !response.error,
    ...response,
  }));
}

function* createAdminSessionWatcher() {
  yield takeEvery(ActionTypes.START_CREATE_ADMIN_SESSION, createAdminSessionWorker);
}

export default function* userSaga () {
  yield all([
    getProfileWatcher(),
    createSessionWatcher(),
    createProfileWatcher(),
    createAdminSessionWatcher(),
  ]);
}
