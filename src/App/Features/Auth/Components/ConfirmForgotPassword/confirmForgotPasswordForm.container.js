import { connect } from 'react-redux';
import ConfirmForgotPasswordForm from './confirmForgotPasswordForm';
import {
  setUserName,
  setCode,
  setPassword,
  confirmForgotPassword,
  resetState,
} from '../../Store/Actions/confirmForgotPassword';

const mapStateToProps = state => ({
  userName: state.auth.confirmForgotPassword.userName,
  userNameValid: state.auth.confirmForgotPassword.userNameValid,
  code: state.auth.confirmForgotPassword.code,
  codeValid: state.auth.confirmForgotPassword.codeValid,
  password: state.auth.confirmForgotPassword.password,
  passwordValid: state.auth.confirmForgotPassword.passwordValid,
  attempt: state.auth.confirmForgotPassword.attempt,
  hasErrors: state.auth.confirmForgotPassword.hasErrors,
  errorMessage: state.auth.confirmForgotPassword.errorMessage,
  success: state.auth.confirmForgotPassword.success,
});

const mapDispatchToProps = dispatch => ({
  setUserName: text => dispatch(setUserName(text)),
  setCode: text => dispatch(setCode(text)),
  setPassword: text => dispatch(setPassword(text)),
  confirmForgotPassword: (userName, confirmationCode, password) =>
    dispatch(confirmForgotPassword(userName, confirmationCode, password)),
  resetState: () => dispatch(resetState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmForgotPasswordForm);
