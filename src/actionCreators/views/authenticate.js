import ActionTypes from 'actionTypes/views/authenticate';
import { createAction } from 'redux-actions';

export const signInClick = createAction(ActionTypes.SIGN_IN_CLICK);
export const signUpClick = createAction(ActionTypes.SIGN_UP_CLICK);

export const signInAdminClick = createAction(ActionTypes.SIGN_IN_ADMIN_CLICK);
