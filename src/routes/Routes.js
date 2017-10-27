import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Map from '../containers/Map';

const Routes = () => (
  <Router>
    <Switch>
      <Route component={Map} />
    </Switch>
  </Router>
);

export default Routes;
