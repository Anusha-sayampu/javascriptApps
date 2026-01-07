//validation logic
function validate() {
  //request data gathering logic
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let regex = /[a-z][A-z]/;
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
  return true;
}
