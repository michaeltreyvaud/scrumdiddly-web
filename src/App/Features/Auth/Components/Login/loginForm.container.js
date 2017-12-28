import { connect } from 'react-redux';
import {
  setLoginUsername,
  setLoginPassword,
  login,
} from '../../Store/actions';
import LoginForm from './loginForm';

const mapStateToProps = state => ({
  userName: state.auth.loginUsername,
  validUsername: state.auth.loginUsernameValid,
  password: state.auth.loginPassword,
  validPassword: state.auth.loginPasswordValid,
  loginAttempt: state.auth.loginAttempt,
  loginHasErrors: state.auth.loginHasErrors,
  loginErrorMessage: state.auth.loginErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  setLoginUsername: text => dispatch(setLoginUsername(text)),
  setLoginPassword: text => dispatch(setLoginPassword(text)),
  login: (userName, password) => dispatch(login(userName, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
