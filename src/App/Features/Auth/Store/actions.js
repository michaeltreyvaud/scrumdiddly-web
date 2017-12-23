import {
  SET_EMAIL,
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './constants';
import handleFetchErrors from '../../../Util/fetchErrorHandler';

export const setEmailAddress = text => ({
  type: SET_EMAIL,
  payload: {
    text,
  },
});

export const attemptLogin = () => ({
  type: ATTEMPT_LOGIN,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFail = message => ({
  type: LOGIN_FAIL,
  payload: {
    message,
  },
});

export const login = () => (dispatch) => {
  dispatch(attemptLogin());
  //  TODO - put variable somewhere
  return fetch('http://localhost:3001/auth/login', {
    method: 'POST',
  }).then(handleFetchErrors).then(response => response.json()).then((json) => {
    return dispatch(loginSuccess(json));
  }).catch((err) => {
    let message = '';
    message = (!err.code) ? 'Unable to connect, please try again' : err.message;
    return dispatch(loginFail(message));
  });
};

export default {};
