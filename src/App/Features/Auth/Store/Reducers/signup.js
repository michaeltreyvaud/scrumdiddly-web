import {
  SET_SIGNUP_EMAIL,
  SET_SIGNUP_PASSWORD,
  ATTEMPT_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SET_SIGNUP_USERNAME,
  SIGNUP_RESET_STATE,
} from '../constants';
import validateEmail from '../../../../Util/emailCheck';

export const signupInitialState = {
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

const signupReducer = (state = signupInitialState, action) => {
  switch (action.type) {
    case SET_SIGNUP_USERNAME: {
      const userName = action.payload.text;
      return {
        ...state,
        signupHasErrors: false,
        signupErrorMessage: '',
        signupUsername: userName,
        signupUsernameValid: (userName && userName.length > 0) || false,
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
        signupPasswordValid: (password && password.length > 0) || false,
      };
    }
    case ATTEMPT_SIGNUP: {
      return {
        ...state,
        signupAttempt: true,
      };
    }
    case SIGNUP_SUCCESS: {
      return signupInitialState;
    }
    case SIGNUP_FAIL: {
      return {
        ...signupInitialState,
        signupHasErrors: true,
        signupErrorMessage: action.payload.message,
      };
    }
    case SIGNUP_RESET_STATE: {
      return signupInitialState;
    }
    default: {
      return state;
    }
  }
};

export default signupReducer;
