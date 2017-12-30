import * as actions from '../ActionTypes/signup';
import signupReducer, { signupInitialState } from './signup';

describe('Signup reducer', () => {
  it('should return the initial state', () => {
    expect(signupReducer(undefined, {})).toEqual(signupInitialState);
  });
  it('should handle the SET_SIGNUP_USERNAME action type', () => {
    const userName = 'thisisausername';
    const expectedResult = {
      ...signupInitialState,
      hasErrors: false,
      errorMessage: '',
      userName,
      userNameValid: true,
    };
    expect(signupReducer(signupInitialState, {
      type: actions.SET_SIGNUP_USERNAME,
      payload: {
        text: userName,
      },
    })).toEqual(expectedResult);
  });
  it('should handle the SET_SIGNUP_EMAIL action type', () => {
    const email = 'thisisanemail@email.com';
    const expectedResult = {
      ...signupInitialState,
      hasErrors: false,
      errorMessage: '',
      email,
      emailValid: true,
    };
    expect(signupReducer(signupInitialState, {
      type: actions.SET_SIGNUP_EMAIL,
      payload: {
        text: email,
      },
    })).toEqual(expectedResult);
  });
  it('should handle the SET_SIGNUP_PASSWORD action type', () => {
    const password = 'thisisapassword';
    const expectedResult = {
      ...signupInitialState,
      hasErrors: false,
      errorMessage: '',
      password,
      passwordValid: true,
    };
    expect(signupReducer(signupInitialState, {
      type: actions.SET_SIGNUP_PASSWORD,
      payload: {
        text: password,
      },
    })).toEqual(expectedResult);
  });
  it('should handle the ATTEMPT_SIGNUP action type', () => {
    const expectedResult = {
      ...signupInitialState,
      attempt: true,
    };
    expect(signupReducer(signupInitialState, {
      type: actions.ATTEMPT_SIGNUP,
    })).toEqual(expectedResult);
  });
  it('should handle the SIGNUP_SUCCESS action type', () => {
    const expectedResult = {
      ...signupInitialState,
      success: true,
    };
    expect(signupReducer(signupInitialState, {
      type: actions.SIGNUP_SUCCESS,
    })).toEqual(expectedResult);
  });
  it('should handle the SIGNUP_FAIL action type', () => {
    const errorMessage = 'thisisanerrormessage';
    const expectedResult = {
      ...signupInitialState,
      hasErrors: true,
      errorMessage,
    };
    expect(signupReducer(signupInitialState, {
      type: actions.SIGNUP_FAIL,
      payload: {
        message: errorMessage,
      },
    })).toEqual(expectedResult);
  });
  it('should handle the SIGNUP_RESET_STATE action type', () => {
    expect(signupReducer(signupInitialState, {
      type: actions.SIGNUP_RESET_STATE,
    })).toEqual(signupInitialState);
  });
});
