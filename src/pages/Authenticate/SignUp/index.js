import SignUp from './SignUp';
import { reduxForm } from 'redux-form/immutable';
import signUpFormValidator from 'helpers/validators/signUp';

export default reduxForm({
  form: 'signUp',
  validate: signUpFormValidator,
  touchOnBlur: false,
})(SignUp);
