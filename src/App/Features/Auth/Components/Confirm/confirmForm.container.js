import { connect } from 'react-redux';
import {
  setUsername,
  setCode,
  confirmAccount,
  resetState,
} from '../../Store/Actions/confirm';
import ConfirmForm from './confirmForm';

const mapStateToProps = state => ({
  userName: state.auth.confirm.userName,
  userNameValid: state.auth.confirm.userNameValid,
  code: state.auth.confirm.code,
  codeValid: state.auth.confirm.codeValid,
  attempt: state.auth.confirm.attempt,
  hasErrors: state.auth.confirm.hasErrors,
  errorMessage: state.auth.confirm.errorMessage,
  success: state.auth.confirm.success,
});

const mapDispatchToProps = dispatch => ({
  setUsername: userName => dispatch(setUsername(userName)),
  setCode: code => dispatch(setCode(code)),
  confirmAccount: (userName, confirmationCode) =>
    dispatch(confirmAccount(userName, confirmationCode)),
  resetState: () => dispatch(resetState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmForm);
