import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setEmailAddress,
  login,
} from '../../Store/actions';
import AppTheme from '../../../../../Themes';
import './loginForm.css';

const Styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    maxWidth: '450px',
    minWidth: '300px',
  },
  emailInput: {
    color: AppTheme.white,
    backgroundColor: 'transparent',
    border: 'none',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: AppTheme.white,
    fontSize: AppTheme.largeFont,
    outline: 'none',
  },
  submitButtonValid: {
    height: '40px',
    backgroundColor: AppTheme.white,
    color: AppTheme.blue,
    border: 'none',
    borderRadius: '5px',
    marginTop: '10px',
    fontSize: AppTheme.mediumFont,
    textTransform: 'uppercase',
    outline: 'none',
  },
  submitButtonInValid: {
    height: '40px',
    backgroundColor: AppTheme.blue,
    color: AppTheme.white,
    border: 'none',
    borderRadius: '5px',
    marginTop: '10px',
    fontSize: AppTheme.mediumFont,
    textTransform: 'uppercase',
    outline: 'none',
  },
};

class LoginForm extends Component {
  onChange(text) {
    this.props.setEmailAddress(text);
  }
  submitLoginForm(event) {
    event.preventDefault();
    this.props.login();
  }
  render() {
    return (
      <form
        onSubmit={event => this.submitLoginForm(event)}
        style={Styles.form}
      >
        <input
          className="LoginForm-Email-Input"
          placeholder="Email"
          type="text"
          style={Styles.emailInput}
          value={this.props.emailAddress}
          onChange={event => this.onChange(event.target.value)}
        />
        <input
          type="submit"
          value="Login"
          style={this.props.validEmailAddress
            ? Styles.submitButtonValid
            : Styles.submitButtonInValid}
        />
      </form>
    );
  }
}

LoginForm.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  validEmailAddress: PropTypes.bool.isRequired,
  setEmailAddress: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  emailAddress: state.auth.loginEmailAddress,
  validEmailAddress: state.auth.loginEmailAddressValid,
});

const mapDispatchToProps = dispatch => ({
  setEmailAddress: text => dispatch(setEmailAddress(text)),
  login: () => dispatch(login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
