import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AppRouter from './App/Routing';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>),
  document.getElementById('root'),
);
registerServiceWorker();
