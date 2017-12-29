import {
  SET_FORGOT_USERNAME,
  ATTEMPT_FORGOT,
  FORGOT_SUCCESS,
  FORGOT_FAIL,
  FORGOT_RESET_STATE,
} from '../constants';

export const forgotInitialState = {
  userName: '',
  userNameValid: false,
  attempt: false,
  hasErrors: false,
  errorMessage: '',
  success: false,
};

const forgotReducer = (state = forgotInitialState, action) => {
  switch (action.type) {
    case SET_FORGOT_USERNAME: {
      const userName = action.payload.text;
      return {
        ...state,
        hasErrors: false,
        errorMessage: '',
        userName,
        userNameValid: (userName && userName.length > 0) || false,
      };
    }
    case ATTEMPT_FORGOT: {
      return {
        ...state,
        attempt: true,
      };
    }
    case FORGOT_SUCCESS: {
      return {
        ...forgotInitialState,
        success: true,
      };
    }
    case FORGOT_FAIL: {
      return {
        ...forgotInitialState,
        hasErrors: true,
        errorMessage: action.payload.message,
      };
    }
    case FORGOT_RESET_STATE: {
      return forgotInitialState;
    }
    default:
      return state;
  }
};

export default forgotReducer;
