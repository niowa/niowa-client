import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { translate } from 'react-i18next';

import styles from './styles';

import SignIn from 'components/SignIn';

@translate()
@injectSheet(styles)
export default class Authenticate extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    signInAdminClick: PropTypes.func.isRequired,
  };

  render() {
    const { classes, t, signInAdminClick } = this.props;

    return (
      <div className={classes.root}>
        <SignIn onSubmit={signInAdminClick} />
      </div>
    );
  }
}
