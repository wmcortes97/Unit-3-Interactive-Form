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

const eventCost = document.getElementsByClassName("activity-cost");

let totalCost = document.getElementById("activities-cost");

let counter = 0;

registerSelection.addEventListener("change", (e) => {
  if (e.target.className === "activity-cost") {
    for (let i = 0; i < eventCost.length; i++) {
      let currency = eventCost[i].innerHTML;
      let number = Number(currency.replace(/[^0-9.-]+/g, ""));
      counter = counter + number;
      totalCost.innerHTML = `Total: $${counter}`;
    }
  }
});

/**
 * PAYMENT INFO
 *
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
//------- ^ functions depending that will be inserted in eventListener ----------//
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
 */

function nameValidation() {
  const nameInput = document.getElementById("name");
  if (nameInput.value === "") {
    return false;
  } else {
    return true;
  }
}
nameValidation();

function emailValidation() {
  const emailInput = document.getElementById("email");
  const regex = /^\w+@\w+\.com$/;
  return regex.test(emailInput.value);
}

emailValidation();

function registration() {}

function ccPaymentSelection() {}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  // if(nameValidation() || ) {
  //     e.preventDefault();
  // }
});
