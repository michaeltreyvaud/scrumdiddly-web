import {
  SET_CONFIRM_FORGOT_PASSWORD_USERNAME,
  SET_CONFIRM_FORGOT_PASSWORD_CODE,
  SET_CONFIRM_FORGOT_PASSWORD_PASSWORD,
  ATTEMPT_CONFIRM_FORGOT_PASSWORD,
  CONFIRM_FORGOT_PASSWORD_SUCCESS,
  CONFIRM_FORGOT_PASSWORD_FAIL,
  CONFIRM_FORGOT_PASSWORD_RESET_STATE,
} from '../ActionTypes/confirmForgotPassword';

export const confirmForgotPasswordInitialState = {
  userName: '',
  userNameValid: false,
  code: '',
  codeValid: false,
  password: '',
  passwordValid: false,
  attempt: false,
  hasErrors: false,
  errorMessage: '',
  success: false,
};

const confirmForgotPasswordReducer = (state = confirmForgotPasswordInitialState, action) => {
  switch (action.type) {
    case SET_CONFIRM_FORGOT_PASSWORD_USERNAME: {
      const userName = action.payload.text;
      return {
        ...state,
        hasErrors: false,
        errorMessage: '',
        userName,
        userNameValid: (userName && userName.length > 0) || false,
      };
    }
    case SET_CONFIRM_FORGOT_PASSWORD_CODE: {
      const code = action.payload.text;
      return {
        ...state,
        hasErrors: false,
        errorMessage: '',
        code,
        codeValid: (code && code.length > 0) || false,
      };
    }
    case SET_CONFIRM_FORGOT_PASSWORD_PASSWORD: {
      const password = action.payload.text;
      return {
        ...state,
        hasErrors: false,
        errorMessage: '',
        password,
        passwordValid: (password && password.length > 0) || false,
      };
    }
    case ATTEMPT_CONFIRM_FORGOT_PASSWORD: {
      return {
        ...state,
        attempt: true,
      };
    }
    case CONFIRM_FORGOT_PASSWORD_SUCCESS: {
      return {
        ...confirmForgotPasswordInitialState,
        success: true,
      };
    }
    case CONFIRM_FORGOT_PASSWORD_FAIL: {
      return {
        ...confirmForgotPasswordInitialState,
        hasErrors: true,
        errorMessage: action.payload.message,
      };
    }
    case CONFIRM_FORGOT_PASSWORD_RESET_STATE: {
      return confirmForgotPasswordInitialState;
    }
    default:
      return state;
  }
};

export default confirmForgotPasswordReducer;
