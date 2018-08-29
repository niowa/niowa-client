import FindItemForm from './AddItemForm';
import { reduxForm } from 'redux-form/immutable';
import addItemFormValidator from 'helpers/validators/addItem';

export default reduxForm({
  form: 'AddItemForm',
  validate: addItemFormValidator,
  touchOnBlur: false,
})(FindItemForm);
