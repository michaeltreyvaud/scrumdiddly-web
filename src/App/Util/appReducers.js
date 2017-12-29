import { combineReducers } from 'redux';
import authReducer from '../Features/Auth/Store/Reducers/';

const appReducers = combineReducers({
  auth: authReducer,
});

export default appReducers;
