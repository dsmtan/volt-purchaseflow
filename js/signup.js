"use strict";

// SIGN UP PAGE

//when overlay is clicked hide selected overlay

const loginOverlay = document.querySelector("#loginoverlay");
const registerOverlay = document.querySelector("#registeroverlay");

loginOverlay.addEventListener("click", () => {
  loginOverlay.classList.add("hide");
  registerOverlay.classList.remove("hide");
});

registerOverlay.addEventListener("click", () => {
  registerOverlay.classList.add("hide");
  loginOverlay.classList.remove("hide");
});

const registerForm = document.querySelector("#registerform");
registerForm.setAttribute("novalidate", true);

registerForm.addEventListener("submit", e => {
  e.preventDefault();
  registerForm.elements.submit.disabled = true;

  const submittedAccount = {
    email: registerForm.elements.email.value,
    password: registerForm.elements.password.value,
    fullname: registerForm.elements.fullname.value,
    country: registerForm.elements.country.value,
    phoneno: registerForm.elements.phoneno.value,
    marketing: registerForm.elements.marketing.checked,
    newuser: true
  };

  if (registerForm.reportValidity() == true) {
    //store userdata in localstorage
    window.localStorage.setItem(
      "userAccount",
      JSON.stringify(submittedAccount)
    );
    window.location.href = "checkorder.html";
  } else {
    registerForm.elements.submit.disabled = false;
  }
  console.log("registerForm validity:" + registerForm.reportValidity());
});

const loginForm = document.querySelector("#loginform");
loginForm.setAttribute("novalidate", true);

loginForm.addEventListener("submit", e => {
  e.preventDefault();
  loginForm.elements.submit.disabled = true;

  const submittedAccount = {
    email: loginForm.elements.email.value,
    password: loginForm.elements.password.value,
    newuser: false
  };

  if (loginForm.reportValidity() == true) {
    //store userdata in localstorage
    window.localStorage.setItem(
      "userAccount",
      JSON.stringify(submittedAccount)
    );
    window.location.href = "checkorder.html";
  } else {
    loginForm.elements.submit.disabled = false;
  }
  console.log("registerForm validity:" + loginForm.reportValidity());
});
