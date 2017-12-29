import {
  SET_RESEND_USERNAME,
  ATTEMPT_RESEND,
  RESEND_SUCCESS,
  RESEND_FAIL,
  RESEND_RESET_STATE,
} from '../constants';
import handleFetchErrors from '../../../../Util/fetchErrorHandler';
import cognitoErrorParser from '../../../../Util/cognitoErrorParser';

export const setUsername = text => ({
  type: SET_RESEND_USERNAME,
  payload: {
    text,
  },
});

export const attempt = () => ({
  type: ATTEMPT_RESEND,
});

export const success = () => ({
  type: RESEND_SUCCESS,
});

export const fail = message => ({
  type: RESEND_FAIL,
  payload: {
    message,
  },
});

export const resend = userName => (dispatch) => {
  dispatch(attempt());
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
    .then(json => dispatch(success(json)))
    .catch((err) => {
      let message = '';
      message = (!err.code) ? 'Unable to connect, please try again' : err.message;
      return dispatch(fail(message));
    });
};

export const resetState = () => ({
  type: RESEND_RESET_STATE,
});
