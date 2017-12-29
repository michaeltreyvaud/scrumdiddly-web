import { connect } from 'react-redux';
import {
  setUsername,
  forgot,
  resetState,
} from '../../Store/Actions/forgot';
import ForgotForm from './forgotForm';

const mapStateToProps = state => ({
  userName: state.auth.forgot.userName,
  userNameValid: state.auth.forgot.userNameValid,
  attempt: state.auth.forgot.attempt,
  hasErrors: state.auth.forgot.hasErrors,
  errorMessage: state.auth.forgot.errorMessage,
  success: state.auth.forgot.success,
});

const mapDispatchToProps = dispatch => ({
  setUsername: text => dispatch(setUsername(text)),
  forgot: userName => dispatch(forgot(userName)),
  resetState: () => dispatch(resetState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotForm);
