import { includes } from 'lodash';
import { put, select, take, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as RoutingSelectors from 'selectors/routing';
import * as LogoutActionCreators from 'actionCreators/logout';
import {
  ActionsCreators as UserActionsCreators,
  ActionsTypes as UserActionsTypes,
  Selectors as UserSelectors
} from 'domains/user';
import { HOME, AUTHENTICATE, ALLOWED_ROUTES, ADMIN_ROUTES } from '../constants/routing';
import {
  startLoading,
  stopLoading,
} from 'actionCreators/loading';
import * as Roles from 'constants/roles';

export default function* initializeSaga() {
  yield put(startLoading());

  let [ route, token, role ] = yield all([
    select(RoutingSelectors.route),
    select(UserSelectors.accessToken),
    select(UserSelectors.currentUserRole),
  ]);

  if (!token) {
    route = includes(ALLOWED_ROUTES, route) ? route : AUTHENTICATE;
  } else if (role !== Roles.ADMIN && includes(ADMIN_ROUTES, route)) {
    yield put(LogoutActionCreators.logout());
    route = AUTHENTICATE;
  } else {
    route = HOME;
    yield put(UserActionsCreators.startGetProfile());
    yield take(UserActionsTypes.FINISH_GET_PROFILE);
  }
  yield put(stopLoading());
  yield put(push(route));
  return route;
}
