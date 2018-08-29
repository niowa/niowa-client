import { LOCATION_CHANGE } from 'react-router-redux';
import { takeEvery, cancel, call, fork, take, put } from 'redux-saga/effects';
import { removeAll } from 'react-notification-system-redux';

// constants
import * as Routes from 'constants/routing';

// view sagas
import home from './views/home';
import auth from './views/authenticate';

import adminAuth from './views/admin/authenticate';
import adminHome from './views/admin/home';

// init
import initialize from './initialize';

let task = null;

const viewSagas = {
  [Routes.HOME]: home,
  [Routes.AUTHENTICATE]: auth,
  [`${Routes.ADMIN}${Routes.AUTHENTICATE}`]: adminAuth,
  [`${Routes.ADMIN}${Routes.HOME}`]: adminHome,
};

function* onchange(action) {
  const {
    hash,
    pathname,
    search,
  } = action.payload;

  if (task) {
    yield cancel(task);
  }

  yield put(removeAll());

  if (pathname in viewSagas) {
    task = yield fork(viewSagas[pathname], search, hash);
  }
}

export default function* routerSaga() {
  yield take(LOCATION_CHANGE);
  const currentRoute = yield call(initialize);

  task = yield fork(viewSagas[currentRoute]);
  yield takeEvery(LOCATION_CHANGE, onchange);
}
