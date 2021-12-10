import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Root from './Root';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Root />
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
