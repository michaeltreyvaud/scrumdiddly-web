import {
  SET_FORGOT_USERNAME,
  ATTEMPT_FORGOT,
  FORGOT_SUCCESS,
  FORGOT_FAIL,
  FORGOT_RESET_STATE,
} from '../ActionTypes/forgot';
import handleFetchErrors from '../../../../Util/fetchErrorHandler';
import cognitoErrorParser from '../../../../Util/cognitoErrorParser';

export const setUsername = text => ({
  type: SET_FORGOT_USERNAME,
  payload: {
    text,
  },
});

export const attempt = () => ({
  type: ATTEMPT_FORGOT,
});

export const success = () => ({
  type: FORGOT_SUCCESS,
});

export const fail = message => ({
  type: FORGOT_FAIL,
  payload: {
    message,
  },
});

export const forgot = userName => (dispatch) => {
  dispatch(attempt());
  const body = {
    userName,
  };
  //  TODO - put variable somewhere
  return fetch('http://localhost:3001/auth/forgot', {
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
  type: FORGOT_RESET_STATE,
});
