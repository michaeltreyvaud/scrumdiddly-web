import { connect } from 'react-redux';
import {
  setLoginUsername,
  setLoginPassword,
  login,
} from '../../Store/actions';
import LoginForm from './loginForm';

const mapStateToProps = state => ({
  userName: state.auth.login.loginUsername,
  validUsername: state.auth.login.loginUsernameValid,
  password: state.auth.login.loginPassword,
  validPassword: state.auth.login.loginPasswordValid,
  loginAttempt: state.auth.login.loginAttempt,
  loginHasErrors: state.auth.login.loginHasErrors,
  loginErrorMessage: state.auth.login.loginErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  setLoginUsername: text => dispatch(setLoginUsername(text)),
  setLoginPassword: text => dispatch(setLoginPassword(text)),
  login: (userName, password) => dispatch(login(userName, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
