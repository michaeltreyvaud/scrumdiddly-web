import {
  SET_SIGNUP_EMAIL,
  SET_SIGNUP_PASSWORD,
  ATTEMPT_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SET_SIGNUP_USERNAME,
  SIGNUP_RESET_STATE,
} from '../ActionTypes/signup';
import handleFetchErrors from '../../../../Util/fetchErrorHandler';
import cognitoErrorParser from '../../../../Util/cognitoErrorParser';

export const setUsername = text => ({
  type: SET_SIGNUP_USERNAME,
  payload: {
    text,
  },
});

export const setEmail = text => ({
  type: SET_SIGNUP_EMAIL,
  payload: {
    text,
  },
});

export const setPassword = text => ({
  type: SET_SIGNUP_PASSWORD,
  payload: {
    text,
  },
});

export const attempt = () => ({
  type: ATTEMPT_SIGNUP,
});

export const success = () => ({
  type: SIGNUP_SUCCESS,
});

export const fail = message => ({
  type: SIGNUP_FAIL,
  payload: {
    message,
  },
});

export const signup = (userName, email, password) => (dispatch) => {
  dispatch(attempt());
  const body = {
    userName,
    email,
    password,
  };
  //  TODO - put variable somewhere
  return fetch('http://localhost:3001/auth/signup', {
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
  type: SIGNUP_RESET_STATE,
});
