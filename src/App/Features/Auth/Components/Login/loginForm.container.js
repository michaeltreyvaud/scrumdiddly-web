import { connect } from 'react-redux';
import {
  setLoginEmailAddress,
  setLoginPassword,
  login,
} from '../../Store/actions';
import LoginForm from './loginForm';

const mapStateToProps = state => ({
  emailAddress: state.auth.loginEmailAddress,
  validEmailAddress: state.auth.loginEmailAddressValid,
  password: state.auth.loginPassword,
  validPassword: state.auth.loginPasswordValid,
  loginAttempt: state.auth.loginAttempt,
  loginHasErrors: state.auth.loginHasErrors,
  loginErrorMessage: state.auth.loginErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  setLoginEmailAddress: text => dispatch(setLoginEmailAddress(text)),
  setLoginPassword: text => dispatch(setLoginPassword(text)),
  login: (emailAddress, password) => dispatch(login(emailAddress, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
