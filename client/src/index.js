import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Last from './Last';
import { ContextProvider } from './Context';

import './index.css'

ReactDOM.render(
  <ContextProvider>
    <App />
    <Last />
  </ContextProvider>,
  document.getElementById('root'),
);
