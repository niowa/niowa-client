import FindItemForm from './SearchItemForm';
import { reduxForm } from 'redux-form/immutable';
import findItemFormValidator from 'helpers/validators/findItem';

export default reduxForm({
  form: 'SearchItemForm',
  validate: findItemFormValidator,
  touchOnBlur: false,
})(FindItemForm);
