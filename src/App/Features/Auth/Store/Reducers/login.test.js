import * as actions from '../ActionTypes/login';
import loginReducer, { loginInitialState } from './login';

describe('Login reducer', () => {
  it('should return the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual(loginInitialState);
  });
  it('should handle the SET_LOGIN_USERNAME action type', () => {
    const userName = 'thisisausername';
    const expectedResult = {
      ...loginInitialState,
      hasErrors: false,
      errorMessage: '',
      userName,
      userNameValid: true,
    };
    expect(loginReducer(loginInitialState, {
      type: actions.SET_LOGIN_USERNAME,
      payload: {
        text: userName,
      },
    })).toEqual(expectedResult);
  });
  it('should handle the SET_LOGIN_PASSWORD action type', () => {
    const password = 'thisisapassword';
    const expectedResult = {
      ...loginInitialState,
      hasErrors: false,
      errorMessage: '',
      password,
      passwordValid: true,
    };
    expect(loginReducer(loginInitialState, {
      type: actions.SET_LOGIN_PASSWORD,
      payload: {
        text: password,
      },
    })).toEqual(expectedResult);
  });
  it('should handle the ATTEMPT_LOGIN action type', () => {
    const expectedResult = {
      ...loginInitialState,
      attempt: true,
    };
    expect(loginReducer(loginInitialState, {
      type: actions.ATTEMPT_LOGIN,
    })).toEqual(expectedResult);
  });
  it('should handle the LOGIN_SUCCESS action type', () => {
    expect(loginReducer(loginInitialState, {
      type: actions.LOGIN_SUCCESS,
    })).toEqual(loginInitialState);
  });
  it('should handle the LOGIN_FAIL action type', () => {
    const errorMessage = 'thisisanerrormessage';
    const expectedResult = {
      ...loginInitialState,
      hasErrors: true,
      errorMessage,
    };
    expect(loginReducer(loginInitialState, {
      type: actions.LOGIN_FAIL,
      payload: {
        message: errorMessage,
      },
    })).toEqual(expectedResult);
  });
  it('should handle the LOGIN_RESET_STATE action type', () => {
    expect(loginReducer(loginInitialState, {
      type: actions.LOGIN_RESET_STATE,
    })).toEqual(loginInitialState);
  });
});
