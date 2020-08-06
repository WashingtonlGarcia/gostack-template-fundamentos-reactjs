import React from '../../gostack-template-fundamentos-reactjs/src/components/FileList/node_modules/react';

import { Switch, Route } from '../../gostack-template-fundamentos-reactjs/src/components/Header/node_modules/react-router-dom';

import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/import" component={Import} />
  </Switch>
);

export default Routes;
