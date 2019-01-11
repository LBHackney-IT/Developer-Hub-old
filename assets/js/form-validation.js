var email, password, firstname, lastname, confirmpassword;
//Email Regular expression
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//Password regular expression
const passRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

firstname = document.getElementById("firstname");
lastname = document.getElementById("lastname");
password = document.getElementById("password");
email = document.getElementById("emailaddress");
confirmpassword = document.getElementById("confirmpassword");
//const lblfirstname = document.getElementById("firstname-label");
//const lbllastname = document.getElementById("emailaddress-label");
//const lblemail = document.getElementById("lastname-label");

//Checks and validates email address input
email.addEventListener("input", function (event) {

    var valid = email.value.length > 0 || emailRegExp.test(email.value);
    if (valid) {
        email.className = "govuk-input";
        email.setAttribute("aria-invalid", "false");
    }
    else {
        email.className = "govuk-input govuk-input--error";
        email.setAttribute("aria-invalid", "true");
       // email.focus();
    } 
});

firstname.addEventListener("input", function (event) {

    if (firstname.value.trim() > 0) {
        firstname.className = "govuk-input";
        firstname.setAttribute("aria-invalid", "false");
    }
    else {
        firstname.className = "govuk-input govuk-input--error";
        firstname.setAttribute("aria-invalid", "true");
        //email.focus();
    }
});

lastname.addEventListener("input", function (event) {

    if (lastname.value.trim() > 0) {
        lastname.className = "govuk-input";
        lastname.setAttribute("aria-invalid", "false");
    }
    else {
        lastname.className = "govuk-input govuk-input--error";
        lastname.setAttribute("aria-invalid", "true");
       // lastname.focus();
    }
        
});

    function CheckFormInput(){

        //const regform = document.getElementsByTagName("form")[0];     
        //Test email against regex string
        //var test = email.value.length === 0 || emailRegExp.test(email.value);

        var passwordValid = true;
        //Check password string against each specific requirement
        if (password.value.length < 8) //Minimum password length of 8 characters
            passwordValid  = false;
        if (!/\d/.test(password.value)) //Check password contains number
            passwordValid = false;
        if (!/[a-z]/.test(password.value))//Check password contains lowercase characters
            passwordValid  = false;
        if (!/[A-Z]/.test(password.value))//Check password contains uppercase characters
            passwordValid  = false;
        if (/[^0-9a-zA-Z]/.test(password.value))//Check password contains miixture of specified characters
            passwordValid  = false;  

        if (passwordValid) {
            if (password.value != confirmpassword.value) {
                alert("Passwords Do Not Match!")
                password.className = "govuk-input govuk-input--error";
                confirmpassword.className = "govuk-input govuk-input--error";
                confirmpassword.focus();
                //throw "Passwords Do Not Match!";
                return false;
            }
        }
        else {
            password.className = "govuk-input govuk-input--error";
            password.focus();
            return false;
        }

        return passwordValid;
}