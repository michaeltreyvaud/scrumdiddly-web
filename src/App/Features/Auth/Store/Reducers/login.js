import {
  SET_LOGIN_USERNAME,
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_LOGIN_PASSWORD,
  LOGIN_RESET_STATE,
} from '../ActionTypes/login';

export const loginInitialState = {
  userName: '',
  userNameValid: false,
  password: '',
  passwordValid: false,
  attempt: false,
  hasErrors: false,
  errorMessage: '',
};

const loginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case SET_LOGIN_USERNAME: {
      const userName = action.payload.text;
      return {
        ...state,
        hasErrors: false,
        errorMessage: '',
        userName,
        userNameValid: (userName && userName.length > 0) || false,
      };
    }
    case SET_LOGIN_PASSWORD: {
      const password = action.payload.text;
      return {
        ...state,
        hasErrors: false,
        errorMessage: '',
        password,
        passwordValid: (password && password.length > 0) || false,
      };
    }
    case ATTEMPT_LOGIN: {
      return {
        ...state,
        attempt: true,
      };
    }
    case LOGIN_SUCCESS: {
      return loginInitialState;
    }
    case LOGIN_FAIL: {
      const errorMessage = action.payload.message;
      return {
        ...loginInitialState,
        hasErrors: true,
        errorMessage,
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
