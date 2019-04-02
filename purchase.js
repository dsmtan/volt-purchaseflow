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
