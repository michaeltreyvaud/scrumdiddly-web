import * as actions from './resend';
import * as actionTypes from '../ActionTypes/resend';

describe('Resend Actions', () => {
  it('Should fire action of type SET_RESEND_USERNAME', () => {
    const userName = 'thisisausername';
    const expectedAction = {
      type: actionTypes.SET_RESEND_USERNAME,
      payload: {
        text: userName,
      },
    };
    expect(actions.setUsername(userName)).toEqual(expectedAction);
  });
  it('Should fire action of type ATTEMPT_RESEND', () => {
    const expectedAction = {
      type: actionTypes.ATTEMPT_RESEND,
    };
    expect(actions.attempt()).toEqual(expectedAction);
  });
  it('Should fire action of type RESEND_SUCCESS', () => {
    const expectedAction = {
      type: actionTypes.RESEND_SUCCESS,
    };
    expect(actions.success()).toEqual(expectedAction);
  });
  it('Should fire action of type RESEND_FAIL', () => {
    const errorMessage = 'thisisanerrormessage';
    const expectedAction = {
      type: actionTypes.RESEND_FAIL,
      payload: {
        message: errorMessage,
      },
    };
    expect(actions.fail(errorMessage)).toEqual(expectedAction);
  });
  it('Should fire action of type RESEND_RESET_STATE', () => {
    const expectedAction = {
      type: actionTypes.RESEND_RESET_STATE,
    };
    expect(actions.resetState()).toEqual(expectedAction);
  });
});
