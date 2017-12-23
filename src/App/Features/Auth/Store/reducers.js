import {
  SET_EMAIL,
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './constants';
import validateEmail from '../../../Util/emailCheck';

const initialState = {
  loginEmailAddress: '',
  loginEmailAddressValid: false,
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
