function setCookie(cname, cvalue, exdays) {
var d = new Date();
document.cookie = cname + "=" + cvalue + ";" + exdays + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const redirectTo = (url) => {
    window.location.href = url;
}

const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

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
          console.log('session validity: ' + session.isValid());
    //Set the profile info
    cognitoUser.getUserAttributes(function(err, result) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
      let nameObject = result.find(element => element.Name === 'name');
      document.getElementById("email_value").innerHTML = 'Welcome '+ nameObject.Value;
    });

      });
  } else {
    redirectTo('/developer/login');
  }
}