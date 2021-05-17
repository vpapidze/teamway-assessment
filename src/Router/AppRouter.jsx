import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component }) => <Route key={path} path={path} component={component} exact />)}
      </Switch>
    </Router>
  );
}
