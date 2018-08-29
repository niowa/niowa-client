import { RSAA } from 'redux-api-middleware';
import ActionTypes from 'actionTypes/views/home';
import { BASE_URL } from 'constants/api';
import * as Formatters from 'formatters/views/home';

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
