import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import { translate } from 'react-i18next';

import { HEADLINE } from 'constants/typography';

import Typography from 'material-ui/Typography';

import SearchItemBox from 'components/SearchItemBox';
import AddAdminForm from './AddAdminForm';
import AddItemForm from './AddItemForm';
import styles from './styles';

@translate()
@injectSheet(styles)
export default class Home extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    profile: PropTypes.object,
    getItem: PropTypes.func.isRequired,
    addAdmin: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    item: PropTypes.object,
  };

  render() {
    const {
      profile,
      classes,
      t,
      getItem,
      addAdmin,
      addItem,
      item,
    } = this.props;

    const name = profile ? profile.get('name') : t('home:emptyUser');

    return (
      <div>
        <Typography
          variant={HEADLINE}
          className={classes.headline}
        >
          {t('adminHome:welcome', { name })}
        </Typography>
        <div className={classes.content}>
          <section className={classes.getData}>
            <SearchItemBox
              searchItem={getItem}
              item={item}
            />
          </section>
          <section className={classes.addData}>
            <AddAdminForm onSubmit={addAdmin} />
            <AddItemForm onSubmit={addItem} />
          </section>
        </div>
      </div>
    );
  }
}
