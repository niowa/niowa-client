import Authenticate from './Authenticate';
import { connect } from 'react-redux';

// action creators
import {
  signInAdminClick,
} from 'actionCreators/views/authenticate';

const mapDispatchToProps = {
  signInAdminClick,
};

export default connect(
  null,
  mapDispatchToProps
)(Authenticate);
