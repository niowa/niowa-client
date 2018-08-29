import { connect } from 'react-redux';

// view
import Home from './Home';

// selector
import homeSelector from './selector';

// acton creators
import { getItem } from 'domains/products/actionCreators';

const mapDispatchToProps = {
  getItem,
};

export default connect(
  homeSelector,
  mapDispatchToProps,
)(Home);
