import * as actions from '../ActionTypes/confirm';
import confirmReducer, { confirmInitialState } from './confirm';

describe('Confirm reducer', () => {
  it('should return the initial state', () => {
    expect(confirmReducer(undefined, {})).toEqual(confirmInitialState);
  });
  it('should handle the SET_CONFIRM_USERNAME action type', () => {
    const userName = 'thisisausername';
    const expectedResult = {
      ...confirmInitialState,
      hasErrors: false,
      errorMessage: '',
      userName,
      userNameValid: true,
    };
    expect(confirmReducer(confirmInitialState, {
      type: actions.SET_CONFIRM_USERNAME,
      payload: {
        text: userName,
      },
    })).toEqual(expectedResult);
  });
  it('should handle the SET_CONFIRM_CODE action type', () => {
    const code = 'thisisacode';
    const expectedResult = {
      ...confirmInitialState,
      hasErrors: false,
      errorMessage: '',
      code,
      codeValid: true,
    };
    expect(confirmReducer(confirmInitialState, {
      type: actions.SET_CONFIRM_CODE,
      payload: {
        text: code,
      },
    })).toEqual(expectedResult);
  });
  it('should handle the ATTEMPT_CONFIRM action type', () => {
    const expectedResult = {
      ...confirmInitialState,
      attempt: true,
    };
    expect(confirmReducer(confirmInitialState, {
      type: actions.ATTEMPT_CONFIRM,
    })).toEqual(expectedResult);
  });
  it('should handle the CONFIRM_SUCCESS action type', () => {
    const expectedResult = {
      ...confirmInitialState,
      success: true,
    };
    expect(confirmReducer(confirmInitialState, {
      type: actions.CONFIRM_SUCCESS,
    })).toEqual(expectedResult);
  });
  it('should handle the CONFIRM_FAIL action type', () => {
    const errorMessage = 'thisisanerrormessage';
    const expectedResult = {
      ...confirmInitialState,
      hasErrors: true,
      errorMessage,
    };
    expect(confirmReducer(confirmInitialState, {
      type: actions.CONFIRM_FAIL,
      payload: {
        message: errorMessage,
      },
    })).toEqual(expectedResult);
  });
  it('should handle the CONFIRM_RESET_STATE action type', () => {
    expect(confirmReducer(confirmInitialState, {
      type: actions.CONFIRM_RESET_STATE,
    })).toEqual(confirmInitialState);
  });
});
