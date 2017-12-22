import {
  SET_EMAIL,
  LOGIN,
} from './constants';

export const setEmailAddress = text => ({
  type: SET_EMAIL,
  payload: {
    text,
  },
});

export const login = () => ({
  type: LOGIN,
});

export default {};
