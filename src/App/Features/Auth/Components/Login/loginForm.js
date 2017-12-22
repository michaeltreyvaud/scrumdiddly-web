import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setEmailAddress } from '../../Store/actions';
import AppTheme from '../../../../../Themes';
import './loginForm.css';

const Styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
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
  submitButton: {
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
};

class LoginForm extends Component {
  submitLoginForm(event) {
    event.preventDefault();
    console.log('Login Submitted');
  }
  onChange(text) {
    this.props.setEmailAddress(text);
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
          style={Styles.submitButton}
        />
      </form>
    );
  }
}

LoginForm.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  setEmailAddress: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  emailAddress: state.auth.emailAddress,
});

const mapDispatchToProps = dispatch => ({
  setEmailAddress: text => dispatch(setEmailAddress(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
