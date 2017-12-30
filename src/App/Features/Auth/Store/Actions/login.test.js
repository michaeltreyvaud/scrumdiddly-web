import * as actions from './login';
import * as actionTypes from '../ActionTypes/login';

describe('Login Actions', () => {
  it('Should fire action of type SET_LOGIN_USERNAME', () => {
    const userName = 'thisisausername';
    const expectedAction = {
      type: actionTypes.SET_LOGIN_USERNAME,
      payload: {
        text: userName,
      },
    };
    expect(actions.setUsername(userName)).toEqual(expectedAction);
  });
  it('Should fire action of type SET_LOGIN_PASSWORD', () => {
    const password = 'thisisapassword';
    const expectedAction = {
      type: actionTypes.SET_LOGIN_PASSWORD,
      payload: {
        text: password,
      },
    };
    expect(actions.setPassword(password)).toEqual(expectedAction);
  });
  it('Should fire action of type ATTEMPT_LOGIN', () => {
    const expectedAction = {
      type: actionTypes.ATTEMPT_LOGIN,
    };
    expect(actions.attempt()).toEqual(expectedAction);
  });
  it('Should fire action of type LOGIN_SUCCESS', () => {
    const expectedAction = {
      type: actionTypes.LOGIN_SUCCESS,
    };
    expect(actions.success()).toEqual(expectedAction);
  });
  it('Should fire action of type LOGIN_FAIL', () => {
    const errorMessage = 'thisisanerrormessage';
    const expectedAction = {
      type: actionTypes.LOGIN_FAIL,
      payload: {
        message: errorMessage,
      },
    };
    expect(actions.fail(errorMessage)).toEqual(expectedAction);
  });
  it('Should fire action of type LOGIN_RESET_STATE', () => {
    const expectedAction = {
      type: actionTypes.LOGIN_RESET_STATE,
    };
    expect(actions.resetState()).toEqual(expectedAction);
  });
});
