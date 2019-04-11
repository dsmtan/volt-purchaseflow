"use strict";

//CHECK ORDER PAGE

//add order of first basket page to order summary

const swapQty = document.querySelector("#swapqty"); //input
const swapNumber = document.querySelector("#swapnumber"); //table output
const swapTotal = document.querySelector("#swaptotal");
const powerQty = document.querySelector("#powerqty");
const powerNumber = document.querySelector("#powernumber");
const powerTotal = document.querySelector("#powertotal");
const totalSum = document.querySelector("#totalsum");
const totalVAT = document.querySelector("#totalvat");

const pickupInput = document.querySelector("#freepickup");
const shipInput = document.querySelector("#shiphome");
const shipSum = document.querySelector("#shippingprice");
const addressInfo = document.querySelector("#shippinginfo");

const streetInput = document.querySelector("#shipaddress1");
const zipInput = document.querySelector("#shipaddress2");
const cityInput = document.querySelector("#shipaddress3");

let swapPrice;
let powerPrice;
let totalPrice;
let vatPrice;
let shipPrice = 0;

let completeOrder;
let swapQuantity;
let powerQuantity;
let userData;

//fetch userdata from localstorage
function getUser() {
  userData = JSON.parse(window.localStorage.getItem("userAccount"));
  getQuantities();
}

getUser();

//fetch quantities from localstorage
function getQuantities() {
  const quantityObj = JSON.parse(window.localStorage.getItem("qtyObject"));
  swapQuantity = parseInt(quantityObj.swapquantity);
  powerQuantity = parseInt(quantityObj.powerquantity);
  console.log(swapQuantity, powerQuantity);
  updateTotals(swapQuantity, powerQuantity);
}

//when ship home is checked add price to order and show address fields

pickupInput.addEventListener("click", checkShipping);
shipInput.addEventListener("click", checkShipping);

function checkShipping() {
  if (shipInput.checked) {
    shipPrice = 50;
    addressInfo.classList.remove("hide");
    updateTotals(swapQuantity, powerQuantity);
  } else {
    shipPrice = 0;
    addressInfo.classList.add("hide");
    updateTotals(swapQuantity, powerQuantity);
  }
}

function updateTotals(swapQuantity, powerQuantity) {
  swapNumber.textContent = swapQuantity;
  powerNumber.textContent = powerQuantity;

  swapPrice = swapQuantity * 179;
  powerPrice = powerQuantity * 200;

  swapTotal.textContent = swapPrice + " DKK";
  powerTotal.textContent = powerPrice + " DKK";
  shipSum.textContent = shipPrice + " DKK";

  totalPrice = swapPrice + powerPrice + shipPrice;
  vatPrice = Math.round((totalPrice / 125) * 25);

  totalSum.textContent = totalPrice + " DKK";
  totalVAT.textContent = vatPrice + " DKK";

  getOrder();
}

streetInput.addEventListener("change", getOrder);
zipInput.addEventListener("change", getOrder);
cityInput.addEventListener("change", getOrder);

function getOrder() {
  completeOrder = {
    totalswap: swapPrice + " DKK",
    totalpower: powerPrice + " DKK",
    totalship: shipPrice + " DKK",
    totalamount: totalPrice + " DKK",
    totalvatsum: vatPrice + " DKK",
    shippingaddress: `${streetInput.value}, ${zipInput.value} ${
      cityInput.value
    } `,
    email: userData.email,
    password: userData.password,
    fullname: userData.fullname,
    country: userData.country,
    phoneno: userData.phoneno,
    marketing: userData.marketing,
    newuser: userData.newuser
  };

  console.log(completeOrder);
}

function post(newOrder) {
  fetch("https://denisekea-93a9.restdb.io/rest/volt-orders", {
    method: "post",
    body: JSON.stringify(newOrder),
    headers: {
      "content-type": "application/json; charset=utf-8",
      "x-apikey": "5c85985ecac6621685acbd92",
      "cache-control": "no-cache"
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      alert(
        "Your order is placed in https://denisekea-93a9.restdb.io/rest/volt-orders"
      );
    });
}

const submitOrderBtn = document.querySelector("#submitOrder");
submitOrderBtn.addEventListener("click", submitOrder);

function submitOrder() {
  event.preventDefault();
  post(completeOrder);
}
