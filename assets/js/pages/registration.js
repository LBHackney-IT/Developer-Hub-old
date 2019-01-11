    function registerButton() {
         
      var username, password, firstname, lastname, organisation, poolData;

      firstname =  document.getElementById("firstname").value;
      lastname =  document.getElementById("lastname").value;
      organisation =  document.getElementById("organisation").value;
      username = document.getElementById("emailaddress").value;

    if (document.getElementById("password").value != document.getElementById("confirmpassword").value) {
      alert("Passwords Do Not Match!")
      throw "Passwords Do Not Match!"
    } else {
      password =  document.getElementById("password").value;
    }

    poolData = {
        UserPoolId : _config.cognito.userPoolId, // Your user pool id here
        ClientId : _config.cognito.clientId // Your client id here
      };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var attributeList = [];

    var dataEmail = {
      Name : 'email',
      Value : username, //get from form field
    };

    var dataName = {
      Name : 'name',
      Value : firstname, //get from form field
    };

    var dataSurname = {
      Name : 'custom:surname',
      Value : lastname, //get from form field
    };

    var dataOrganisation = {
      Name : 'custom:organisation',
      Value : organisation, //get from form field
    };

    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
    var attributeName = new AmazonCognitoIdentity.CognitoUserAttribute(dataName);
    var attributeSurname = new AmazonCognitoIdentity.CognitoUserAttribute(dataSurname);
    var attributeOrganisation = new AmazonCognitoIdentity.CognitoUserAttribute(dataOrganisation);


    attributeList.push(attributeEmail);
    attributeList.push(attributeName);
    attributeList.push(attributeSurname);
    attributeList.push(attributeOrganisation);

    userPool.signUp(username, password, attributeList, null, function(err, result){
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      cognitoUser = result.user;
      console.log('user name is ' + cognitoUser.getUsername());
      //change elements of page
      document.getElementById("auth").innerHTML = "<p class='govuk-body'>Your account has been created.  Please check your email for a verification link. <br><a href=/developer/login>login</a></p> ";

    });
    }