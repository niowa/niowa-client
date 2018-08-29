import { RSAA } from 'redux-api-middleware';
import { createAction } from 'redux-actions';
import ActionTypes from './actionTypes';
import { BASE_URL } from 'constants/api';
import * as Formatters from './formatters';

export const startGetProfile = createAction(ActionTypes.START_GET_PROFILE);
export const startCreateProfile = createAction(ActionTypes.START_CREATE_PROFILE);
export const startCreateSession = createAction(ActionTypes.START_CREATE_SESSION);
export const startCreateAdminSession = createAction(ActionTypes.START_CREATE_ADMIN_SESSION);

export const finishGetProfile = createAction(ActionTypes.FINISH_GET_PROFILE);
export const finishCreateProfile = createAction(ActionTypes.FINISH_CREATE_PROFILE);
export const finishCreateSession = createAction(ActionTypes.FINISH_CREATE_SESSION);
export const finishCreateAdminSession = createAction(ActionTypes.FINISH_CREATE_ADMIN_SESSION);

export const clearUserData = createAction(ActionTypes.CLEAR_USER_DATA);

export const registerNewUser = (user) => {
  const body = Formatters.formatCreateProfileRequest(user);
  return {
    [RSAA]: {
      endpoint: `${BASE_URL}api/profile`,
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        ActionTypes.CREATE_PROFILE_REQUEST,
        ActionTypes.CREATE_PROFILE_SUCCESS,
        ActionTypes.CREATE_PROFILE_FAILURE,
      ],
    },
  };
};

export const getProfile = () => ({
  [RSAA]: {
    endpoint: `${BASE_URL}api/profile`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    types: [
      ActionTypes.GET_PROFILE_REQUEST,
      {
        type: ActionTypes.GET_PROFILE_SUCCESS,
        payload: (action, state, response) =>
          response.json().then(Formatters.formatProfile),
      },
      ActionTypes.GET_PROFILE_FAILURE,
    ],
  },
});

export const createSession = (user) => {
  const body = Formatters.formatCreateSessionRequest(user);
  return {
    [RSAA]: {
      endpoint: `${BASE_URL}api/session`,
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        ActionTypes.CREATE_SESSION_REQUEST,
        ActionTypes.CREATE_SESSION_SUCCESS,
        ActionTypes.CREATE_SESSION_FAILURE,
      ],
    },
  };
};

export const createAdminSession = (user) => {
  const body = Formatters.formatCreateSessionRequest(user);
  return {
    [RSAA]: {
      endpoint: `${BASE_URL}admin/session`,
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        ActionTypes.CREATE_ADMIN_SESSION_REQUEST,
        ActionTypes.CREATE_ADMIN_SESSION_SUCCESS,
        ActionTypes.CREATE_ADMIN_SESSION_FAILURE,
      ],
    },
  };
};

export const addAdmin = (email) => ({
  [RSAA]: {
    endpoint: `${BASE_URL}admin/profile/promote`,
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
    types: [
      ActionTypes.ADD_ADMIN_REQUEST,
      ActionTypes.ADD_ADMIN_SUCCESS,
      ActionTypes.ADD_ADMIN_FAILURE,
    ],
  },
});
