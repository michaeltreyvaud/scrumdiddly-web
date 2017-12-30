import * as actions from './signup';
import * as actionTypes from '../ActionTypes/signup';

describe('Signup Actions', () => {
  it('Should fire action of type SET_SIGNUP_USERNAME', () => {
    const userName = 'thisisausername';
    const expectedAction = {
      type: actionTypes.SET_SIGNUP_USERNAME,
      payload: {
        text: userName,
      },
    };
    expect(actions.setUsername(userName)).toEqual(expectedAction);
  });
  it('Should fire action of type SET_SIGNUP_EMAIL', () => {
    const email = 'thisisanemail';
    const expectedAction = {
      type: actionTypes.SET_SIGNUP_EMAIL,
      payload: {
        text: email,
      },
    };
    expect(actions.setEmail(email)).toEqual(expectedAction);
  });
  it('Should fire action of type SET_SIGNUP_PASSWORD', () => {
    const password = 'thisisapassword';
    const expectedAction = {
      type: actionTypes.SET_SIGNUP_PASSWORD,
      payload: {
        text: password,
      },
    };
    expect(actions.setPassword(password)).toEqual(expectedAction);
  });
  it('Should fire action of type ATTEMPT_SIGNUP', () => {
    const expectedAction = {
      type: actionTypes.ATTEMPT_SIGNUP,
    };
    expect(actions.attempt()).toEqual(expectedAction);
  });
  it('Should fire action of type SIGNUP_SUCCESS', () => {
    const expectedAction = {
      type: actionTypes.SIGNUP_SUCCESS,
    };
    expect(actions.success()).toEqual(expectedAction);
  });
  it('Should fire action of type SIGNUP_FAIL', () => {
    const error = 'thisisanerror';
    const expectedAction = {
      type: actionTypes.SIGNUP_FAIL,
      payload: {
        message: error,
      },
    };
    expect(actions.fail(error)).toEqual(expectedAction);
  });
  it('Should fire action of type SIGNUP_RESET_STATE', () => {
    const expectedAction = {
      type: actionTypes.SIGNUP_RESET_STATE,
    };
    expect(actions.resetState()).toEqual(expectedAction);
  });
});
