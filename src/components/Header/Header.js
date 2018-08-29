import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import injectSheet from 'react-jss';
import Notifications from 'react-notification-system-redux';

import Button from 'material-ui/Button';

import styles from './styles';
import * as Roles from 'constants/roles';

@translate()
@injectSheet(styles)
export default class Header extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    notifications: PropTypes.array,
    role: PropTypes.string.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { t, classes, notifications, role, logout } = this.props;
    const { root } = classes;

    return (
      <div className={root}>
        <Notifications
          notifications={notifications}
          style={classes.notifications.style}
        />
        <h4>{t('app:headerTitle')}</h4>
        {
          role !== Roles.UNAUTHORIZED && (
            <Button
              onClick={logout}
              type="submit"
              className={classes.submitButton}
            >
              {t('header:logout')}
            </Button>
          )
        }
      </div>
    );
  }
}
