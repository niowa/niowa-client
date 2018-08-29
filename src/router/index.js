import React from 'react';
import { Switch, Route } from 'react-router';

import * as Routes from '../constants/routing';

// views
import Home from 'pages/Home';
import Authenticate from 'pages/Authenticate';

import AdminAuthenticate from 'pages/Admin/Authenticate';
import AdminHome from 'pages/Admin/Home';

import NotFound from 'pages/NotFound';

const Router = () => (
  <Switch>
    <Route exact path={Routes.AUTHENTICATE} component={Authenticate} />
    <Route exact path={Routes.HOME} component={Home} />

    <Route exact path={`${Routes.ADMIN}${Routes.AUTHENTICATE}`} component={AdminAuthenticate} />
    <Route exact path={`${Routes.ADMIN}${Routes.HOME}`} component={AdminHome} />

    <Route path="*" component={NotFound} />
  </Switch>
);

export default Router;
