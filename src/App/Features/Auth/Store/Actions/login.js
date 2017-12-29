import {
  SET_LOGIN_USERNAME,
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_RESET_STATE,
  SET_LOGIN_PASSWORD,
} from '../constants';
import handleFetchErrors from '../../../../Util/fetchErrorHandler';

export const setLoginUsername = text => ({
  type: SET_LOGIN_USERNAME,
  payload: {
    text,
  },
});

export const setLoginPassword = text => ({
  type: SET_LOGIN_PASSWORD,
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

export const login = (userName, password) => (dispatch) => {
  dispatch(attemptLogin());
  const body = {
    userName,
    password,
  };
  //  TODO - put variable somewhere
  return fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(handleFetchErrors)
    .then(response => response.json())
    .then(json => dispatch(loginSuccess(json)))
    .catch((err) => {
      let message = '';
      message = (!err.code) ? 'Unable to connect, please try again' : err.message;
      return dispatch(loginFail(message));
    });
};

export const resetLoginState = () => ({
  type: LOGIN_RESET_STATE,
});
