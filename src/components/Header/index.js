import { connect } from 'react-redux';

// actions
import { logout } from 'actionCreators/logout';

// view
import Header from './Header';

// selector
import headerSelector from './selector';

const mapDispatchToProps = {
  logout,
};

export default connect(
  headerSelector,
  mapDispatchToProps,
)(Header);
