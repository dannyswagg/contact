function validateForm() {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
    });
  event.preventDefault();
  function disableMouseEvents(element) {
    element.addEventListener("mousedown", (event) => event.preventDefault());
    element.addEventListener("mouseup", (event) => event.preventDefault());
    element.addEventListener("click", (event) => event.preventDefault());
  }

  // input values
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const mail = document.getElementById("mail");
  const message = document.getElementById("message");
  const radioOption1 = document.getElementById("radio1");
  const radioOption2 = document.getElementById("radio2");
  const consent = document.getElementById("cbx-46");

  // regex expressions
  const firstNameRegex = /^[A-Za-z\s]+$/;
  const lastNameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  var isValid = true;

  // Clear previous error states
  fname.classList.remove("error-border");
  lname.classList.remove("error-border");
  mail.classList.remove("error-border");
  message.classList.remove("error-border");
  document.getElementById("fnameError").style.display = "none";
  document.getElementById("lnameError").style.display = "none";
  document.getElementById("emailError").style.display = "none";
  document.getElementById("messageError").style.display = "none";
  document.getElementById("radioError").style.display = "none";
  document.getElementById("consentError").style.display = "none";

  // validation function
  if (!firstNameRegex.test(fname.value)) {
    fname.classList.add("error-border");
    document.getElementById("fnameError").style.display = "block";
    isValid = false;
  }

  if (!lastNameRegex.test(lname.value)) {
    lname.classList.add("error-border");
    document.getElementById("lnameError").style.display = "block";
    isValid = false;
  }

  if (message.value == "") {
    message.classList.add("error-border");
    document.getElementById("messageError").style.display = "block";
    isValid = false;
  }

  // Validate radio buttons
  if (!radioOption1.checked && !radioOption2.checked) {
    document.getElementById("radioError").style.display = "block";
    isValid = false;
  }

  if (!consent.checked) {
    document.getElementById("consentError").style.display = "block";
    isValid = false;
  }

  // Validate email
  if (!emailRegex.test(mail.value)) {
    mail.classList.add("error-border");
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  }

  // If all validations pass
  if (isValid) {
    document.getElementById("scard").style.display = "block";
  }

  return isValid;

  window.onload = function () {
    var formElements = document.querySelectorAll(
      "#myForm input, #myForm textarea, #myForm button"
    );

    formElements.forEach(function (element) {
      disableMouseEvents(element);
    });
  };
}
