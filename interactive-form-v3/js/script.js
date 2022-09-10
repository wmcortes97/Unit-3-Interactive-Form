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
 */
const chooseColor = document.getElementById("color");
//chooseColor.disabled = true;

const chooseTheme = document.getElementById("design");

const punsOnly = chooseTheme.addEventListener("change", (e) => {});
