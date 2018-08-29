import { RSAA } from 'redux-api-middleware';
import { createAction } from 'redux-actions';
import ActionTypes from './actionTypes';
import { BASE_URL } from 'constants/api';
import * as Formatters from './formatters';

export const cleanProductsData = createAction(ActionTypes.CLEAN_PRODUCTS_DATA);

export const getItem = ({ itemId }) => ({
  [RSAA]: {
    endpoint: `${BASE_URL}api/items/${itemId}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    types: [
      ActionTypes.GET_ITEM_REQUEST,
      {
        type: ActionTypes.GET_ITEM_SUCCESS,
        payload: (action, state, response) =>
          response.json().then(Formatters.formatItem),
      },
      ActionTypes.GET_ITEM_FAILURE,
    ],
  },
});

export const addItem = (item) => {
  const body = Formatters.formatCreateItemRequest(item);
  return {
    [RSAA]: {
      endpoint: `${BASE_URL}admin/items`,
      body,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      types: [
        ActionTypes.ADD_ITEM_REQUEST,
        ActionTypes.ADD_ITEM_SUCCESS,
        ActionTypes.ADD_ITEM_FAILURE,
      ],
    },
  };
};
