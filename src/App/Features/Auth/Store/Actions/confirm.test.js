import * as actions from './confirm';
import * as actionTypes from '../ActionTypes/confirm';

describe('Confirm Actions', () => {
  it('Should fire action of type SET_CONFIRM_USERNAME', () => {
    const userName = 'thisisausername';
    const expectedAction = {
      type: actionTypes.SET_CONFIRM_USERNAME,
      payload: {
        text: userName,
      },
    };
    expect(actions.setUsername(userName)).toEqual(expectedAction);
  });
  it('Should fire action of type SET_CONFIRM_CODE', () => {
    const code = 'thisisacode';
    const expectedAction = {
      type: actionTypes.SET_CONFIRM_CODE,
      payload: {
        text: code,
      },
    };
    expect(actions.setCode(code)).toEqual(expectedAction);
  });
  it('Should fire action of type ATTEMPT_CONFIRM', () => {
    const expectedAction = {
      type: actionTypes.ATTEMPT_CONFIRM,
    };
    expect(actions.attempt()).toEqual(expectedAction);
  });
  it('Should fire action of type CONFIRM_SUCCESS', () => {
    const expectedAction = {
      type: actionTypes.CONFIRM_SUCCESS,
    };
    expect(actions.success()).toEqual(expectedAction);
  });
  it('Should fire action of type CONFIRM_FAIL', () => {
    const errorMessage = 'thisisanerrormessage';
    const expectedAction = {
      type: actionTypes.CONFIRM_FAIL,
      payload: {
        message: errorMessage,
      },
    };
    expect(actions.fail(errorMessage)).toEqual(expectedAction);
  });
  it('Should fire action of type CONFIRM_RESET_STATE', () => {
    const expectedAction = {
      type: actionTypes.CONFIRM_RESET_STATE,
    };
    expect(actions.resetState()).toEqual(expectedAction);
  });
});
