import {
  SET_LOGIN_USERNAME,
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_LOGIN_PASSWORD,
  SET_SIGNUP_EMAIL,
  SET_SIGNUP_PASSWORD,
  ATTEMPT_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SET_SIGNUP_USERNAME,
  SET_CONFIRM_USERNAME,
  SET_CONFIRM_CODE,
  ATTEMPT_CONFIRM,
  CONFIRM_SUCCESS,
  CONFIRM_FAIL,
} from './constants';
import handleFetchErrors from '../../../Util/fetchErrorHandler';
import cognitoErrorParser from '../../../Util/cognitoErrorParser';

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

export const setSignupUsername = text => ({
  type: SET_SIGNUP_USERNAME,
  payload: {
    text,
  },
});

export const setSignupEmailAddress = text => ({
  type: SET_SIGNUP_EMAIL,
  payload: {
    text,
  },
});

export const setSignupPassword = text => ({
  type: SET_SIGNUP_PASSWORD,
  payload: {
    text,
  },
});

export const attemptSignup = () => ({
  type: ATTEMPT_SIGNUP,
});

export const signupSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

export const signupFail = message => ({
  type: SIGNUP_FAIL,
  payload: {
    message,
  },
});

export const signup = (userName, email, password) => (dispatch) => {
  dispatch(attemptLogin());
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
    .then(json => dispatch(signupSuccess(json)))
    .catch((err) => {
      let message = '';
      message = (!err.code) ? 'Unable to connect, please try again' : err.message;
      return dispatch(signupFail(message));
    });
};

export const setConfirmUsername = text => ({
  type: SET_CONFIRM_USERNAME,
  payload: {
    text,
  },
});

export const setConfirmCode = text => ({
  type: SET_CONFIRM_CODE,
  payload: {
    text,
  },
});

export const attemptConfirm = () => ({
  type: ATTEMPT_CONFIRM,
});

export const confirmSuccess = () => ({
  type: CONFIRM_SUCCESS,
});

export const confirmFail = message => ({
  type: CONFIRM_FAIL,
  payload: {
    message,
  },
});

export const confirmAccount = (userName, confirmationCode) => (dispatch) => {
  dispatch(attemptConfirm());
  const body = {
    userName,
    confirmationCode,
  };
  //  TODO - put variable somewhere
  return fetch('http://localhost:3001/auth/confirm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(cognitoErrorParser)
    .then(handleFetchErrors)
    .then(response => response.json())
    .then(json => dispatch(confirmSuccess(json)))
    .catch((err) => {
      let message = '';
      message = (!err.code) ? 'Unable to connect, please try again' : err.message;
      return dispatch(confirmFail(message));
    });
};

export default {};
