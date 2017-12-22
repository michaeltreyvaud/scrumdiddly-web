import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './App/Util/configureStore';
import './index.css';
import AppRouter from './App/Routing';
import registerServiceWorker from './registerServiceWorker';

const reduxStore = configureStore();
ReactDOM.render(
  (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>),
  document.getElementById('root'),
);
registerServiceWorker();
