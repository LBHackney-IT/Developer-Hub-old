const confirmRegistration = () => {
    const poolData = {
        UserPoolId : _config.cognito.userPoolId, // Your user pool id here
        ClientId : _config.cognito.clientId, // Your client id here
    };
    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    
    const email = getUrlParameter("email");
    const code = getUrlParameter("code");
    
    const userData = {
        Username : email,    
        Pool : userPool,    
    };

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.confirmRegistration(code, true, function(err, result) {
        if (err) {
            redirectTo('/');
        }
        redirectTo('/developer/login');
    });
}