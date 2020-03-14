import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sol from './pages/Sol';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sol" component={Sol} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
