"use strict";

// NEW USER BASKET

//VAT = (total amount / 125) * 25
const submitPricesBtn = document.querySelector("#submitPrices");
const swapQty = document.querySelector("#swapqty"); //input
const swapNumber = document.querySelector("#swapnumber"); //table output
const swapTotal = document.querySelector("#swaptotal");
const powerQty = document.querySelector("#powerqty");
const powerNumber = document.querySelector("#powernumber");
const powerTotal = document.querySelector("#powertotal");
const totalSum = document.querySelector("#totalsum");
const totalVAT = document.querySelector("#totalvat");

//default basket
let currentQuantities = {
  swapquantity: 1,
  powerquantity: 1
};

//default quantities in localtstorage
window.localStorage.setItem("qtyObject", JSON.stringify(currentQuantities));

function init() {
  console.log(currentQuantities);
  swapQty.addEventListener("input", updateTotals, false);
  powerQty.addEventListener("input", updateTotals, false);

  submitPricesBtn.addEventListener("click", () => {
    window.location.href = "signup.html";
  });
}
init();

function updateTotals() {
  swapNumber.textContent = swapQty.value;
  powerNumber.textContent = powerQty.value;

  let swapPrice = swapQty.value * 179;
  let powerPrice = powerQty.value * 200;

  swapTotal.textContent = swapPrice + " DKK";
  powerTotal.textContent = powerPrice + " DKK";

  let totalPrice = swapPrice + powerPrice;
  let vatPrice = Math.round((totalPrice / 125) * 25);

  totalSum.textContent = totalPrice + " DKK";
  totalVAT.textContent = vatPrice + " DKK";

  currentQuantities = {
    swapquantity: swapQty.value,
    powerquantity: powerQty.value
  };

  //adjust chosen quantities in localStorage
  window.localStorage.setItem("qtyObject", JSON.stringify(currentQuantities));
}
