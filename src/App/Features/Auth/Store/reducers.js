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
} from './constants';
import validateEmail from '../../../Util/emailCheck';

const initialState = {
  loginUsername: '',
  loginUsernameValid: false,
  loginPassword: '',
  loginPasswordValid: false,
  loginAttempt: false,
  loginHasErrors: false,
  loginErrorMessage: '',
  signupUsername: '',
  signupUsernameValid: false,
  signupEmailAddress: '',
  signupEmailAddressValid: false,
  signupPassword: '',
  signupPasswordValid: false,
  signupAttempt: false,
  signupHasErrors: false,
  signupErrorMessage: '',
  confirmUserName: '',
  confirmUserNameValid: false,
  confirmationCode: '',
  confirmationCodeValid: false,
  confirmAttempt: false,
  confirmHasErrors: false,
  confirmErrorMessage: '',
};

const authReducer = (state = initialState, action) => {
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
      return initialState;
    }
    case LOGIN_FAIL: {
      return {
        ...initialState,
        loginHasErrors: true,
        loginErrorMessage: action.payload.message,
      };
    }
    case SET_SIGNUP_USERNAME: {
      const userName = action.payload.text;
      return {
        ...state,
        signupHasErrors: false,
        signupErrorMessage: '',
        signupUsername: userName,
        signupUsernameValid: (userName && userName.length > 0) || false,
      };
    }
    case SET_SIGNUP_EMAIL: {
      const email = action.payload.text;
      return {
        ...state,
        signupHasErrors: false,
        signupErrorMessage: '',
        signupEmailAddress: email,
        signupEmailAddressValid: validateEmail(email),
      };
    }
    case SET_SIGNUP_PASSWORD: {
      const password = action.payload.text;
      return {
        ...state,
        signupHasErrors: false,
        signupErrorMessage: '',
        signupPassword: password,
        signupPasswordValid: (password && password.length > 0) || false,
      };
    }
    case ATTEMPT_SIGNUP: {
      return {
        ...state,
        signupAttempt: true,
      };
    }
    case SIGNUP_SUCCESS: {
      return initialState;
    }
    case SIGNUP_FAIL: {
      return {
        ...initialState,
        signupHasErrors: true,
        signupErrorMessage: action.payload.message,
      };
    }
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
      return initialState;
    }
    case CONFIRM_FAIL: {
      return {
        ...initialState,
        confirmHasErrors: true,
        confirmErrorMessage: action.payload.message,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
