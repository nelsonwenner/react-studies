import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import PrivateRouter from './PrivateRouter';

import Login from '../pages/login/index';
import Dashboard from '../pages/dashboard/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={ Login } />

        <PrivateRouter exact path="/dashboard" component={ Dashboard  } />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
