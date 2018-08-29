import { connect } from 'react-redux';

// view
import Home from './Home';

// selector
import homeSelector from './selector';

// acton creators
import { getItem, addItem } from 'domains/products/actionCreators';
import { addAdmin } from 'domains/user/actionCreators';

const mapDispatchToProps = {
  getItem,
  addAdmin,
  addItem,
};

export default connect(
  homeSelector,
  mapDispatchToProps,
)(Home);
