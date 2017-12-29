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
  SET_CONFIRM_USERNAME,
  SET_CONFIRM_CODE,
  ATTEMPT_CONFIRM,
  CONFIRM_SUCCESS,
  CONFIRM_FAIL,
} from '../constants';
import loginReducer, { loginInitialState } from './login';
import signupReducer, { signupInitialState } from './signup';
import confirmReducer, { confirmInitialState } from './confirm';

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
        ...initialState,
        login: loginReducer(state.login, action),
      };
    }
    case LOGIN_FAIL: {
      return {
        ...initialState,
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
        ...initialState,
        signup: signupReducer(state.signup, action),
      };
    }
    case SIGNUP_FAIL: {
      return {
        ...initialState,
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
      return initialState;
    }
    case CONFIRM_FAIL: {
      return {
        ...initialState,
        confirm: confirmReducer(state.confirm, action),
      };
    }
    default:
      return state;
  }
};

export default authReducer;
