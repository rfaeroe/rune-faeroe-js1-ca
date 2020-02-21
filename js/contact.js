const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  //  First name
  const firstName = document.querySelector("#firstName");
  const firstNameError = document.querySelector("#firstNameError");
  const firstNameValue = firstName.value;

  //  Last name
  const lastName = document.querySelector("#lastName");
  const lastNameError = document.querySelector("#lastNameError");
  const lastNameValue = lastName.value;

  //  Email
  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");
  const emailValue = email.value;

  //  Message
  const message = document.querySelector("#message");
  const messageError = document.querySelector("#messageError");
  const messageValue = message.value;

  //  Hide
  const formValidated = document.querySelector(".formValidated");
  const clearFieldsBtn = document.querySelector(".clearFields");

  if (checkInputLength(firstNameValue) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkInputLength(lastNameValue) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (checkInputLength(emailValue) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkEmailValue(emailValue) === true) {
    invalidEmailError.style.display = "none";
  } else {
    invalidEmailError.style.display = "block";
  }

  if (checkMessageLength(messageValue) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (
    checkMessageLength(messageValue) === true &&
    checkEmailValue(emailValue) === true &&
    checkInputLength(firstNameValue && lastNameValue && emailValue) === true
  ) {
    formValidated.classList.remove("hidden");
    console.log("The form has been successfully submitted");
  }

  // Added myself a function to display a second button to refresh page/clear input fields when form has been successfully submitted
  if (
    checkMessageLength(messageValue) === true &&
    checkEmailValue(emailValue) === true &&
    checkInputLength(firstNameValue && lastNameValue && emailValue) === true
  ) {
    clearFieldsBtn.classList.remove("hidden");
  }
}

function checkInputLength(value) {
  if (value.length > 0) {
    return true;
  } else {
    return false;
  }
}

function checkEmailValue(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}

function checkMessageLength(message) {
  const trimmedMessage = message.trim();

  if (trimmedMessage.length >= 10) {
    return true;
  } else {
    return false;
  }
}

// Clear fields/refresh button
function refreshPage() {
  window.location.reload();
}
