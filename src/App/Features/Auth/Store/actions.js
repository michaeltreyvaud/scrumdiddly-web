import {
  SET_EMAIL,
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_PASSWORD,
} from './constants';
import handleFetchErrors from '../../../Util/fetchErrorHandler';

export const setEmailAddress = text => ({
  type: SET_EMAIL,
  payload: {
    text,
  },
});

export const setPassword = text => ({
  type: SET_PASSWORD,
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

export const login = (email, password) => (dispatch) => {
  dispatch(attemptLogin());
  const body = {
    email,
    password,
  };
  //  TODO - put variable somewhere
  return fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(handleFetchErrors).then(response => response.json()).then((json) => {
    return dispatch(loginSuccess(json));
  }).catch((err) => {
    let message = '';
    message = (!err.code) ? 'Unable to connect, please try again' : err.message;
    return dispatch(loginFail(message));
  });
};

export default {};
