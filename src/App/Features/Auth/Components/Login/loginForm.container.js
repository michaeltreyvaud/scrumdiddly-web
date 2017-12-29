import { connect } from 'react-redux';
import {
  setUsername,
  setPassword,
  login,
  resetState,
} from '../../Store/Actions/login';
import LoginForm from './loginForm';

const mapStateToProps = state => ({
  userName: state.auth.login.userName,
  userNameValid: state.auth.login.userNameValid,
  password: state.auth.login.password,
  passwordValid: state.auth.login.passwordValid,
  attempt: state.auth.login.attempt,
  hasErrors: state.auth.login.hasErrors,
  errorMessage: state.auth.login.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  setUsername: text => dispatch(setUsername(text)),
  setPassword: text => dispatch(setPassword(text)),
  login: (userName, password) => dispatch(login(userName, password)),
  resetState: () => dispatch(resetState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
