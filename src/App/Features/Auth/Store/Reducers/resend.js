import {
  SET_RESEND_USERNAME,
  ATTEMPT_RESEND,
  RESEND_SUCCESS,
  RESEND_FAIL,
  RESEND_RESET_STATE,
} from '../constants';

export const resendInitialState = {
  resendUserName: '',
  userNameValid: false,
  attemptResend: false,
  resendHasErrors: false,
  resendErrorMessage: '',
  resendSuccess: false,
};

const resendReducer = (state = resendInitialState, action) => {
  switch (action.type) {
    case SET_RESEND_USERNAME: {
      const userName = action.payload.text;
      return {
        ...state,
        resendHasErrors: false,
        resendErrorMessage: '',
        resendUserName: userName,
        userNameValid: (userName && userName.length > 0) || false,
      };
    }
    case ATTEMPT_RESEND: {
      return {
        ...state,
        attemptResend: true,
      };
    }
    case RESEND_SUCCESS: {
      return {
        ...resendInitialState,
        resendSuccess: true,
      };
    }
    case RESEND_FAIL: {
      return {
        ...resendInitialState,
        resendHasErrors: true,
        resendErrorMessage: action.payload.message,
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
