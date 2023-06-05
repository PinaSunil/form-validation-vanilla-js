let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let errorMsg = document.getElementsByClassName("error");
let sucessIcon = document.getElementsByClassName("success-icon");
let failureIcon = document.getElementsByClassName("failure-icon");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate(username, 0, "Username cannot be blank");
  validate(email, 1, "Email cannot be blank");
  validate(password, 2, "Password cannot be blank");
});

let validate = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    failureIcon[serial].style.opacity = "1";
    sucessIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    failureIcon[serial].style.opacity = "0";
    sucessIcon[serial].style.opacity = "1";
  }
};

