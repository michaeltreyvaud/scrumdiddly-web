import { connect } from 'react-redux';
import SignupForm from './signupForm';
import {
  setSignupEmailAddress,
  setSignupPassword,
  signup,
} from '../../Store/actions';

const mapStateToProps = state => ({
  emailAddress: state.auth.signupEmailAddress,
  validEmailAddress: state.auth.signupEmailAddressValid,
  password: state.auth.signupPassword,
  validPassword: state.auth.signupPasswordValid,
  signupAttempt: state.auth.signupAttempt,
  signupHasErrors: state.auth.signupHasErrors,
  signupErrorMessage: state.auth.signupErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  setSignupEmailAddress: text => dispatch(setSignupEmailAddress(text)),
  setSignupPassword: text => dispatch(setSignupPassword(text)),
  signup: (emailAddress, password) => dispatch(signup(emailAddress, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
