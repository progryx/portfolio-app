import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { RootApp } from './App';

ReactDOM.render(
  <BrowserRouter>
    <RootApp />
  </BrowserRouter>,
  document.getElementById('root')
);
