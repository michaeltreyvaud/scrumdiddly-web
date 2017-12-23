import {
  SET_LOGIN_EMAIL,
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_LOGIN_PASSWORD,
  SET_SIGNUP_EMAIL,
  SET_SIGNUP_PASSWORD,
  ATTEMPT_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from './constants';
import handleFetchErrors from '../../../Util/fetchErrorHandler';

export const setLoginEmailAddress = text => ({
  type: SET_LOGIN_EMAIL,
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

export const signup = (email, password) => (dispatch) => {
  dispatch(attemptLogin());
  const body = {
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
  }).then(handleFetchErrors).then(response => response.json()).then((json) => {
    return dispatch(signupSuccess(json));
  }).catch((err) => {
    let message = '';
    message = (!err.code) ? 'Unable to connect, please try again' : err.message;
    return dispatch(signupFail(message));
  });
};

export default {};
