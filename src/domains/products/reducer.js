import { get } from 'lodash';
import { fromJS } from 'immutable';

import ActionTypes from './actionTypes';

const initialState = fromJS({
  item: null,
});

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.GET_ITEM_SUCCESS:
      return state
        .set('item', fromJS(payload));

    case ActionTypes.GET_ITEM_FAILURE:
      return initialState;

    case ActionTypes.CLEAN_PRODUCTS_DATA:
      return initialState;

    default: {
      return state;
    }
  }
}
