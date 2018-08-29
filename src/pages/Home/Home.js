import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import { translate } from 'react-i18next';

import { HEADLINE } from 'constants/typography';

import Typography from 'material-ui/Typography';

import styles from './styles';

import SearchItemBox from 'components/SearchItemBox';

@translate()
@injectSheet(styles)
export default class Home extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    profile: PropTypes.object,
    getItem: PropTypes.func.isRequired,
    item: PropTypes.object,
  };

  render() {
    const {
      profile,
      classes,
      t,
      getItem,
      item,
    } = this.props;

    const name = profile ? profile.get('name') : t('home:emptyUser');

    return (
      <div className={classes.root}>
        <Typography
          variant={HEADLINE}
          className={classes.headline}
        >
          {t('home:welcome', { name })}
        </Typography>
        <section className={classes.getItem}>
          <SearchItemBox
            searchItem={getItem}
            item={item}
          />
        </section>
      </div>
    );
  }
}
