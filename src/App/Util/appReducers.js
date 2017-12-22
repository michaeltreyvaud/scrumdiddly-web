import { combineReducers } from 'redux';
import authReducer from '../Features/Auth/Store/reducers';

const appReducers = combineReducers({
  auth: authReducer,
});

export default appReducers;
