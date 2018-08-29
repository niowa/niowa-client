import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';

import styles from './styles';

import SearchItemForm from './SearchItemForm';
import ItemBox from './ItemBox';

const SearchItemBox = ({
  classes,
  t,
  item,
  searchItem,
}) => (
    <div className={classes.root}>
      <SearchItemForm onSubmit={searchItem} />
      <ItemBox item={item} />
    </div>
  );

SearchItemBox.propTypes = {
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  item: PropTypes.object,
  searchItem: PropTypes.func.isRequired,
};

SearchItemBox.defaultProps = {
  item: null,
};

export default translate()(injectSheet(styles)(SearchItemBox));
