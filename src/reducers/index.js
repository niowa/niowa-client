import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';
import { reducer as notifications } from 'react-notification-system-redux';

// generic
import modals from './modals';
import routing from './routing';
import loading from './loading';

// domains
import { reducer as user } from 'domains/user';
import { reducer as products } from 'domains/products';

// views

export default combineReducers({
  form: formReducer,

  // generic
  routing,
  modals,
  loading,
  notifications,

  // domains
  user,
  products,
});
