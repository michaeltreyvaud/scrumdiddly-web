import { connect } from 'react-redux';
import {
  setConfirmUsername,
  setConfirmCode,
  confirmAccount,
  resetConfirmState,
} from '../../Store/Actions/confirm';
import ConfirmForm from './confirmForm';

const mapStateToProps = state => ({
  userName: state.auth.confirm.confirmUserName,
  validUsername: state.auth.confirm.confirmUserNameValid,
  confirmationCode: state.auth.confirm.confirmationCode,
  validConfirmationCode: state.auth.confirm.confirmationCodeValid,
  confirmAttempt: state.auth.confirm.confirmAttempt,
  confirmHasErrors: state.auth.confirm.confirmHasErrors,
  confirmErrorMessage: state.auth.confirm.confirmErrorMessage,
  confirmSuccess: state.auth.confirm.confirmSuccess,
});

const mapDispatchToProps = dispatch => ({
  setConfirmUsername: userName => dispatch(setConfirmUsername(userName)),
  setConfirmCode: code => dispatch(setConfirmCode(code)),
  confirmAccount: (userName, confirmationCode) =>
    dispatch(confirmAccount(userName, confirmationCode)),
  resetState: () => dispatch(resetConfirmState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmForm);
