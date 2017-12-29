import {
  SET_CONFIRM_USERNAME,
  SET_CONFIRM_CODE,
  ATTEMPT_CONFIRM,
  CONFIRM_SUCCESS,
  CONFIRM_FAIL,
  CONFIRM_RESET_STATE,
} from '../constants';

export const confirmInitialState = {
  confirmUserName: '',
  confirmUserNameValid: false,
  confirmationCode: '',
  confirmationCodeValid: false,
  confirmAttempt: false,
  confirmHasErrors: false,
  confirmErrorMessage: '',
};

const confirmReducer = (state = confirmInitialState, action) => {
  switch (action.type) {
    case SET_CONFIRM_USERNAME: {
      const userName = action.payload.text;
      return {
        ...state,
        confirmHasErrors: false,
        confirmErrorMessage: '',
        confirmUserName: userName,
        confirmUserNameValid: (userName && userName.length > 0) || false,
      };
    }
    case SET_CONFIRM_CODE: {
      const confirmationCode = action.payload.text;
      return {
        ...state,
        confirmHasErrors: false,
        confirmErrorMessage: '',
        confirmationCode,
        confirmationCodeValid: (confirmationCode && confirmationCode.length > 0) || false,
      };
    }
    case ATTEMPT_CONFIRM: {
      return {
        ...state,
        confirmAttempt: true,
      };
    }
    case CONFIRM_SUCCESS: {
      return confirmInitialState;
    }
    case CONFIRM_FAIL: {
      return {
        ...confirmInitialState,
        confirmHasErrors: true,
        confirmErrorMessage: action.payload.message,
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
