const handleCognitoErrors = (res) => {
  //  Only handle backend errors from the cognito wrapper
  if (!res.ok && res.status >= 400 && res.status < 500) {
    return res.json().then((json) => {
      let displayMessage = '';
      switch (json.error) {
        case 'CodeDeliveryFailureException': {
          displayMessage = 'Failed to send code, please check your username and try again';
          break;
        }
        case 'InvalidParameterException': {
          displayMessage = 'Invalid Username, please try again';
          break;
        }
        case 'LimitExceededException': {
          displayMessage = 'Server is currently busy, please try again later';
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
        case 'UserNotConfirmedException': {
          displayMessage = 'Account has not been confirmed yet';
          break;
        }
        case 'UserNotFoundException': {
          displayMessage = 'Account not found';
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
