const handleCognitoErrors = (res) => {
  //  Only handle backend errors from the cognito wrapper
  if (!res.ok && res.status >= 400 && res.status < 500) {
    return res.json().then((json) => {
      let displayMessage = '';
      switch (json.error) {
        case 'CodeDeliveryFailureException': {
          displayMessage = 'Failed to send code, please check your email and username and try again';
          break;
        }
        case 'InvalidParameterException': {
          displayMessage = 'Invalid username/email or password, please try again';
          break;
        }
        case 'InvalidPasswordException': {
          displayMessage = 'Invalid password, please try again';
          break;
        }
        case 'NotAuthorizedException': {
          displayMessage = 'Forbidden, please try again';
          break;
        }
        case 'TooManyRequestsException': {
          displayMessage = 'Too many requests, please try again later';
          break;
        }
        case 'UsernameExistsException': {
          displayMessage = 'Username/Email already exists, please try again';
          break;
        }
        default: {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
      }
      const error = new Error(displayMessage);
      error.code = res.status;
      throw error;
    });
  }
  return res;
};

export default handleCognitoErrors;
