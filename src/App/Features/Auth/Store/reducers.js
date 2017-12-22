import {
  SET_EMAIL,
  LOGIN,
} from './constants';
import validateEmail from '../../../Util/emailCheck';

const initialState = {
  loginEmailAddress: '',
  loginEmailAddressValid: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL: {
      const email = action.payload.text;
      return {
        ...state,
        loginEmailAddress: email,
        loginEmailAddressValid: validateEmail(email),
      };
    }
    case LOGIN: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
