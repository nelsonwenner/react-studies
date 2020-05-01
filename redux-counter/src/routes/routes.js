import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Counter from '../pages/counter/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Counter} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;