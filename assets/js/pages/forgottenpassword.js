const forgotPassword = () => {
    
    const errorMessage = "Email not found";
    const successMessage = "Please check your email";
    
  
    const poolData = {
        UserPoolId : _config.cognito.userPoolId, // Your user pool id here
        ClientId : _config.cognito.clientId, // Your client id here
    };


  const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    
  const userData = {
    Username : document.getElementById("emailaddress").value,    
    Pool : userPool,    
  };

  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.forgotPassword({
      onSuccess: function(result) {
        document.getElementById("forgotPasswordDisplay").innerHTML = successMessage
        // Redirect or Show message to check email for verification code.
      },
      onFailure: function(err) {
        // Show error
        document.getElementById("forgotPasswordDisplay").classList.add("govuk-error-message");
        document.getElementById("forgotPasswordDisplay").innerHTML = errorMessage;
      },
    });
  }