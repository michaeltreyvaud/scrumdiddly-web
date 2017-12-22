import SET_EMAIL from './constants';

const initialState = {
  emailAddress: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL: {
      return {
        ...state,
        emailAddress: action.payload.text,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
