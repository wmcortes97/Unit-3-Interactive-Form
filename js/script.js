//add focus state to the name field
/**
 * NAME FIELD
 * set focus on name element when user opens page
 */
document.getElementById("name").focus();

/**
 * JOB ROLE
 * hide other-job-role input field
 * display other-job-role when user selects 'other'
 * used an event listener to detect user's selection of "other"
 * user will initially not see this field, set display to "none"
 * remove style attribute so user sees default display when they choose "other"
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
 * group color options based on data-theme attribute
 * used an event listener to select element for t-shirt design
 * used if conditions to listen to user's t-shirt design selection, since there are two design options, created two for loops
 * inside each condition statement, I inserted a for loop to display or hide the shirt color options that was dependent on their design selection
 */
const chooseColor = document.getElementById("color");
chooseColor.disabled = true;

const jsPuns = document.querySelectorAll('[data-theme="js puns"]'); //color
const jsHearts = document.querySelectorAll('[data-theme="heart js"]'); //color

const chooseTheme = document.getElementById("design"); //drop down choose 

chooseTheme.addEventListener("change", (e) => {
  if (e.target.value === "js puns") {
    chooseColor.disabled = false;
    chooseColor[0].selected = true;
    for (let i = 0; i < jsHearts.length; i++) {
      jsHearts[i].hidden = true;
      jsPuns[i].hidden = false;
    }
  } else if (e.target.value === "heart js") {
    chooseColor.disabled = false;
    chooseColor[0].selected = true;
    for (let i = 0; i < jsPuns.length; i++) {
      jsPuns[i].hidden = true;
      jsHearts[i].hidden = false;
    }
  } else {
    chooseColor.disabled = true;
  }
});

/**
 * REGIESTER FOR ACTIVITIES
 * Total $ should update to reflect the sum of cost
 * created four variables:
 *  the element where the event listener will be added
 *  the element where the total price will be insterted
 *  the element that represents an initial counter
 * created an if statement that, when checked or unchecked, would add/ substract the data-cost value to the counter
 *
 */

const registerSelection = document.getElementById("activities");

let totalCost = document.getElementById("activities-cost");

let cost = 0;

registerSelection.addEventListener("change", (e) => {
  let clicked = e.target;
  let clickedCost = +clicked.getAttribute("data-cost"); //changed string into number

  if (clicked.checked) {
    cost += clickedCost;
  } else {
    cost -= clickedCost;
  }

  totalCost.innerHTML = `Total: $${cost}`;
});

/**
 * PAYMENT INFO
 *hid bitcoin and paypal options and made the card method selected by default.
 *created functions for when one payment option is selected.
 *added an eventListener to paymentMethod and ran the functions accordingly.
 */

const paymentMethod = document.getElementById("payment");
paymentMethod[1].setAttribute("selected", true);

const paypalMessage = document.getElementById("paypal");
paypalMessage.style.display = "none";

const bitcoinMessage = document.getElementById("bitcoin");
bitcoinMessage.style.display = "none";

const creditCardField = document.getElementById("credit-card");

//-------- what user sees on page initially ^ -------//

function paymentDisplay(displayed, removed1, removed2) {
  displayed.removeAttribute("style");
  removed1.style.display = "none";
  removed2.style.display = "none";
}

//------- ^ helper function that will be added in event listener----------//

paymentMethod.addEventListener("change", (e) => {
  if (e.target.value === "paypal") {
    paymentDisplay(paypalMessage, bitcoinMessage, creditCardField);
  } else if (e.target.value === "bitcoin") {
    paymentDisplay(bitcoinMessage, paypalMessage, creditCardField);
  } else {
    paymentDisplay(creditCardField, paypalMessage, bitcoinMessage);
  }
});

/**
 * FORM VALIDATION/ ACCESSIBILITY
 * created a helper function that returns true or false that will be added to the eventListener with the submit handler
 * used this helper function to validate, name, email, cc-num, zip, and cvv
 */

function validation(regexTester, element) {
  const input = document.getElementById(element);
  const regex = regexTester;
  if (regex.test(input.value)) {
    input.parentElement.className = "valid";
    input.parentElement.lastElementChild.style.display = "none";
    return true;
  } else {
    input.parentElement.className = "not-valid";
    input.parentElement.lastElementChild.style.display = "inline";
    return false;
  }
}

//---------------helper function ^ --------------------//

function registration() {
  for (let i = 0; i < checkboxInput.length; i++) {
    if (checkboxInput[i].checked) {
      registerSelection.firstElementChild.className = "valid";
      registerSelection.lastElementChild.style.display = "none";
      return true;
      break;
    } else {
      registerSelection.firstElementChild.className = "not-valid";
      registerSelection.lastElementChild.style.display = "inline";
    }
  }
}
// registration(); //returns true if one is checked and undefined if all unchecked

//------------------- separate function for registration validation ^ -------------------//

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  if (validation(/^\D\w+\D$/, "name")) {
  } else {
    e.preventDefault();
  }
  if (validation(/^\w+@\w+\.com$/, "email")) {
  } else {
    e.preventDefault();
  }
  if (registration()) {
  } else {
    e.preventDefault();
  }
  if (paymentMethod.value === "credit-card") {
    if (validation(/^\d{13,16}$/, "cc-num")) {
    } else {
      e.preventDefault();
    }
    if (validation(/^\d{5}$/, "zip")) {
    } else {
      e.preventDefault();
    }
    if (validation(/^\d{3}$/, "cvv")) {
    } else {
      e.preventDefault();
    }
  }
});

/**
 * ACCESSIBILITY
 * Making focus states more obvious for checkbox inputs
 * created two variables:
 *  the first variable holds the parent element that holds the label and inputs of registration boxes
 *  the second variable holds the individal input elements that can be selected using bracket notation
 * used two event listeners, one with the focusin handler, and the second with the focosout handler
 * looped through the input elements to assign class when focusin and remove class when focusout
 */

const activitiesSection = document.getElementById("activities-box");
const checkboxInput = document.querySelectorAll("#activities-box input");

activitiesSection.addEventListener("focusin", (e) => {
  for (let i = 0; i < checkboxInput.length; i++) {
    if (e.target === checkboxInput[i]) {
      checkboxInput[i].parentElement.className = "focus";
    }
  }
});

activitiesSection.addEventListener("focusout", (e) => {
  for (let i = 0; i < checkboxInput.length; i++) {
    if (e.target === checkboxInput[i]) {
      checkboxInput[i].parentElement.classList.remove("focus");
    }
  }
});
