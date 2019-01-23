const checkIfUserIsAuthenticated = () => {
  const poolData = {
    UserPoolId : _config.cognito.userPoolId,
    ClientId : _config.cognito.clientId
  };

  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  var cognitoUser = userPool.getCurrentUser();

  if (cognitoUser != null) {
      cognitoUser.getSession(function(err, session) {
          if (err) {
            redirectTo('/developer/login');
          }
          var sessionToken = session.getAccessToken().getJwtToken();
          var sessionExpires = convert(session.getAccessToken().payload.exp);
          var currentDateTime = new Date();
          if (sessionExpires >= currentDateTime){
            var refreshToken = session.getRefreshToken();
            cognitoUser.refreshSession(refreshToken);
          }
          else {
            redirectTo('/developer/login');
          }

		//Set the profile info
		cognitoUser.getUserAttributes(function(err, result) {
			if (err) {
				console.log(err);
				return;
			}
			document.getElementById("email_value").innerHTML = 'Welcome '+ result[4].getValue() + ' ' + result[0].getValue();
		});

      });
  } else {
    redirectTo('/developer/login');
  }
}

const convert = (timestamp) => {
   var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
   var date = new Date(timestamp*1000);
   var year = date.getFullYear();
   var month = months_arr[date.getMonth()];
   var day = date.getDate();
   var hours = date.getHours();
   var minutes = "0" + date.getMinutes();
   var seconds = "0" + date.getSeconds();
   var convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
   return new Date(convdataTime);
}
