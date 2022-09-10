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
