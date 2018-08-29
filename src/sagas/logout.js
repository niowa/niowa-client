import { put, take } from 'redux-saga/effects';
import LogoutActionTypes from 'actionTypes/logout';
import { ActionsCreators as ProductsActionCreators } from 'domains/products';
import { ActionsCreators as UserActionCreators } from 'domains/user';
import { navigateToAuth } from 'actionCreators/routing';

export default function* logoutSaga() {
  while(true) {
    yield take([LogoutActionTypes.LOGOUT]);
    yield put(ProductsActionCreators.cleanProductsData());
    yield put(UserActionCreators.clearUserData());
    yield put(navigateToAuth());
  }
}
