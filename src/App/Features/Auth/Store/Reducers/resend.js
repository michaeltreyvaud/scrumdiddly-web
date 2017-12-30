import {
  SET_RESEND_USERNAME,
  ATTEMPT_RESEND,
  RESEND_SUCCESS,
  RESEND_FAIL,
  RESEND_RESET_STATE,
} from '../ActionTypes/resend';

export const resendInitialState = {
  userName: '',
  userNameValid: false,
  attempt: false,
  hasErrors: false,
  errorMessage: '',
  success: false,
};

const resendReducer = (state = resendInitialState, action) => {
  switch (action.type) {
    case SET_RESEND_USERNAME: {
      const userName = action.payload.text;
      return {
        ...state,
        hasErrors: false,
        errorMessage: '',
        userName,
        userNameValid: (userName && userName.length > 0) || false,
      };
    }
    case ATTEMPT_RESEND: {
      return {
        ...state,
        attempt: true,
      };
    }
    case RESEND_SUCCESS: {
      return {
        ...resendInitialState,
        success: true,
      };
    }
    case RESEND_FAIL: {
      return {
        ...resendInitialState,
        hasErrors: true,
        errorMessage: action.payload.message,
      };
    }
    case RESEND_RESET_STATE: {
      return resendInitialState;
    }
    default:
      return state;
  }
};

export default resendReducer;
