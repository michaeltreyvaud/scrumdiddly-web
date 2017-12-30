import * as actions from '../ActionTypes/forgot';
import forgotReducer, { forgotInitialState } from './forgot';

describe('Forgot reducer', () => {
  it('should return the initial state', () => {
    expect(forgotReducer(undefined, {})).toEqual(forgotInitialState);
  });
  it('should handle the SET_FORGOT_USERNAME action type', () => {
    const userName = 'thisisausername';
    const expectedResult = {
      ...forgotInitialState,
      hasErrors: false,
      errorMessage: '',
      userName,
      userNameValid: true,
    };
    expect(forgotReducer(forgotInitialState, {
      type: actions.SET_FORGOT_USERNAME,
      payload: {
        text: userName,
      },
    })).toEqual(expectedResult);
  });
  it('should handle the ATTEMPT_FORGOT action type', () => {
    const expectedResult = {
      ...forgotInitialState,
      attempt: true,
    };
    expect(forgotReducer(forgotInitialState, {
      type: actions.ATTEMPT_FORGOT,
    })).toEqual(expectedResult);
  });
  it('should handle the FORGOT_SUCCESS action type', () => {
    const expectedResult = {
      ...forgotInitialState,
      success: true,
    };
    expect(forgotReducer(forgotInitialState, {
      type: actions.FORGOT_SUCCESS,
    })).toEqual(expectedResult);
  });
  it('should handle the FORGOT_FAIL action type', () => {
    const errorMessage = 'thisisanerrormessage';
    const expectedResult = {
      ...forgotInitialState,
      hasErrors: true,
      errorMessage,
    };
    expect(forgotReducer(forgotInitialState, {
      type: actions.FORGOT_FAIL,
      payload: {
        message: errorMessage,
      },
    })).toEqual(expectedResult);
  });
  it('should handle the FORGOT_RESET_STATE action type', () => {
    expect(forgotReducer(forgotInitialState, {
      type: actions.FORGOT_RESET_STATE,
    })).toEqual(forgotInitialState);
  });
});
