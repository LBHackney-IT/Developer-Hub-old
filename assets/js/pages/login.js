function signInButton() {
    console.log("hello");
    let accessToken;
      const authenticationData = {
      Username : document.getElementById("emailaddress").value,
      Password : document.getElementById("password").value,
    };

    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

    const poolData = {
      UserPoolId : _config.cognito.userPoolId, // Your user pool id here
      ClientId : _config.cognito.clientId, // Your client id here
    };

    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    const userData = {
        Username : authenticationData.Username,
        Pool : userPool,
    };

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          redirectTo('/api_index.md')
          // window.location = document.referrer
        },
        onFailure: function(err) {
          console.log(err);
          // Notify user of error
          // alert(err.message || JSON.stringify(err));
        },
    });
  }