import {
  SET_LOGIN_USERNAME,
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_LOGIN_PASSWORD,
  SET_SIGNUP_EMAIL,
  SET_SIGNUP_PASSWORD,
  ATTEMPT_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SET_SIGNUP_USERNAME,
} from './constants';
import validateEmail from '../../../Util/emailCheck';

const initialState = {
  loginUsername: '',
  loginUsernameValid: false,
  loginPassword: '',
  loginPasswordValid: false,
  loginAttempt: false,
  loginHasErrors: false,
  loginErrorMessage: '',
  signupUsername: '',
  signupUsernameValid: false,
  signupEmailAddress: '',
  signupEmailAddressValid: false,
  signupPassword: '',
  signupPasswordValid: false,
  signupAttempt: false,
  signupHasErrors: false,
  signupErrorMessage: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_USERNAME: {
      const userName = action.payload.text;
      return {
        ...state,
        loginHasErrors: false,
        loginErrorMessage: '',
        loginUsername: userName,
        loginUsernameValid: userName && userName.length > 0,
      };
    }
    case SET_LOGIN_PASSWORD: {
      const password = action.payload.text;
      return {
        ...state,
        loginHasErrors: false,
        loginErrorMessage: '',
        loginPassword: password,
        loginPasswordValid: password && password.length > 0,
      };
    }
    case ATTEMPT_LOGIN: {
      return {
        ...state,
        loginAttempt: true,
      };
    }
    case LOGIN_SUCCESS: {
      return initialState;
    }
    case LOGIN_FAIL: {
      return {
        ...initialState,
        loginHasErrors: true,
        loginErrorMessage: action.payload.message,
      };
    }
    case SET_SIGNUP_USERNAME: {
      const userName = action.payload.text;
      return {
        ...state,
        signupHasErrors: false,
        signupErrorMessage: '',
        signupUsername: userName,
        signupUsernameValid: userName && userName.length > 0,
      };
    }
    case SET_SIGNUP_EMAIL: {
      const email = action.payload.text;
      return {
        ...state,
        signupHasErrors: false,
        signupErrorMessage: '',
        signupEmailAddress: email,
        signupEmailAddressValid: validateEmail(email),
      };
    }
    case SET_SIGNUP_PASSWORD: {
      const password = action.payload.text;
      return {
        ...state,
        signupHasErrors: false,
        signupErrorMessage: '',
        signupPassword: password,
        signupPasswordValid: password && password.length > 0,
      };
    }
    case ATTEMPT_SIGNUP: {
      return {
        ...state,
        signupAttempt: true,
      };
    }
    case SIGNUP_SUCCESS: {
      return initialState;
    }
    case SIGNUP_FAIL: {
      return {
        ...initialState,
        signupHasErrors: true,
        signupErrorMessage: action.payload.message,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
