// Document is ready

$(document).ready(function () {
  // fetch profile data

  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function (data) {
      console.log(data);
      showData(data);
    },
  });

  function showData(data) {
    $("#fullName").val(
      data.results[0].name.first + " " + data.results[0].name.last
    );
    $("#fullNameVal").text(data.results[0].name.first + " " + data.results[0].name.last);
    $("#firstNameVal").text(data.results[0].name.first);
    $("#lastName").val(data.results[0].name.last);
    $("#lastNameVal").text(data.results[0].name.last);
    $("#profileEmail").val(data.results[0].email);
    $("#profileEmailVal").text(data.results[0].email);
    $("#data").text(data);
  }

  // Full Name Validation
  $("#fullNameCheck").hide();
  let fullNameError = true;
  $("#fullName").keyup(function () {
    validateFullName();
  });

  function validateFullName() {
    const fullNameValue = $("#fullName").val();
    // const firstNameRegex = /^[A-Za-z]+$/;
    // console.log("firstNameValue");
    if (fullNameValue.length == "") {
      $("#fullNameCheck").show();
      $("#fullNameCheck").html("*Full name is required");
      fullNameError = false;
      return false;
    }
    // else if (!firstNameRegex.test(fullNameValue)) {
    //   $("#fullNameCheck").show();
    //   $("#fullNameCheck").html(
    //     "*Name is invalid, only alphabets allowed"
    //   );
    //   fullNameError = false;
    //   return false;
    // }
    else if (fullNameValue.length < 4 || fullNameValue.length > 20) {
      $("#fullNameCheck").show();
      $("#fullNameCheck").html("*length of name must be between 4 and 10");
      fullNameError = false;
      return false;
    } else {
      $("#fullNameCheck").hide();
      fullNameError = true;
    }
  }

  // Edit Profile Page Email Validation
  $("#profileEmailcheck").hide();
  let profileEmailError = true;
  $("#profileEmail").keyup(function () {
    validateProfileEmail();
  });

  function validateProfileEmail() {
    const profileEmailValue = $("#profileEmail").val();
    const profileEmailRegex =
      /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    //  console.log("profileEmailValue");
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
    }
  }

  // Edit Profile Page Mobile number validation
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

  // Edit Profile Page Date of birth validation
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

  // Edit Profile Gender selector Validation
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

  // Edit Profile Country selector Validation
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

  // Edit Profile page submit button
  $("#editProfileSubmitBtn").click(function () {
    validateFullName();
    validateProfileEmail();
    validatePhoneNumber();
    validateDate();
    validateGenderSelector();
    validateCountrySelector();

    if (
      fullNameError == true &&
      phoneNumError == true &&
      dateError == true &&
      countryError == true &&
      genderError == true &&
      profileEmailError == true
    ) {
      // window.location.href = "#";
      return true;
    } else {
      // console.log("something false here");
      return false;
    }
  });
});
