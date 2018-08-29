import AllActionsTypes from './actionTypes';
import * as Selectors from './selectors';
import * as AllActionsCreators from './actionCreators';
import saga from './sagas';
import reducer from './reducer';

const ActionsTypes = {
  FINISH_GET_PROFILE: AllActionsTypes.FINISH_GET_PROFILE,
  FINISH_CREATE_PROFILE: AllActionsTypes.FINISH_CREATE_PROFILE,
  FINISH_CREATE_SESSION: AllActionsTypes.FINISH_CREATE_SESSION,
  FINISH_CREATE_ADMIN_SESSION: AllActionsTypes.FINISH_CREATE_ADMIN_SESSION,
  ADD_ADMIN_REQUEST: AllActionsTypes.ADD_ADMIN_REQUEST,
  ADD_ADMIN_SUCCESS: AllActionsTypes.ADD_ADMIN_SUCCESS,
  ADD_ADMIN_FAILURE: AllActionsTypes.ADD_ADMIN_FAILURE,
};

const ActionsCreators = {
  startGetProfile: AllActionsCreators.startGetProfile,
  startCreateProfile: AllActionsCreators.startCreateProfile,
  startCreateSession: AllActionsCreators.startCreateSession,
  clearUserData: AllActionsCreators.clearUserData,
  startCreateAdminSession: AllActionsCreators.startCreateAdminSession,
};

export {
  Selectors,
  ActionsTypes,
  ActionsCreators,
  reducer,
  saga,
};
