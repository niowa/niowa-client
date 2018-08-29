import SignIn from './SignIn';
import { reduxForm } from 'redux-form/immutable';
import signIpFormValidator from 'helpers/validators/signIn';

export default reduxForm({
  form: 'signIn',
  validate: signIpFormValidator,
  touchOnBlur: false,
})(SignIn);
