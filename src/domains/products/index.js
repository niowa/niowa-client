import AllActionsTypes from './actionTypes';
import * as Selectors from './selectors';
import * as AllActionsCreators from './actionCreators';
import reducer from './reducer';
import saga from './sagas';

const ActionsTypes = {
  CLEAN_PRODUCTS_DATA: AllActionsTypes.CLEAN_PRODUCTS_DATA,

  ADD_ITEM_REQUEST: AllActionsTypes.ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS: AllActionsTypes.ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE: AllActionsTypes.ADD_ITEM_FAILURE,

  GET_ITEM_REQUEST: AllActionsTypes.GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS: AllActionsTypes.GET_ITEM_SUCCESS,
  GET_ITEM_FAILURE: AllActionsTypes.GET_ITEM_FAILURE,
};

const ActionsCreators = {
  cleanProductsData: AllActionsCreators.cleanProductsData,
};

export {
  ActionsTypes,
  ActionsCreators,
  Selectors,
  reducer,
  saga,
};
