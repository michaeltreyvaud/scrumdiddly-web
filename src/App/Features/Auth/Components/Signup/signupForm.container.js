import { connect } from 'react-redux';
import SignupForm from './signupForm';
import {
  setSignupEmailAddress,
  setSignupPassword,
  signup,
  setSignupUsername,
} from '../../Store/actions';

const mapStateToProps = state => ({
  emailAddress: state.auth.signup.signupEmailAddress,
  validEmailAddress: state.auth.signup.signupEmailAddressValid,
  password: state.auth.signup.signupPassword,
  validPassword: state.auth.signup.signupPasswordValid,
  signupAttempt: state.auth.signup.signupAttempt,
  signupHasErrors: state.auth.signup.signupHasErrors,
  signupErrorMessage: state.auth.signup.signupErrorMessage,
  signupUsername: state.auth.signup.signupUsername,
  signupUsernameValid: state.auth.signup.signupUsernameValid,
});

const mapDispatchToProps = dispatch => ({
  setSignupUsername: text => dispatch(setSignupUsername(text)),
  setSignupEmailAddress: text => dispatch(setSignupEmailAddress(text)),
  setSignupPassword: text => dispatch(setSignupPassword(text)),
  signup: (userName, emailAddress, password) => dispatch(signup(userName, emailAddress, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
