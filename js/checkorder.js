"use strict";

//CHECK ORDER PAGE

//when ship home is checked add price to order

const pickupInput = document.querySelector("#freepickup");
const shipInput = document.querySelector("#shiphome");
const shipSum = document.querySelector("#shippingprice");
const addressInfo = document.querySelector("#shippinginfo");

pickupInput.addEventListener("click", checkShipping);
shipInput.addEventListener("click", checkShipping);

function checkShipping() {
  if (shipInput.checked) {
    shipSum.textContent = "50 DKK";
    addressInfo.classList.remove("hide");
  } else {
    shipSum.textContent = "0 DKK";
    addressInfo.classList.add("hide");
  }
}
