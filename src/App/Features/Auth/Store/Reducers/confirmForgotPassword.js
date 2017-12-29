import {
  SET_CONFIRM_FORGOT_PASSWORD_USERNAME,
  SET_CONFIRM_FORGOT_PASSWORD_CODE,
  SET_CONFIRM_FORGOT_PASSWORD_PASSWORD,
  ATTEMPT_CONFIRM_FORGOT_PASSWORD,
  CONFIRM_FORGOT_PASSWORD_SUCCESS,
  CONFIRM_FORGOT_PASSWORD_FAIL,
  CONFIRM_FORGOT_PASSWORD_RESET_STATE,
} from '../constants';

export const confirmForgotPasswordInitialState = {
  confirmForgotPasswordUserName: '',
  confirmForgotPasswordUserNameValid: false,
  confirmForgotPasswordConfirmationCode: '',
  confirmForgotPasswordConfirmationCodeValid: false,
  confirmForgotPasswordPassword: '',
  confirmForgotPasswordPasswordValid: false,
  confirmForgotPasswordAttempt: false,
  confirmForgotPasswordHasErrors: false,
  confirmForgotPasswordErrorMessage: '',
  confirmForgotPasswordSuccess: false,
};

const confirmForgotPasswordReducer = (state = confirmForgotPasswordInitialState, action) => {
  switch (action.type) {
    case SET_CONFIRM_FORGOT_PASSWORD_USERNAME: {
      const userName = action.payload.text;
      return {
        ...state,
        confirmForgotPasswordHasErrors: false,
        confirmForgotPasswordErrorMessage: '',
        confirmForgotPasswordUserName: userName,
        confirmForgotPasswordUserNameValid: (userName && userName.length > 0) || false,
      };
    }
    case SET_CONFIRM_FORGOT_PASSWORD_CODE: {
      const code = action.payload.text;
      return {
        ...state,
        confirmForgotPasswordHasErrors: false,
        confirmForgotPasswordErrorMessage: '',
        confirmForgotPasswordConfirmationCode: code,
        confirmForgotPasswordConfirmationCodeValid: (code && code.length > 0) || false,
      };
    }
    case SET_CONFIRM_FORGOT_PASSWORD_PASSWORD: {
      const password = action.payload.text;
      return {
        ...state,
        confirmForgotPasswordHasErrors: false,
        confirmForgotPasswordErrorMessage: '',
        confirmForgotPasswordPassword: password,
        confirmForgotPasswordPasswordValid: (password && password.length > 0) || false,
      };
    }
    case ATTEMPT_CONFIRM_FORGOT_PASSWORD: {
      return {
        ...state,
        confirmForgotPasswordAttempt: true,
      };
    }
    case CONFIRM_FORGOT_PASSWORD_SUCCESS: {
      return {
        ...confirmForgotPasswordInitialState,
        confirmForgotPasswordSuccess: true,
      };
    }
    case CONFIRM_FORGOT_PASSWORD_FAIL: {
      return {
        ...confirmForgotPasswordInitialState,
        confirmForgotPasswordHasErrors: true,
        confirmForgotPasswordErrorMessage: action.payload.message,
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
