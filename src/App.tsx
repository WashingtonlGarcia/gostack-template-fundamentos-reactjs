import React from '../../gostack-template-fundamentos-reactjs/src/components/FileList/node_modules/react';
import { BrowserRouter as Router } from '../../gostack-template-fundamentos-reactjs/src/components/Header/node_modules/react-router-dom';

import Routes from '../../../gostack-template-fundamentos-reactjs/src/routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
