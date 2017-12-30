import * as actions from './forgot';
import * as actionTypes from '../ActionTypes/forgot';

describe('Forgot Actions', () => {
  it('Should fire action of type SET_FORGOT_USERNAME', () => {
    const userName = 'thisisausername';
    const expectedAction = {
      type: actionTypes.SET_FORGOT_USERNAME,
      payload: {
        text: userName,
      },
    };
    expect(actions.setUsername(userName)).toEqual(expectedAction);
  });
  it('Should fire action of type ATTEMPT_FORGOT', () => {
    const expectedAction = {
      type: actionTypes.ATTEMPT_FORGOT,
    };
    expect(actions.attempt()).toEqual(expectedAction);
  });
  it('Should fire action of type FORGOT_SUCCESS', () => {
    const expectedAction = {
      type: actionTypes.FORGOT_SUCCESS,
    };
    expect(actions.success()).toEqual(expectedAction);
  });
  it('Should fire action of type FORGOT_FAIL', () => {
    const errorMessage = 'thisisanerrormessage';
    const expectedAction = {
      type: actionTypes.FORGOT_FAIL,
      payload: {
        message: errorMessage,
      },
    };
    expect(actions.fail(errorMessage)).toEqual(expectedAction);
  });
  it('Should fire action of type FORGOT_RESET_STATE', () => {
    const expectedAction = {
      type: actionTypes.FORGOT_RESET_STATE,
    };
    expect(actions.resetState()).toEqual(expectedAction);
  });
});
