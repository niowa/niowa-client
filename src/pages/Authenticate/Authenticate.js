import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import SwipeableViews from 'react-swipeable-views';
import { translate } from 'react-i18next';

import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

import styles from './styles';

import SignIn from 'components/SignIn';
import SignUp from './SignUp';

@translate()
@injectSheet(styles)
export default class Authenticate extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    signInClick: PropTypes.func.isRequired,
    signUpClick: PropTypes.func.isRequired,
  };

  constructor() {
    super();

    this.state = {
      selectedTab: 0,
    };
  }

  setSelectedTab = selectedTab => this.setState({ selectedTab });

  render() {
    const { classes, t, signInClick, signUpClick } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          color="default"
          position="static"
          className={classes.appBar}
        >
          <Tabs
            value={this.state.selectedTab}
            onChange={(event, selectedTab) => this.setSelectedTab(selectedTab)}
            indicatorClassName={classes.selectedTab}
            classes={{
              root: classes.tabs,
            }}
            fullWidth
          >
            <Tab
              className={classes.tab}
              label={t('auth:signIn')}
            />
            <Tab
              className={classes.tab}
              label={t('auth:signUp')}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={this.state.selectedTab}
          onChangeIndex={this.setSelectedTab}
          className={classes.swipeableViews}
        >
          <SignIn
            onSubmit={signInClick}
          />
          <SignUp
            onSubmit={signUpClick}
          />
        </SwipeableViews>
      </div>
    );
  }
}
