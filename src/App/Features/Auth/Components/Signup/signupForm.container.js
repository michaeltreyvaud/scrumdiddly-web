import { connect } from 'react-redux';
import SignupForm from './signupForm';
import {
  setSignupEmailAddress,
  setSignupPassword,
  signup,
  setSignupUsername,
} from '../../Store/actions';

const mapStateToProps = state => ({
  emailAddress: state.auth.signupEmailAddress,
  validEmailAddress: state.auth.signupEmailAddressValid,
  password: state.auth.signupPassword,
  validPassword: state.auth.signupPasswordValid,
  signupAttempt: state.auth.signupAttempt,
  signupHasErrors: state.auth.signupHasErrors,
  signupErrorMessage: state.auth.signupErrorMessage,
  signupUsername: state.auth.signupUsername,
  signupUsernameValid: state.auth.signupUsernameValid,
});

const mapDispatchToProps = dispatch => ({
  setSignupUsername: text => dispatch(setSignupUsername(text)),
  setSignupEmailAddress: text => dispatch(setSignupEmailAddress(text)),
  setSignupPassword: text => dispatch(setSignupPassword(text)),
  signup: (userName, emailAddress, password) => dispatch(signup(userName, emailAddress, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
