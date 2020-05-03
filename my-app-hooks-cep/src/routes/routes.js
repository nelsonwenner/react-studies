import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomeContainer from '../pages/home/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;