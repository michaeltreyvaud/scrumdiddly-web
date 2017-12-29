import { connect } from 'react-redux';
import ResendForm from './resendForm';
import {
  setResendUsername,
  resend,
  resetResendState,
} from '../../Store/Actions/resend';

const mapStateToProps = state => ({
  userName: state.auth.resend.resendUserName,
  userNameValid: state.auth.resend.userNameValid,
  attemptResend: state.auth.resend.attemptResend,
  resendHasErrors: state.auth.resend.resendHasErrors,
  resendErrorMessage: state.auth.resend.resendErrorMessage,
  resendSuccess: state.auth.resend.resendSuccess,
});

const mapDispatchToProps = dispatch => ({
  setResendUsername: text => dispatch(setResendUsername(text)),
  resend: userName => dispatch(resend(userName)),
  resetState: () => dispatch(resetResendState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResendForm);
