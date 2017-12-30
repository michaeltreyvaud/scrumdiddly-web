import {
  SET_SIGNUP_EMAIL,
  SET_SIGNUP_PASSWORD,
  ATTEMPT_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SET_SIGNUP_USERNAME,
  SIGNUP_RESET_STATE,
} from '../ActionTypes/signup';
import validateEmail from '../../../../Util/emailCheck';

export const signupInitialState = {
  userName: '',
  userNameValid: false,
  email: '',
  emailValid: false,
  password: '',
  passwordValid: false,
  attempt: false,
  hasErrors: false,
  errorMessage: '',
  success: false,
};

const signupReducer = (state = signupInitialState, action) => {
  switch (action.type) {
    case SET_SIGNUP_USERNAME: {
      const userName = action.payload.text;
      return {
        ...state,
        hasErrors: false,
        errorMessage: '',
        userName,
        userNameValid: (userName && userName.length > 0) || false,
      };
    }
    case SET_SIGNUP_EMAIL: {
      const email = action.payload.text;
      return {
        ...state,
        hasErrors: false,
        errorMessage: '',
        email,
        emailValid: validateEmail(email),
      };
    }
    case SET_SIGNUP_PASSWORD: {
      const password = action.payload.text;
      return {
        ...state,
        hasErrors: false,
        errorMessage: '',
        password,
        passwordValid: (password && password.length > 0) || false,
      };
    }
    case ATTEMPT_SIGNUP: {
      return {
        ...state,
        attempt: true,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...signupInitialState,
        success: true,
      };
    }
    case SIGNUP_FAIL: {
      return {
        ...signupInitialState,
        hasErrors: true,
        errorMessage: action.payload.message,
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
