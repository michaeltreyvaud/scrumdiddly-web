import { connect } from 'react-redux';
import ConfirmForgotPasswordForm from './confirmForgotPasswordForm';
import {
  setConfirmForgotPasswordUserName,
  setConfirmForgotPasswordCode,
  setConfirmForgotPasswordPassword,
  confirmForgotPassword,
  resetConfirmForgotPasswordState,
} from '../../Store/Actions/confirmForgotPassword';

const mapStateToProps = state => ({
  userName: state.auth.confirmForgotPassword.confirmForgotPasswordUserName,
  userNameValid: state.auth.confirmForgotPassword.confirmForgotPasswordUserNameValid,
  code: state.auth.confirmForgotPassword.confirmForgotPasswordConfirmationCode,
  codeValid: state.auth.confirmForgotPassword.confirmForgotPasswordConfirmationCodeValid,
  password: state.auth.confirmForgotPassword.confirmForgotPasswordPassword,
  passwordValid: state.auth.confirmForgotPassword.confirmForgotPasswordPasswordValid,
  attempt: state.auth.confirmForgotPassword.confirmForgotPasswordAttempt,
  hasErrors: state.auth.confirmForgotPassword.confirmForgotPasswordHasErrors,
  errorMessage: state.auth.confirmForgotPassword.confirmForgotPasswordErrorMessage,
  success: state.auth.confirmForgotPassword.confirmForgotPasswordSuccess,
});

const mapDispatchToProps = dispatch => ({
  setConfirmForgotPasswordUserName: text => dispatch(setConfirmForgotPasswordUserName(text)),
  setConfirmForgotPasswordCode: text => dispatch(setConfirmForgotPasswordCode(text)),
  setConfirmForgotPasswordPassword: text => dispatch(setConfirmForgotPasswordPassword(text)),
  confirmForgotPassword: (userName, confirmationCode, password) =>
    dispatch(confirmForgotPassword(userName, confirmationCode, password)),
  resetConfirmForgotPasswordState: () => dispatch(resetConfirmForgotPasswordState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmForgotPasswordForm);
