const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const submit = document.getElementById("submit");

let completed = false;

burger.addEventListener("click", function () {
  menu.classList.toggle("show-menu");
  burger.classList.toggle("show-menu");
});
submit.addEventListener("click", (e) => {
  e.preventDefault();
  checkInput();
  checkCompletion();
});

function checkInput() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  var emailRegex = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;

  if (nameValue === "") {
    error(name, "name cannot be blank");
  } else if (nameValue.length <= 1) {
    error(name, "please enter your full name");
  } else {
    success(name);
  }

  if (emailValue === "") {
    error(email, "email cannot be blank");
  } else if (emailRegex.test(emailValue) === false) {
    error(email, "email is not valid");
  } else {
    success(email);
  }

  if (passwordValue === "") {
    error(password, "password cannot be blank");
  } else if (passwordValue.length < 6) {
    error(password, "password cannot be less than 6 characters");
  } else {
    success(password);
  }
  if (passwordValue !== password2Value) {
    error(password2, "password did not match");
  } else if (password2Value === "") {
    error(password2, "please re-enter your password");
  } else if (passwordValue.length < 6) {
    error(password2, "password cannot be less than 6 characters");
  } else {
    success(password2);
  }
}

function success(inputSelection) {
  const formControl = inputSelection.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");

  const small = formControl.querySelector("small");
  small.innerHTML = "Success";
  // console.log('success', formControl)
  completed = true;
}

function error(inputSelection, message) {
  const formControl = inputSelection.parentElement;

  formControl.classList.remove("success");
  formControl.classList.add("error");

  const small = formControl.querySelector("small");
  small.innerHTML = message;
  // console.log('error', formControl);

  completed = false;
}

function checkCompletion() {
  // completed ? console.log('completed') : console.log('there is an error')
  if (completed === true) {
    setTimeout(() => {
      //   location.reload(true);
    }, 500);
  } else {
    return completed;
  }
}
