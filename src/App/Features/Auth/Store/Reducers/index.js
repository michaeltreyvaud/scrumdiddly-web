import {
  SET_CONFIRM_USERNAME,
  SET_CONFIRM_CODE,
  ATTEMPT_CONFIRM,
  CONFIRM_SUCCESS,
  CONFIRM_FAIL,
  CONFIRM_RESET_STATE,
} from '../ActionTypes/confirm';
import {
  SET_CONFIRM_FORGOT_PASSWORD_USERNAME,
  SET_CONFIRM_FORGOT_PASSWORD_CODE,
  SET_CONFIRM_FORGOT_PASSWORD_PASSWORD,
  ATTEMPT_CONFIRM_FORGOT_PASSWORD,
  CONFIRM_FORGOT_PASSWORD_SUCCESS,
  CONFIRM_FORGOT_PASSWORD_FAIL,
  CONFIRM_FORGOT_PASSWORD_RESET_STATE,
} from '../ActionTypes/confirmForgotPassword';
import {
  SET_FORGOT_USERNAME,
  ATTEMPT_FORGOT,
  FORGOT_SUCCESS,
  FORGOT_FAIL,
  FORGOT_RESET_STATE,
} from '../ActionTypes/forgot';
import {
  SET_LOGIN_USERNAME,
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_RESET_STATE,
  SET_LOGIN_PASSWORD,
} from '../ActionTypes/login';
import {
  SET_RESEND_USERNAME,
  ATTEMPT_RESEND,
  RESEND_SUCCESS,
  RESEND_FAIL,
  RESEND_RESET_STATE,
} from '../ActionTypes/resend';
import {
  SET_SIGNUP_EMAIL,
  SET_SIGNUP_PASSWORD,
  ATTEMPT_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SET_SIGNUP_USERNAME,
  SIGNUP_RESET_STATE,
} from '../ActionTypes/signup';
import confirmReducer, { confirmInitialState } from './confirm';
import confirmForgotPasswordReducer, { confirmForgotPasswordInitialState } from './confirmForgotPassword';
import forgotReducer, { forgotInitialState } from './forgot';
import loginReducer, { loginInitialState } from './login';
import resendReducer, { resendInitialState } from './resend';
import signupReducer, { signupInitialState } from './signup';

const initialState = {
  confirm: { ...confirmInitialState },
  confirmForgotPassword: { ...confirmForgotPasswordInitialState },
  forgot: { ...forgotInitialState },
  login: { ...loginInitialState },
  resend: { ...resendInitialState },
  signup: { ...signupInitialState },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_USERNAME: {
      return {
        ...state,
        login: loginReducer(state.login, action),
      };
    }
    case SET_LOGIN_PASSWORD: {
      return {
        ...state,
        login: loginReducer(state.login, action),
      };
    }
    case ATTEMPT_LOGIN: {
      return {
        ...state,
        login: loginReducer(state.login, action),
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        login: loginReducer(state.login, action),
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        login: loginReducer(state.login, action),
      };
    }
    case LOGIN_RESET_STATE: {
      return {
        ...state,
        login: loginReducer(state.login, action),
      };
    }
    case SET_SIGNUP_USERNAME: {
      return {
        ...state,
        signup: signupReducer(state.signup, action),
      };
    }
    case SET_SIGNUP_EMAIL: {
      return {
        ...state,
        signup: signupReducer(state.signup, action),
      };
    }
    case SET_SIGNUP_PASSWORD: {
      return {
        ...state,
        signup: signupReducer(state.signup, action),
      };
    }
    case ATTEMPT_SIGNUP: {
      return {
        ...state,
        signup: signupReducer(state.signup, action),
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        signup: signupReducer(state.signup, action),
      };
    }
    case SIGNUP_FAIL: {
      return {
        ...state,
        signup: signupReducer(state.signup, action),
      };
    }
    case SIGNUP_RESET_STATE: {
      return {
        ...state,
        signup: signupReducer(state.signup, action),
      };
    }
    case SET_CONFIRM_USERNAME: {
      return {
        ...state,
        confirm: confirmReducer(state.confirm, action),
      };
    }
    case SET_CONFIRM_CODE: {
      return {
        ...state,
        confirm: confirmReducer(state.confirm, action),
      };
    }
    case ATTEMPT_CONFIRM: {
      return {
        ...state,
        confirm: confirmReducer(state.confirm, action),
      };
    }
    case CONFIRM_SUCCESS: {
      return {
        ...state,
        confirm: confirmReducer(state.confirm, action),
      };
    }
    case CONFIRM_FAIL: {
      return {
        ...state,
        confirm: confirmReducer(state.confirm, action),
      };
    }
    case CONFIRM_RESET_STATE: {
      return {
        ...state,
        confirm: confirmReducer(state.confirm, action),
      };
    }
    case SET_RESEND_USERNAME: {
      return {
        ...state,
        resend: resendReducer(state.resend, action),
      };
    }
    case ATTEMPT_RESEND: {
      return {
        ...state,
        resend: resendReducer(state.resend, action),
      };
    }
    case RESEND_SUCCESS: {
      return {
        ...state,
        resend: resendReducer(state.resend, action),
      };
    }
    case RESEND_FAIL: {
      return {
        ...state,
        resend: resendReducer(state.resend, action),
      };
    }
    case RESEND_RESET_STATE: {
      return {
        ...state,
        resend: resendReducer(state.resend, action),
      };
    }
    case SET_FORGOT_USERNAME: {
      return {
        ...state,
        forgot: forgotReducer(state.forgot, action),
      };
    }
    case ATTEMPT_FORGOT: {
      return {
        ...state,
        forgot: forgotReducer(state.forgot, action),
      };
    }
    case FORGOT_SUCCESS: {
      return {
        ...state,
        forgot: forgotReducer(state.forgot, action),
      };
    }
    case FORGOT_FAIL: {
      return {
        ...state,
        forgot: forgotReducer(state.forgot, action),
      };
    }
    case FORGOT_RESET_STATE: {
      return {
        ...state,
        forgot: forgotReducer(state.forgot, action),
      };
    }
    case SET_CONFIRM_FORGOT_PASSWORD_USERNAME: {
      return {
        ...state,
        confirmForgotPassword: confirmForgotPasswordReducer(state.confirmForgotPassword, action),
      };
    }
    case SET_CONFIRM_FORGOT_PASSWORD_CODE: {
      return {
        ...state,
        confirmForgotPassword: confirmForgotPasswordReducer(state.confirmForgotPassword, action),
      };
    }
    case SET_CONFIRM_FORGOT_PASSWORD_PASSWORD: {
      return {
        ...state,
        confirmForgotPassword: confirmForgotPasswordReducer(state.confirmForgotPassword, action),
      };
    }
    case ATTEMPT_CONFIRM_FORGOT_PASSWORD: {
      return {
        ...state,
        confirmForgotPassword: confirmForgotPasswordReducer(state.confirmForgotPassword, action),
      };
    }
    case CONFIRM_FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        confirmForgotPassword: confirmForgotPasswordReducer(state.confirmForgotPassword, action),
      };
    }
    case CONFIRM_FORGOT_PASSWORD_FAIL: {
      return {
        ...state,
        confirmForgotPassword: confirmForgotPasswordReducer(state.confirmForgotPassword, action),
      };
    }
    case CONFIRM_FORGOT_PASSWORD_RESET_STATE: {
      return {
        ...state,
        confirmForgotPassword: confirmForgotPasswordReducer(state.confirmForgotPassword, action),
      };
    }
    default:
      return state;
  }
};

export default authReducer;
