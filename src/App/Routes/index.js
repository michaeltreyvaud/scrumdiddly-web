import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from './index.styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginHover: false,
      signupHover: false,
    };
  }
  loginMouseEnter() {
    this.setState({
      loginHover: true,
      signupHover: false,
    });
  }
  loginMouseLeave() {
    this.setState({
      loginHover: false,
      signupHover: false,
    });
  }
  signupMouseEnter() {
    this.setState({
      loginHover: false,
      signupHover: true,
    });
  }
  signupMouseLeave() {
    this.setState({
      loginHover: false,
      signupHover: false,
    });
  }
  render() {
    return (
      <div style={Styles.container}>
        <div style={Styles.content}>
          Welcome to Scrumdiddly
          <div style={Styles.buttonContainer} >
            <button
              type="button"
              onClick={() => { this.props.history.push('/auth/login'); }}
              style={(this.state.loginHover) ? Styles.button : Styles.buttonHover}
              onMouseEnter={() => this.loginMouseEnter()}
              onMouseLeave={() => this.loginMouseLeave()}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => { this.props.history.push('/auth/signup'); }}
              style={(this.state.signupHover) ? Styles.buttonHover : Styles.button}
              onMouseEnter={() => this.signupMouseEnter()}
              onMouseLeave={() => this.signupMouseLeave()}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Home);
