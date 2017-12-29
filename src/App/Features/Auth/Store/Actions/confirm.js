import {
  SET_CONFIRM_USERNAME,
  SET_CONFIRM_CODE,
  ATTEMPT_CONFIRM,
  CONFIRM_SUCCESS,
  CONFIRM_FAIL,
  CONFIRM_RESET_STATE,
} from '../constants';
import handleFetchErrors from '../../../../Util/fetchErrorHandler';
import cognitoErrorParser from '../../../../Util/cognitoErrorParser';

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

export const resetConfirmState = () => ({
  type: CONFIRM_RESET_STATE,
});
