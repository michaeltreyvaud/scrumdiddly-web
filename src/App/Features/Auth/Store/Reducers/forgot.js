import {
  SET_FORGOT_USERNAME,
  ATTEMPT_FORGOT,
  FORGOT_SUCCESS,
  FORGOT_FAIL,
  FORGOT_RESET_STATE,
} from '../constants';

export const forgotInitialState = {
  forgotUserName: '',
  forgotUserNameValid: false,
  forgotAttempt: false,
  forgotHasErrors: false,
  forgotErrorMessage: '',
  forgotSuccess: false,
};

const forgotReducer = (state = forgotInitialState, action) => {
  switch (action.type) {
    case SET_FORGOT_USERNAME: {
      const userName = action.payload.text;
      return {
        ...state,
        forgotHasErrors: false,
        forgotErrorMessage: '',
        forgotUserName: userName,
        forgotUserNameValid: (userName && userName.length > 0) || false,
      };
    }
    case ATTEMPT_FORGOT: {
      return {
        ...state,
        forgotAttempt: true,
      };
    }
    case FORGOT_SUCCESS: {
      return {
        ...forgotInitialState,
        forgotSuccess: true,
      };
    }
    case FORGOT_FAIL: {
      return {
        ...forgotInitialState,
        forgotHasErrors: true,
        forgotErrorMessage: action.payload.message,
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
