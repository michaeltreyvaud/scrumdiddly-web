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

export const setConfirmForgotPasswordUserName = text => ({
  type: SET_CONFIRM_FORGOT_PASSWORD_USERNAME,
  payload: {
    text,
  },
});

export const setConfirmForgotPasswordCode = text => ({
  type: SET_CONFIRM_FORGOT_PASSWORD_CODE,
  payload: {
    text,
  },
});

export const setConfirmForgotPasswordPassword = text => ({
  type: SET_CONFIRM_FORGOT_PASSWORD_PASSWORD,
  payload: {
    text,
  },
});

export const attemptConfirmForgotPassword = () => ({
  type: ATTEMPT_CONFIRM_FORGOT_PASSWORD,
});

export const confirmForgotPasswordSuccess = () => ({
  type: CONFIRM_FORGOT_PASSWORD_SUCCESS,
});

export const confirmForgotPasswordFail = message => ({
  type: CONFIRM_FORGOT_PASSWORD_FAIL,
  payload: {
    message,
  },
});

export const confirmForgotPassword = (userName, confirmationCode, password) => (dispatch) => {
  dispatch(attemptConfirmForgotPassword());
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
    .then(json => dispatch(confirmForgotPasswordSuccess(json)))
    .catch((err) => {
      let message = '';
      message = (!err.code) ? 'Unable to connect, please try again' : err.message;
      return dispatch(confirmForgotPasswordFail(message));
    });
};

export const resetConfirmForgotPasswordState = () => ({
  type: CONFIRM_FORGOT_PASSWORD_RESET_STATE,
});
