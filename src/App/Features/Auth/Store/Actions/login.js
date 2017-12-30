import {
  SET_LOGIN_USERNAME,
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_RESET_STATE,
  SET_LOGIN_PASSWORD,
} from '../ActionTypes/login';
import handleFetchErrors from '../../../../Util/fetchErrorHandler';
import cognitoErrorParser from '../../../../Util/cognitoErrorParser';

export const setUsername = text => ({
  type: SET_LOGIN_USERNAME,
  payload: {
    text,
  },
});

export const setPassword = text => ({
  type: SET_LOGIN_PASSWORD,
  payload: {
    text,
  },
});

export const attempt = () => ({
  type: ATTEMPT_LOGIN,
});

export const success = () => ({
  type: LOGIN_SUCCESS,
});

export const fail = message => ({
  type: LOGIN_FAIL,
  payload: {
    message,
  },
});

export const login = (userName, password) => (dispatch) => {
  dispatch(attempt());
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
  }).then(cognitoErrorParser)
    .then(handleFetchErrors)
    .then(response => response.json())
    .then(json => dispatch(success(json)))
    .catch((err) => {
      let message = '';
      message = (!err.code) ? 'Unable to connect, please try again' : err.message;
      return dispatch(fail(message));
    });
};

export const resetState = () => ({
  type: LOGIN_RESET_STATE,
});
