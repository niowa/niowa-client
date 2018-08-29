import { get } from 'lodash';
import { fromJS } from 'immutable';
import ActionsTypes from './actionTypes';
import * as Roles from 'constants/roles';

const initialState = fromJS({
  role: Roles.UNAUTHORIZED,
  accessToken: null,
  profile: null,
});

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ActionsTypes.CREATE_PROFILE_SUCCESS:
      return state
        .set('accessToken', get(payload, 'data.token'))
        .set('role', Roles.AUTHORIZED);

    case ActionsTypes.CREATE_SESSION_SUCCESS:
      return state
        .set('accessToken', get(payload, 'data.token'))
        .set('role', Roles.AUTHORIZED);

    case ActionsTypes.GET_PROFILE_SUCCESS:
      return state
        .set('profile', fromJS(payload));

    case ActionsTypes.CREATE_ADMIN_SESSION_SUCCESS:
      return state
        .set('accessToken', get(payload, 'data.token'))
        .set('role', Roles.ADMIN);

    case ActionsTypes.CLEAR_USER_DATA:
      return initialState;

    default: {
      return state;
    }
  }
}
