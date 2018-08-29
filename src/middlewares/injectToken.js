import set from 'lodash/set';
import { isRSAA, CALL_API } from 'redux-api-middleware';
import { Selectors } from 'domains/user';

export default store => next => (action) => {
  if (isRSAA(action)) {
    const accessToken = Selectors.accessToken(store.getState());

    if (accessToken) {
      set(action, [CALL_API, 'headers', 'x-access-token'], accessToken);
    }
  }

  return next(action);
};
