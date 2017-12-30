import { connect } from 'react-redux';
import SignupForm from './signupForm';
import {
  setUsername,
  setEmail,
  setPassword,
  signup,
  resetState,
} from '../../Store/Actions/signup';

const mapStateToProps = state => ({
  userName: state.auth.signup.userName,
  userNameValid: state.auth.signup.userNameValid,
  email: state.auth.signup.email,
  emailValid: state.auth.signup.emailValid,
  password: state.auth.signup.password,
  passwordValid: state.auth.signup.passwordValid,
  attempt: state.auth.signup.attempt,
  hasErrors: state.auth.signup.hasErrors,
  errorMessage: state.auth.signup.errorMessage,
  success: state.auth.signup.success,
});

const mapDispatchToProps = dispatch => ({
  setUsername: text => dispatch(setUsername(text)),
  setEmail: text => dispatch(setEmail(text)),
  setPassword: text => dispatch(setPassword(text)),
  signup: (userName, emailAddress, password) => dispatch(signup(userName, emailAddress, password)),
  resetState: () => dispatch(resetState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
