import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from './components/dashBoard'

const Routes = () => {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/setting">
            <div>123</div>
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
    </Router>
  );
}

export default Routes