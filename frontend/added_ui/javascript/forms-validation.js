// Document is ready

$(document).ready(function () {

  // Sign Up First Name Validation
  $("#firstNameCheck").hide();
  let firstNameError = true;
  $("#firstName").keyup(function () {
    validateFirstName();
  });

  function validateFirstName() {
    const firstNameValue = $("#firstName").val();
    const firstNameRegex = /^[A-Za-z]+$/;
    // console.log(firstNameValue);
    if (firstNameValue.length == "") {
      $("#firstNameCheck").show();
      $("#firstNameCheck").html("*First name is required");
      firstNameError = false;
      return false;
    } else if (!firstNameRegex.test(firstNameValue)) {
      $("#firstNameCheck").show();
      $("#firstNameCheck").html(
        "*First name is invalid, only alphabets allowed"
      );
      firstNameError = false;
      return false;
    } else if (firstNameValue.length < 3 || firstNameValue.length > 10) {
      $("#firstNameCheck").show();
      $("#firstNameCheck").html(
        "*length of first name must be between 3 and 10"
      );
      firstNameError = false;
      return false;
    } else {
      $("#firstNameCheck").hide();
      firstNameError = true;
    }
  }

  // Sign Up Last Name Validation
  $("#LastNameCheck").hide();
  let lastNameError = true;
  $("#lastName").keyup(function () {
    validateLastName();
  });

  function validateLastName() {
    const LastNameValue = $("#lastName").val();
    const LNameRegex = /^[A-Za-z]+$/;
    // console.log("LastNameValue");
    if (LastNameValue.length == "") {
      $("#LastNameCheck").show();
      $("#LastNameCheck").html("*Last name is required");
      lastNameError = false;
      return false;
    } else if (!LNameRegex.test(LastNameValue)) {
      $("#LastNameCheck").show();
      $("#LastNameCheck").html("*Last name is invalid, only alphabets allowed");
      lastNameError = false;
      return false;
    } else if (LastNameValue.length < 3 || LastNameValue.length > 11) {
      $("#LastNameCheck").show();
      $("#LastNameCheck").html("*length of last name must be between 3 and 11");
      lastNameError = false;
      return false;
    } else {
      $("#LastNameCheck").hide();
      lastNameError = true;
    }
  }

  // Sign Up Email Validation
  $("#signUpEmailcheck").hide();
  let signUpEmailError = true;
  $("#SignUpEmail").keyup(function () {
    ValidateSignUpEmail();
  });

  function ValidateSignUpEmail() {
    const signUpEmailValue = $("#SignUpEmail").val();
    const SignUpEmailRegex =
      /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    // console.log("signUpEmailValue");
    if (signUpEmailValue.length == "") {
      $("#signUpEmailcheck").show();
      $("#signUpEmailcheck").html("*Email is required");
      signUpEmailError = false;
      return false;
    } else if (!SignUpEmailRegex.test(signUpEmailValue)) {
      $("#signUpEmailcheck").show();
      $("#signUpEmailcheck").html("*Email is invalid");
      signUpEmailError = false;
      return false;
    } else {
      $("#signUpEmailcheck").hide();
      signUpEmailError = true;
    }
  }

  // Sign Up Password Validation
  $("#signUpPassCheck").hide();
  let signUpPasswordError = true;
  $("#signUpPassword").keyup(function () {
    ValidateSignUpPassword();
  });
  function ValidateSignUpPassword() {
    const signUpPasswordValue = $("#signUpPassword").val();
    const SignUpPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%!%?&]).{8,20}$/;

    if (signUpPasswordValue.length == "") {
      $("#signUpPassCheck").show();
      $("#signUpPassCheck").html("*Password is required");
      signUpPasswordError = false;
      return false;
    }
    if (!signUpPasswordValue.match(SignUpPasswordRegex)) {
      $("#signUpPassCheck").show();
      $("#signUpPassCheck").html(
        "*Your password must be have at least 8 characters, at least one uppercase, one lowercase, one number and one special character"
      );
      signUpPasswordError = false;
      return false;
    } else {
      $("#signUpPassCheck").hide();
      signUpPasswordError = true;
    }
  }

  // Sign Up Confirm Password Validation
  $("#confirmPasscheck").hide();
  let confirmPasswordError = true;
  $("#confirmPassword").keyup(function () {
    validateConfirmPassword();
  });
  function validateConfirmPassword() {
    const confirmPasswordValue = $("#confirmPassword").val();
    const signUpPasswordValue = $("#signUpPassword").val();
    if (confirmPasswordValue.length == "") {
      $("#confirmPasscheck").show();
      $("#confirmPasscheck").html("*Confirm password is required");
      confirmPasswordError = false;
      return false;
    } else if (signUpPasswordValue != confirmPasswordValue) {
      $("#confirmPasscheck").show();
      $("#confirmPasscheck").html("*Password didn't Match");
      confirmPasswordError = false;
      return false;
    } else {
      $("#confirmPasscheck").hide();
      confirmPasswordError = true;
    }
  }

  // Login Modal Email Validation
  $("#loginEmailcheck").hide();
  let loginEmailError = true;
  $("#LoginEmail").keyup(function () {
    validateLoginEmail();
  });

  function validateLoginEmail() {
    const loginEmailValue = $("#LoginEmail").val();
    const loginEmailRegex =
      /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    //  console.log(loginEmailValue);
    if (loginEmailValue.length == "") {
      $("#loginEmailcheck").show();
      $("#loginEmailcheck").html("*Email is required");
      loginEmailError = false;
      return false;
    } else if (!loginEmailRegex.test(loginEmailValue)) {
      $("#loginEmailcheck").show();
      $("#loginEmailcheck").html("*Email is invalid");
      loginEmailError = false;
      return false;
    } else {
      $("#loginEmailcheck").hide();
      loginEmailError = true;
    }
  }

  // Login Modal Password Validation
  $("#loginPassCheck").hide();
  let loginPasswordError = true;
  $("#LoginPassword").keyup(function () {
    validateLoginPassword();
  });
  function validateLoginPassword() {
    // console.log("checking password");
    const loginPasswordValue = $("#LoginPassword").val();
    const loginPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%!%?&]).{8,20}$/;

    if (loginPasswordValue.length == "") {
      $("#loginPassCheck").show();
      $("#loginPassCheck").html("*Password is required");
      loginPasswordError = false;
      return false;
    }
    if (!loginPasswordValue.match(loginPasswordRegex)) {
      $("#loginPassCheck").show();
      $("#loginPassCheck").html("*Password is invalid");
      loginPasswordError = false;
      return false;
    } else {
      $("#loginPassCheck").hide();
      loginPasswordError = true;
    }
  }

  // Profile Page Email Validation
  $("#profileEmailcheck").hide();
  let profileEmailError = true;
  $("#profileEmail").keyup(function () {
    validateProfileEmail();
  });

  function validateProfileEmail() {
    const profileEmailValue = $("#profileEmail").val();
    const profileEmailRegex =
      /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    //  console.log(profileEmailValue);
    if (profileEmailValue.length == "") {
      $("#profileEmailcheck").show();
      $("#profileEmailcheck").html("*Email is required");
      profileEmailError = false;
      return false;
    } else if (!profileEmailRegex.test(profileEmailValue)) {
      $("#profileEmailcheck").show();
      $("#profileEmailcheck").html("*Email is invalid");
      profileEmailError = false;
      return false;
    } else {
      $("#profileEmailcheck").hide();
      profileEmailError = true;
    }
  }

  // Profile Page Mobile number validation
  $("#phoneNumCheck").hide();
  let phoneNumError = true;
  $("#phoneNum").keyup(function () {
    validatePhoneNumber();
  });

  function validatePhoneNumber() {
    const phoneNumValue = $("#phoneNum").val();
    const phoneNumRegex = /^\d*(?:\.\d{1,2})?$/;
    // console.log(phoneNumValue)
    if (phoneNumValue.length == "") {
      $("#phoneNumCheck").show();
      $("#phoneNumCheck").html("*Phone number is required");
      phoneNumError = false;
      return false;
    } else if (!phoneNumRegex.test(phoneNumValue)) {
      $("#phoneNumCheck").show();
      $("#phoneNumCheck").html("*Phone number is invalid");
      phoneNumError = false;
      return false;
    } else if (phoneNumValue.length !== 10) {
      $("#phoneNumCheck").show();
      $("#phoneNumCheck").html("*Please put 10 digit phone number");
      phoneNumError = false;
      return false;
    } else {
      $("#phoneNumCheck").hide();
      phoneNumError = true;
    }
  }

  // Profile Page Date of birth validation
  $("#dateCheck").hide();
  let dateError = true;
  $("#datePicker").on("change", function () {
    validateDate();
  });
  function validateDate() {
    const value = $("#datePicker").val();
    // console.log(value);
    if (value == "") {
      $("#dateCheck").show();
      $("#dateCheck").html("*Please select your date of birth");
      dateError = false;
      return false;
    } else {
      $("#dateCheck").hide();
      dateError = true;
      return true;
    }
  }

  // Date picker for date of birth selection
  $(function () {
    $("#datePicker").datepicker({
      dateFormat: "dd-mm-yy",
      changeMonth: true,
      changeYear: true,
      yearRange: "1950: +0",
    });
  });

  // Profile Gender selector Validation
  $("#genderCheck").hide();
  let genderError = true;
  $("#genderSelector").on("change", function () {
    validateGenderSelector();
  });

  function validateGenderSelector() {
    const genderValue = $("#genderSelector :selected").val();
    // console.log(genderValue);
    if (genderValue == "") {
      $("#genderCheck").show();
      $("#genderCheck").html("*Please select your gender");
      genderError = false;
      return false;
    } else {
      $("#genderCheck").hide();
      genderError = true;
      return true;
    }
  }

  // Profile Country selector Validation
  $("#countryCheck").hide();
  let countryError = true;
  $("#countrySelector").on("change", function () {
    validateCountrySelector();
  });

  function validateCountrySelector() {
    const countryValue = $("#countrySelector :selected").val();
    // console.log(countryValue);
    if (countryValue == "") {
      $("#countryCheck").show();
      $("#countryCheck").html("*Please select your country");
      countryError = false;
      return false;
    } else {
      $("#countryCheck").hide();
      countryError = true;
      return true;
    }
  }

  // Login Page Email Validation
  $("#loginPageEmailcheck").hide();
  let loginPageEmailError = true;
  $("#loginPageEmail").keyup(function () {
    validateLoginPageEmail();
  });

  function validateLoginPageEmail() {
    const loginPageEmailValue = $("#loginPageEmail").val();
    const loginPageEmailRegex =
      /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    //  console.log(loginPageEmailValue);
    if (loginPageEmailValue.length == "") {
      $("#loginPageEmailcheck").show();
      $("#loginPageEmailcheck").html("*Email is required");
      loginPageEmailError = false;
      return false;
    } else if (!loginPageEmailRegex.test(loginPageEmailValue)) {
      $("#loginPageEmailcheck").show();
      $("#loginPageEmailcheck").html("*Email is invalid");
      loginPageEmailError = false;
      return false;
    } else {
      $("#loginPageEmailcheck").hide();
    }
  }

  // Login Page Password Validation
  $("#loginPagePassCheck").hide();
  let loginPagePasswordError = true;
  $("#loginPagePassword").keyup(function () {
    validateLoginPagePassword();
  });
  function validateLoginPagePassword() {
    // console.log("checking login page password");
    const loginPagePassValue = $("#loginPagePassword").val();
    const loginPagePassRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%!%?&]).{8,20}$/;

    if (loginPagePassValue.length == "") {
      $("#loginPagePassCheck").show();
      $("#loginPagePassCheck").html("*Password is required");
      loginPagePasswordError = false;
      return false;
    }
    if (!loginPagePassValue.match(loginPagePassRegex)) {
      $("#loginPagePassCheck").show();
      $("#loginPagePassCheck").html("*Password is invalid");
      loginPagePasswordError = false;
      return false;
    } else {
      $("#loginPagePassCheck").hide();
      loginPagePasswordError = true;
    }
  }

  // Forgot Password Email Validation
  $("#forgotPassEmailcheck").hide();
  let forgotPasswordEmailError = true;
  $("#forgotPasswordEmail").keyup(function () {
    validateForgotPasswordEmail();
  });

  function validateForgotPasswordEmail() {
    const forgotPassEmailValue = $("#forgotPasswordEmail").val();
    const forgotPasswordEmailRegex =
      /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    //  console.log(forgotPassEmailValue);
    if (forgotPassEmailValue.length == "") {
      $("#forgotPassEmailValue").show();
      $("#forgotPassEmailValue").html("*Email is required");
      forgotPasswordEmailError = false;
      return false;
    } else if (!forgotPasswordEmailRegex.test(forgotPassEmailValue)) {
      $("#forgotPassEmailValue").show();
      $("#forgotPassEmailValue").html("*Email is invalid");
      forgotPasswordEmailError = false;
      return false;
    } else {
      $("#forgotPassEmailValue").hide();
    }
  }

  // Sign Up Modal Submit button
  $("#signUpSubmitBtn").click(function () {
    console.log("signUpSubmitBtn click hua");
    validateFirstName();
    validateLastName();
    ValidateSignUpPassword();
    validateConfirmPassword();
    ValidateSignUpEmail();
    // console.log("sign up clicked");
    if (
      firstNameError == true &&
      lastNameError == true &&
      signUpPasswordError == true &&
      confirmPasswordError == true &&
      signUpEmailError == true
    ) {
      // console.log("all true");
      window.location.href = "dashboard.html";
      return true;
    } else {
      // console.log("something false here");
      return false;
    }
  });

  // Login Modal Submit button
  $("#loginSubmitBtn").click(function () {
    // console.log("loginSubmitBtn clicked");
    validateLoginPassword();
    validateLoginEmail();
    if (loginPasswordError == true && loginEmailError == true) {
      window.location.href = "dashboard.html";
      return true;
    } else {
      return false;
    }
  });

  // Forgot Password Submit button
  $("#forgotPasswordSubmitBtn").click(function () {
    validateForgotPasswordEmail();
    if (forgotPasswordEmailError == true) {
      return true;
    } else {
      return false;
    }
  });

  // Profile Setup submit button
  $("#profileSubmitBtn").click(function () {
    validatePhoneNumber();
    validateCountrySelector();
    validateGenderSelector();
    validateDate();
    validateProfileEmail();
    if (
      dateError == true &&
      phoneNumError == true &&
      countryError == true &&
      genderError == true &&
      profileEmailError == true
    ) {
      // console.log("all true");
      window.location.href = "edit-profile-page.html";
      return true;
    } else {
      // console.log("something false here");
      return false;
    }
  });

  // Login Page submit button
  $("#loginPageSubmitBtn").click(function () {
    validateLoginPageEmail();
    validateLoginPagePassword();
    if (loginPageEmailError == true && loginPagePasswordError == true) {
      return true;
    } else {
      return false;
    }
  });
});
