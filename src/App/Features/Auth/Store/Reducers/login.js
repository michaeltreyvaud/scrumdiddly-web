import {
  SET_LOGIN_USERNAME,
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_LOGIN_PASSWORD,
  LOGIN_RESET_STATE,
} from '../constants';

export const loginInitialState = {
  loginUsername: '',
  loginUsernameValid: false,
  loginPassword: '',
  loginPasswordValid: false,
  loginAttempt: false,
  loginHasErrors: false,
  loginErrorMessage: '',
};

const loginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case SET_LOGIN_USERNAME: {
      const userName = action.payload.text;
      return {
        ...state,
        loginHasErrors: false,
        loginErrorMessage: '',
        loginUsername: userName,
        loginUsernameValid: (userName && userName.length > 0) || false,
      };
    }
    case SET_LOGIN_PASSWORD: {
      const password = action.payload.text;
      return {
        ...state,
        loginHasErrors: false,
        loginErrorMessage: '',
        loginPassword: password,
        loginPasswordValid: (password && password.length > 0) || false,
      };
    }
    case ATTEMPT_LOGIN: {
      return {
        ...state,
        loginAttempt: true,
      };
    }
    case LOGIN_SUCCESS: {
      return loginInitialState;
    }
    case LOGIN_FAIL: {
      return {
        ...loginInitialState,
        loginHasErrors: true,
        loginErrorMessage: action.payload.message,
      };
    }
    case LOGIN_RESET_STATE: {
      return loginInitialState;
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
