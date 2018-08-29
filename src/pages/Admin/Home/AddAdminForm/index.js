import FindItemForm from './AddAdminForm';
import { reduxForm } from 'redux-form/immutable';
import addAdminFormValidator from 'helpers/validators/addAdmin';

export default reduxForm({
  form: 'AddAdminForm',
  validate: addAdminFormValidator,
  touchOnBlur: false,
})(FindItemForm);
