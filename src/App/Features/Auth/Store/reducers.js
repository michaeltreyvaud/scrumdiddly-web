import {
  SET_EMAIL,
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_PASSWORD,
} from './constants';
import validateEmail from '../../../Util/emailCheck';

const initialState = {
  loginEmailAddress: '',
  loginEmailAddressValid: false,
  loginPassword: '',
  loginPasswordValid: false,
  loginAttempt: false,
  loginHasErrors: false,
  loginErrorMessage: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL: {
      const email = action.payload.text;
      return {
        ...state,
        loginEmailAddress: email,
        loginEmailAddressValid: validateEmail(email),
      };
    }
    case SET_PASSWORD: {
      const password = action.payload.text;
      return {
        ...state,
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
    default:
      return state;
  }
};

export default authReducer;
