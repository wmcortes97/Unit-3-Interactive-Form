//add focus state to the name field
/**
 * NAME FIELD
 * set focus on name element when user opens page
 */
document.getElementById("name").focus();

/**
 * JOB ROLE
 * hide other-jon-role input field
 * display other-job-role when user selects 'other'
 */

let otherJob = document.getElementById("other-job-role");
otherJob.style.display = "none";

const jobTitle = document.getElementById("title");

jobTitle.addEventListener("change", (e) => {
  if (e.target.value === "other") {
    otherJob.removeAttribute("style");
  } else {
    otherJob.style.display = "none";
  }
});

/**
 * T-SHIRT INFO
 * disable the color option
 * group color options based on data theme
 * addEventListener to select element for t-shirt design
 * color options change depending on t-shirt design.
 */
const chooseColor = document.getElementById("color");
chooseColor.disabled = true;

const jsPuns = document.querySelectorAll('[data-theme="js puns"]');
const jsHearts = document.querySelectorAll('[data-theme="heart js"]');

const chooseTheme = document.getElementById("design");

chooseTheme.addEventListener("change", (e) => {
  if (e.target.value === "js puns") {
    chooseColor.disabled = false;
    for (let i = 0; i < jsHearts.length; i++) {
      jsHearts[i].style.display = "none";
      jsPuns[i].removeAttribute("style");
    }
  } else if (e.target.value === "heart js") {
    chooseColor.disabled = false;
    for (let i = 0; i < jsPuns.length; i++) {
      jsPuns[i].style.display = "none";
      jsHearts[i].removeAttribute("style");
    }
  } else {
    chooseColor.disabled = true;
  }
});

/**
 * REGIESTER FOR ACTIVITIES
 * Total $ should update to reflect the sum of cost
 */

const registerSelection = document.getElementById("activities");

const checkboxes = document.querySelectorAll(".activities input");

let totalCost = document.getElementById("activities-cost");

let cost = 0;

registerSelection.addEventListener("change", (e) => {
  let clicked = e.target;
  let clickedCost = +clicked.getAttribute("data-cost"); //returns number

  if (clicked.checked) {
    cost += clickedCost;
  } else {
    cost -= clickedCost;
  }

  totalCost.innerHTML = `Total: $${cost}`;
});

/**
 * PAYMENT INFO
 *Hid bitcoin and paypal options and made the card method selected by default.
 *Created functions for when one payment option is selected.
 *Added an eventListener to paymentMethod and rn the functions accordingly.
 */

const paymentMethod = document.getElementById("payment");
paymentMethod[1].setAttribute("selected", true);

const paypalMessage = document.getElementById("paypal");
paypalMessage.style.display = "none";

const bitcoinMessage = document.getElementById("bitcoin");
bitcoinMessage.style.display = "none";

const creditCardField = document.getElementById("credit-card");

//-------- what user sees on page initially ^ -------//

function paypalSelection() {
  paypalMessage.removeAttribute("style");
  bitcoinMessage.style.display = "none";
  creditCardField.style.display = "none";
}
function bitcoinSelection() {
  bitcoinMessage.removeAttribute("style");
  paypalMessage.style.display = "none";
  creditCardField.style.display = "none";
}

function creditCardSection() {
  creditCardField.removeAttribute("style");
  paypalMessage.style.display = "none";
  bitcoinMessage.style.display = "none";
}
//------- ^ functions that will be included in addEventListener ----------//

paymentMethod.addEventListener("change", (e) => {
  if (e.target.value === "paypal") {
    paypalSelection();
  } else if (e.target.value === "bitcoin") {
    bitcoinSelection();
  } else {
    creditCardSection();
  }
});

/**
 * FORM VALIDATION
 * Created functions that returns true or false that will be added to the eventListener with the submit handler.
 */

function nameValidation() {
  const nameInput = document.getElementById("name");
  const regex = /^\D\w+\s\w+\D$/;
  return regex.test(nameInput.value);
}
nameValidation(); //working

function emailValidation() {
  const emailInput = document.getElementById("email");
  const regex = /^\w+@\w+\.com$/;
  return regex.test(emailInput.value);
}

emailValidation(); //working

function registration() {
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      return true;
      break;
    }
  }
}
registration(); //returns true if one is checked and undefined if all unchecked

function cardNumber() {
  const cardNumber = document.getElementById("cc-num");
  const regex = /^\d{13,16}$/;
  return regex.test(cardNumber.value);
}
cardNumber();

function zipcode() {
  const zipcode = document.getElementById("zip");
  const regex = /^\d{5}$/;
  return regex.test(zipcode.value);
}

zipcode();

function cvv() {
  const cvv = document.getElementById("cvv");
  const regex = /^\d{3}$/;
  return regex.test(cvv.value);
}

cvv();

//const paymentMethod = document.getElementById("payment");
function ccValidity() {
  if (paymentMethod.value === "credit-card") {
    if (cardNumber() && zipcode() && cvv()) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}

ccValidity();

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  if (nameValidation() && emailValidation() && registration() && ccValidity()) {
  } else {
    e.preventDefault();
    //console.log("prevent");
  }
});

/**
 * ACCESSIBILITY
 * Making focus states more obvious for checkbox inputs
 */

//const checkboxes = document.querySelectorAll(".activities input");

// checkboxes.addEventListener("focus", (e) => {
//   for (let i = 0; i < checkboxes.length; i++) {}
// });
