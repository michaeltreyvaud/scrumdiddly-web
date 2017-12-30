import * as actions from '../ActionTypes/confirmForgotPassword';
import confirmForgotPasswordReducer, { confirmForgotPasswordInitialState } from './confirmForgotPassword';

describe('Confirm reducer', () => {
  it('should return the initial state', () => {
    expect(confirmForgotPasswordReducer(undefined, {})).toEqual(confirmForgotPasswordInitialState);
  });
  it('should handle the SET_CONFIRM_FORGOT_PASSWORD_USERNAME action type', () => {
    const userName = 'thisisausername';
    const expectedResult = {
      ...confirmForgotPasswordInitialState,
      hasErrors: false,
      errorMessage: '',
      userName,
      userNameValid: true,
    };
    expect(confirmForgotPasswordReducer(confirmForgotPasswordInitialState, {
      type: actions.SET_CONFIRM_FORGOT_PASSWORD_USERNAME,
      payload: {
        text: userName,
      },
    })).toEqual(expectedResult);
  });
  it('should handle the SET_CONFIRM_FORGOT_PASSWORD_CODE action type', () => {
    const code = 'thisisacode';
    const expectedResult = {
      ...confirmForgotPasswordInitialState,
      hasErrors: false,
      errorMessage: '',
      code,
      codeValid: true,
    };
    expect(confirmForgotPasswordReducer(confirmForgotPasswordInitialState, {
      type: actions.SET_CONFIRM_FORGOT_PASSWORD_CODE,
      payload: {
        text: code,
      },
    })).toEqual(expectedResult);
  });
  it('should handle the SET_CONFIRM_FORGOT_PASSWORD_PASSWORD action type', () => {
    const password = 'thisisapassword';
    const expectedResult = {
      ...confirmForgotPasswordInitialState,
      hasErrors: false,
      errorMessage: '',
      password,
      passwordValid: true,
    };
    expect(confirmForgotPasswordReducer(confirmForgotPasswordInitialState, {
      type: actions.SET_CONFIRM_FORGOT_PASSWORD_PASSWORD,
      payload: {
        text: password,
      },
    })).toEqual(expectedResult);
  });
  it('should handle the ATTEMPT_CONFIRM_FORGOT_PASSWORD action type', () => {
    const expectedResult = {
      ...confirmForgotPasswordInitialState,
      attempt: true,
    };
    expect(confirmForgotPasswordReducer(confirmForgotPasswordInitialState, {
      type: actions.ATTEMPT_CONFIRM_FORGOT_PASSWORD,
    })).toEqual(expectedResult);
  });
  it('should handle the CONFIRM_FORGOT_PASSWORD_SUCCESS action type', () => {
    const expectedResult = {
      ...confirmForgotPasswordInitialState,
      success: true,
    };
    expect(confirmForgotPasswordReducer(confirmForgotPasswordInitialState, {
      type: actions.CONFIRM_FORGOT_PASSWORD_SUCCESS,
    })).toEqual(expectedResult);
  });
  it('should handle the CONFIRM_FORGOT_PASSWORD_FAIL action type', () => {
    const errorMessage = 'thisisanerrormessage';
    const expectedResult = {
      ...confirmForgotPasswordInitialState,
      hasErrors: true,
      errorMessage,
    };
    expect(confirmForgotPasswordReducer(confirmForgotPasswordInitialState, {
      type: actions.CONFIRM_FORGOT_PASSWORD_FAIL,
      payload: {
        message: errorMessage,
      },
    })).toEqual(expectedResult);
  });
  it('should handle the CONFIRM_FORGOT_PASSWORD_RESET_STATE action type', () => {
    expect(confirmForgotPasswordReducer(confirmForgotPasswordInitialState, {
      type: actions.CONFIRM_FORGOT_PASSWORD_RESET_STATE,
    })).toEqual(confirmForgotPasswordInitialState);
  });
});
