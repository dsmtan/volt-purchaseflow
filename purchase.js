"use strict";

// NEW USER BASKET

//take value of swapqty and multiply by 179 DKK = swapprice
//function put value in #swapnumber and swapprice in #swaptotal
//rerun function when input is changed

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
