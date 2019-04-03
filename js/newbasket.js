"use strict";

// NEW USER BASKET

//swapqty.addEventListener("input", updateColors, false);
//VAT = (total amount / 125) * 25

const swapQty = document.querySelector("#swapqty"); //input
const swapNumber = document.querySelector("#swapnumber"); //table output
const swapTotal = document.querySelector("#swaptotal");
const powerQty = document.querySelector("#powerqty");
const powerNumber = document.querySelector("#powernumber");
const powerTotal = document.querySelector("#powertotal");
const totalSum = document.querySelector("#totalsum");
const totalVAT = document.querySelector("#totalvat");

//default basket
let currentPrices = {
  swaptotal: 179,
  powertotal: 200,
  totalprice: 379,
  vatprice: 76
};

function init() {
  console.log(currentPrices);
  swapQty.addEventListener("input", updateTotals, false);
  powerQty.addEventListener("input", updateTotals, false);
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

  // store prices in object currentPrices
  currentPrices = {
    swapprice: swapPrice,
    powerprice: powerPrice,
    totalprice: totalPrice,
    vatprice: vatPrice
  };

  console.log(currentPrices);
}

//when submit button is clicked, currentPrices is stored in restdb
