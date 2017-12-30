import {
  SET_CONFIRM_USERNAME,
  SET_CONFIRM_CODE,
  ATTEMPT_CONFIRM,
  CONFIRM_SUCCESS,
  CONFIRM_FAIL,
  CONFIRM_RESET_STATE,
} from '../ActionTypes/confirm';

export const confirmInitialState = {
  userName: '',
  userNameValid: false,
  code: '',
  codeValid: false,
  attempt: false,
  hasErrors: false,
  errorMessage: '',
  success: false,
};

const confirmReducer = (state = confirmInitialState, action) => {
  switch (action.type) {
    case SET_CONFIRM_USERNAME: {
      const userName = action.payload.text;
      return {
        ...state,
        hasErrors: false,
        errorMessage: '',
        userName,
        userNameValid: (userName && userName.length > 0) || false,
      };
    }
    case SET_CONFIRM_CODE: {
      const confirmationCode = action.payload.text;
      return {
        ...state,
        hasErrors: false,
        errorMessage: '',
        code: confirmationCode,
        codeValid: (confirmationCode && confirmationCode.length > 0) || false,
      };
    }
    case ATTEMPT_CONFIRM: {
      return {
        ...state,
        attempt: true,
      };
    }
    case CONFIRM_SUCCESS: {
      return {
        ...confirmInitialState,
        success: true,
      };
    }
    case CONFIRM_FAIL: {
      const errorMessage = action.payload.message;
      return {
        ...confirmInitialState,
        hasErrors: true,
        errorMessage,
      };
    }
    case CONFIRM_RESET_STATE: {
      return confirmInitialState;
    }
    default: {
      return state;
    }
  }
};

export default confirmReducer;
