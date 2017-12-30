import * as actions from '../ActionTypes/resend';
import resendReducer, { resendInitialState } from './resend';

describe('Resend reducer', () => {
  it('should return the initial state', () => {
    expect(resendReducer(undefined, {})).toEqual(resendInitialState);
  });
  it('should handle the SET_RESEND_USERNAME action type', () => {
    const userName = 'thisisausername';
    const expectedResult = {
      ...resendInitialState,
      hasErrors: false,
      errorMessage: '',
      userName,
      userNameValid: true,
    };
    expect(resendReducer(resendInitialState, {
      type: actions.SET_RESEND_USERNAME,
      payload: {
        text: userName,
      },
    })).toEqual(expectedResult);
  });
  it('should handle the ATTEMPT_RESEND action type', () => {
    const expectedResult = {
      ...resendInitialState,
      attempt: true,
    };
    expect(resendReducer(resendInitialState, {
      type: actions.ATTEMPT_RESEND,
    })).toEqual(expectedResult);
  });
  it('should handle the RESEND_SUCCESS action type', () => {
    const expectedResult = {
      ...resendInitialState,
      success: true,
    };
    expect(resendReducer(resendInitialState, {
      type: actions.RESEND_SUCCESS,
    })).toEqual(expectedResult);
  });
  it('should handle the RESEND_FAIL action type', () => {
    const errorMessage = 'thisisanerrormessage';
    const expectedResult = {
      ...resendInitialState,
      hasErrors: true,
      errorMessage,
    };
    expect(resendReducer(resendInitialState, {
      type: actions.RESEND_FAIL,
      payload: {
        message: errorMessage,
      },
    })).toEqual(expectedResult);
  });
  it('should handle the RESEND_RESET_STATE action type', () => {
    expect(resendReducer(resendInitialState, {
      type: actions.RESEND_RESET_STATE,
    })).toEqual(resendInitialState);
  });
});
