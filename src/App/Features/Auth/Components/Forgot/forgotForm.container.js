import { connect } from 'react-redux';
import {
  setForgotUsername,
  forgot,
  resetForgotState,
} from '../../Store/Actions/forgot';
import ForgotForm from './forgotForm';

const mapStateToProps = state => ({
  forgotUserName: state.auth.forgot.forgotUserName,
  forgotUserNameValid: state.auth.forgot.forgotUserNameValid,
  forgotAttempt: state.auth.forgot.forgotAttempt,
  forgotHasErrors: state.auth.forgot.forgotHasErrors,
  forgotErrorMessage: state.auth.forgot.forgotErrorMessage,
  forgotSuccess: state.auth.forgot.forgotSuccess,
});

const mapDispatchToProps = dispatch => ({
  setForgotUsername: text => dispatch(setForgotUsername(text)),
  forgot: userName => dispatch(forgot(userName)),
  resetForgotState: () => dispatch(resetForgotState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotForm);
