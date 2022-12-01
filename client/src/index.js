import React from 'react';
import ReactDOM from 'react-dom';
// import Last from "./Last";
import App from './App';
import { ContextProvider } from './Context';

import './index.css'

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root'),
);
