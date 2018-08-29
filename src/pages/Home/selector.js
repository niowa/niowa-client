import { createStructuredSelector } from 'reselect';
import { route } from '../../selectors/routing';
import { Selectors as ProfileSelectors } from 'domains/user';
import { Selectors as ProductsSelectors } from 'domains/products';

export default createStructuredSelector({
  route: route,
  profile: ProfileSelectors.profile,
  item: ProductsSelectors.item,
});

