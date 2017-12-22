import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// Import our apps reducers.
import appReducers from './appReducers';

/* eslint-disable no-underscore-dangle */
const configureStore = () => createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware),
);
/* eslint-enable */

//  Returns a configured redux store
export default configureStore;
