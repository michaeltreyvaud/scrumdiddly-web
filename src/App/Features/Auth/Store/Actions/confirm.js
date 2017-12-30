import {
  SET_CONFIRM_USERNAME,
  SET_CONFIRM_CODE,
  ATTEMPT_CONFIRM,
  CONFIRM_SUCCESS,
  CONFIRM_FAIL,
  CONFIRM_RESET_STATE,
} from '../ActionTypes/confirm';
import handleFetchErrors from '../../../../Util/fetchErrorHandler';
import cognitoErrorParser from '../../../../Util/Cognito/confirmErrors';

export const setUsername = text => ({
  type: SET_CONFIRM_USERNAME,
  payload: {
    text,
  },
});

export const setCode = text => ({
  type: SET_CONFIRM_CODE,
  payload: {
    text,
  },
});

export const attempt = () => ({
  type: ATTEMPT_CONFIRM,
});

export const success = () => ({
  type: CONFIRM_SUCCESS,
});

export const fail = message => ({
  type: CONFIRM_FAIL,
  payload: {
    message,
  },
});

export const confirmAccount = (userName, confirmationCode) => (dispatch) => {
  dispatch(attempt());
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
    .then(json => dispatch(success(json)))
    .catch((err) => {
      let message = '';
      message = (!err.code) ? 'Unable to connect, please try again' : err.message;
      return dispatch(fail(message));
    });
};

export const resetState = () => ({
  type: CONFIRM_RESET_STATE,
});
