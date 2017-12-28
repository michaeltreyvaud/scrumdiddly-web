const handleCognitoErrors = (res) => {
  //  Only handle backend errors from the cognito wrapper
  if (!res.ok && res.status >= 400 && res.status < 500) {
    return res.json().then((json) => {
      let displayMessage = '';
      switch (json.error) {
        case 'CodeDeliveryFailureException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'InternalErrorException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'InvalidEmailRoleAccessPolicyException': {
          displayMessage = 'Please enter a valid email';
          break;
        }
        case 'InvalidLambdaResponseException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'InvalidParameterException': {
          displayMessage = 'Invalid username/password, please try again';
          break;
        }
        case 'InvalidPasswordException': {
          displayMessage = 'Invalid password, please try again';
          break;
        }
        case 'InvalidSmsRoleAccessPolicyException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'InvalidSmsRoleTrustRelationshipException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'NotAuthorizedException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'ResourceNotFoundException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'TooManyRequestsException': {
          displayMessage = 'Too many requests, please try again later';
          break;
        }
        case 'UnexpectedLambdaException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'UserLambdaValidationException': {
          displayMessage = 'Unable to connect, please try again';
          break;
        }
        case 'UsernameExistsException': {
          displayMessage = 'Username already exists, please try another';
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
