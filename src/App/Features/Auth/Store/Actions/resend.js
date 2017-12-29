import {
  SET_RESEND_USERNAME,
  ATTEMPT_RESEND,
  RESEND_SUCCESS,
  RESEND_FAIL,
  RESEND_RESET_STATE,
} from '../constants';
import handleFetchErrors from '../../../../Util/fetchErrorHandler';
import cognitoErrorParser from '../../../../Util/cognitoErrorParser';

export const setResendUsername = text => ({
  type: SET_RESEND_USERNAME,
  payload: {
    text,
  },
});

export const attemptResend = () => ({
  type: ATTEMPT_RESEND,
});

export const resendSuccess = () => ({
  type: RESEND_SUCCESS,
});

export const resendFail = message => ({
  type: RESEND_FAIL,
  payload: {
    message,
  },
});

export const resend = userName => (dispatch) => {
  dispatch(attemptResend());
  const body = {
    userName,
  };
  //  TODO - put variable somewhere
  return fetch('http://localhost:3001/auth/resend', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(cognitoErrorParser)
    .then(handleFetchErrors)
    .then(response => response.json())
    .then(json => dispatch(resendSuccess(json)))
    .catch((err) => {
      let message = '';
      message = (!err.code) ? 'Unable to connect, please try again' : err.message;
      return dispatch(resendFail(message));
    });
};

export const resetResendState = () => ({
  type: RESEND_RESET_STATE,
});
