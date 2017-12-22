import SET_EMAIL from './constants';

export const setEmailAddress = text => ({
  type: SET_EMAIL,
  payload: {
    text,
  },
});

export default {};
