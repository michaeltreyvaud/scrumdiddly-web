import { connect } from 'react-redux';
import ResendForm from './resendForm';
import {
  setUsername,
  resend,
  resetState,
} from '../../Store/Actions/resend';

const mapStateToProps = state => ({
  userName: state.auth.resend.userName,
  userNameValid: state.auth.resend.userNameValid,
  attempt: state.auth.resend.attempt,
  hasErrors: state.auth.resend.hasErrors,
  errorMessage: state.auth.resend.errorMessage,
  success: state.auth.resend.success,
});

const mapDispatchToProps = dispatch => ({
  setUsername: text => dispatch(setUsername(text)),
  resend: userName => dispatch(resend(userName)),
  resetState: () => dispatch(resetState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResendForm);
