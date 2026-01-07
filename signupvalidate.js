//validation logic
function validate() {
  //request data gathering logic
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirmpassword = document.getElementById("confirmpassword").value;
  let mobileno = document.getElementById("mobileno").value;
  let email = document.getElementById("email").value;
  let regex = /[a-z][A-z]/;
  let mbregex = /[0-9]{10}/;
  //validation logic
  if (username == "") {
    alert("please enter username");
    return false;
  }

  if (password == "") {
    alert("please enter password");
    return false;
  }
  if (password.length < 8 || password.length > 12) {
    alert("password should be minmum 8 characters and maximum 12 characters");
    return false;
  }
  if (!regex.test(password)) {
    alert(
      "password should be combination of small letters ,capital letters and numbers"
    );
    return false;
  }
  if (confirmpassword != password) {
    alert("password amd confirm password should be same");
    return false;
  }
  if (mobileno == "") {
    alert("please enter mobile number");
    return false;
  }
  if (!mbregex.test(mobileno)) {
    alert("mobile number sholud contain only 10 digits");
    return false;
  }
  if (email == "") {
    alert("please enter email");
    return false;
  }
  if (!email.include(".com")) {
    alert("enter valid email");
    return false;
  }
  if (gender == "") {
    alert("please enter gender");
    return false;
  }
  if (dob == "") {
    alert("please enter date of birth");
    return false;
  }
  if (address == "") {
    alert("please enter address");
    return false;
  }
  if (qualification == "") {
    alert("please enter qualificatrion");
    return false;
  }
  if (skills == "") {
    alert("please enter skills");
    return false;
  }
  if (shift == "") {
    alert("please select shift");
    return false;
  }
  if (file == "") {
    alert("please upload your resume");
    return false;
  }
  return true;
}
