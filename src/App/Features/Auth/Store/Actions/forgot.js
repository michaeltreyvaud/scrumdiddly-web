import {
  SET_FORGOT_USERNAME,
  ATTEMPT_FORGOT,
  FORGOT_SUCCESS,
  FORGOT_FAIL,
  FORGOT_RESET_STATE,
} from '../constants';
import handleFetchErrors from '../../../../Util/fetchErrorHandler';
import cognitoErrorParser from '../../../../Util/cognitoErrorParser';

export const setForgotUsername = text => ({
  type: SET_FORGOT_USERNAME,
  payload: {
    text,
  },
});

export const attemptForgot = () => ({
  type: ATTEMPT_FORGOT,
});

export const forgotSuccess = () => ({
  type: FORGOT_SUCCESS,
});

export const forgotFail = message => ({
  type: FORGOT_FAIL,
  payload: {
    message,
  },
});

export const forgot = userName => (dispatch) => {
  dispatch(attemptForgot());
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
    .then(json => dispatch(forgotSuccess(json)))
    .catch((err) => {
      let message = '';
      message = (!err.code) ? 'Unable to connect, please try again' : err.message;
      return dispatch(forgotFail(message));
    });
};

export const resetForgotState = () => ({
  type: FORGOT_RESET_STATE,
});
