import * as actions from './confirmForgotPassword';
import * as actionTypes from '../ActionTypes/confirmForgotPassword';

describe('ConfirmForgotPassword Actions', () => {
  it('Should fire action of type SET_CONFIRM_FORGOT_PASSWORD_USERNAME', () => {
    const userName = 'thisisausername';
    const expectedAction = {
      type: actionTypes.SET_CONFIRM_FORGOT_PASSWORD_USERNAME,
      payload: {
        text: userName,
      },
    };
    expect(actions.setUserName(userName)).toEqual(expectedAction);
  });
  it('Should fire action of type SET_CONFIRM_FORGOT_PASSWORD_CODE', () => {
    const code = 'thisisacode';
    const expectedAction = {
      type: actionTypes.SET_CONFIRM_FORGOT_PASSWORD_CODE,
      payload: {
        text: code,
      },
    };
    expect(actions.setCode(code)).toEqual(expectedAction);
  });
  it('Should fire action of type SET_CONFIRM_FORGOT_PASSWORD_PASSWORD', () => {
    const password = 'thisisapassword';
    const expectedAction = {
      type: actionTypes.SET_CONFIRM_FORGOT_PASSWORD_PASSWORD,
      payload: {
        text: password,
      },
    };
    expect(actions.setPassword(password)).toEqual(expectedAction);
  });
  it('Should fire action of type ATTEMPT_CONFIRM_FORGOT_PASSWORD', () => {
    const expectedAction = {
      type: actionTypes.ATTEMPT_CONFIRM_FORGOT_PASSWORD,
    };
    expect(actions.attempt()).toEqual(expectedAction);
  });
  it('Should fire action of type CONFIRM_FORGOT_PASSWORD_SUCCESS', () => {
    const expectedAction = {
      type: actionTypes.CONFIRM_FORGOT_PASSWORD_SUCCESS,
    };
    expect(actions.success()).toEqual(expectedAction);
  });
  it('Should fire action of type CONFIRM_FORGOT_PASSWORD_FAIL', () => {
    const error = 'thisisanerror';
    const expectedAction = {
      type: actionTypes.CONFIRM_FORGOT_PASSWORD_FAIL,
      payload: {
        message: error,
      },
    };
    expect(actions.fail(error)).toEqual(expectedAction);
  });
  it('Should fire action of type CONFIRM_FORGOT_PASSWORD_RESET_STATE', () => {
    const expectedAction = {
      type: actionTypes.CONFIRM_FORGOT_PASSWORD_RESET_STATE,
    };
    expect(actions.resetState()).toEqual(expectedAction);
  });
});
