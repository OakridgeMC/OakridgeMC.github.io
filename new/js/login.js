function Login() {
  var password = "OakridgeS13";
  if (this.document.login.pass.value == password) {
    window.location.href = "members/index.html";
  } else {
    alert("Incorrect Password. Please check the members only Discord Server.");
  }
}
