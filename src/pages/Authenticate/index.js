import Authenticate from './Authenticate';
import { connect } from 'react-redux';

// action creators
import {
  signInClick,
  signUpClick,
} from 'actionCreators/views/authenticate';

const mapDispatchToProps = {
  signInClick,
  signUpClick,
};

export default connect(
  null,
  mapDispatchToProps
)(Authenticate);
