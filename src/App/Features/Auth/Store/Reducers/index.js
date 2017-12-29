import {
  SET_LOGIN_USERNAME,
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_LOGIN_PASSWORD,
  LOGIN_RESET_STATE,
  SET_SIGNUP_EMAIL,
  SET_SIGNUP_PASSWORD,
  ATTEMPT_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SET_SIGNUP_USERNAME,
  SIGNUP_RESET_STATE,
  SET_CONFIRM_USERNAME,
  SET_CONFIRM_CODE,
  ATTEMPT_CONFIRM,
  CONFIRM_SUCCESS,
  CONFIRM_FAIL,
  CONFIRM_RESET_STATE,
  SET_RESEND_USERNAME,
  ATTEMPT_RESEND,
  RESEND_SUCCESS,
  RESEND_FAIL,
  RESEND_RESET_STATE,
} from '../constants';
import loginReducer, { loginInitialState } from './login';
import signupReducer, { signupInitialState } from './signup';
import confirmReducer, { confirmInitialState } from './confirm';
import resendReducer, { resendInitialState } from './resend';

const initialState = {
  login: {
    ...loginInitialState,
  },
  signup: {
    ...signupInitialState,
  },
  confirm: {
    ...confirmInitialState,
  },
  resend: {
    ...resendInitialState,
  },
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
    default:
      return state;
  }
};

export default authReducer;
