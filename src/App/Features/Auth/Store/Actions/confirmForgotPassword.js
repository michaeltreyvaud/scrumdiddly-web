import {
  SET_CONFIRM_FORGOT_PASSWORD_USERNAME,
  SET_CONFIRM_FORGOT_PASSWORD_CODE,
  SET_CONFIRM_FORGOT_PASSWORD_PASSWORD,
  ATTEMPT_CONFIRM_FORGOT_PASSWORD,
  CONFIRM_FORGOT_PASSWORD_SUCCESS,
  CONFIRM_FORGOT_PASSWORD_FAIL,
  CONFIRM_FORGOT_PASSWORD_RESET_STATE,
} from '../constants';
import handleFetchErrors from '../../../../Util/fetchErrorHandler';
import cognitoErrorParser from '../../../../Util/cognitoErrorParser';

export const setUserName = text => ({
  type: SET_CONFIRM_FORGOT_PASSWORD_USERNAME,
  payload: {
    text,
  },
});

export const setCode = text => ({
  type: SET_CONFIRM_FORGOT_PASSWORD_CODE,
  payload: {
    text,
  },
});

export const setPassword = text => ({
  type: SET_CONFIRM_FORGOT_PASSWORD_PASSWORD,
  payload: {
    text,
  },
});

export const attempt = () => ({
  type: ATTEMPT_CONFIRM_FORGOT_PASSWORD,
});

export const success = () => ({
  type: CONFIRM_FORGOT_PASSWORD_SUCCESS,
});

export const fail = message => ({
  type: CONFIRM_FORGOT_PASSWORD_FAIL,
  payload: {
    message,
  },
});

export const confirmForgotPassword = (userName, confirmationCode, password) => (dispatch) => {
  dispatch(attempt());
  const body = {
    userName,
    confirmationCode,
    password,
  };
  //  TODO - put variable somewhere
  return fetch('http://localhost:3001/auth/confirmForgotPassword', {
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
  type: CONFIRM_FORGOT_PASSWORD_RESET_STATE,
});
