import { connect } from 'react-redux';
import {
  setConfirmUsername,
  setConfirmCode,
  confirmAccount,
} from '../../Store/actions';
import ConfirmForm from './confirmForm';

const mapStateToProps = state => ({
  userName: state.auth.confirmUserName,
  validUsername: state.auth.confirmUserNameValid,
  confirmationCode: state.auth.confirmationCode,
  validConfirmationCode: state.auth.confirmationCodeValid,
  confirmAttempt: state.auth.confirmAttempt,
  confirmHasErrors: state.auth.confirmHasErrors,
  confirmErrorMessage: state.auth.confirmErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  setConfirmUsername: userName => dispatch(setConfirmUsername(userName)),
  setConfirmCode: code => dispatch(setConfirmCode(code)),
  confirmAccount: (userName, confirmationCode) =>
    dispatch(confirmAccount(userName, confirmationCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmForm);
