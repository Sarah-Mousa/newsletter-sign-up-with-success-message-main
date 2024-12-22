const newsletterMain = document.querySelector(".newsletter");
const successMain = document.querySelector(".newsletter__success");
const form = document.querySelector(".newsletter__submit-form");
const emailInput = document.querySelector("input[type='email']");
const submitButton = document.querySelector(".newsletter__submit-button");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailValue = emailInput.value.trim();

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailValue === "") {
    showError("Email is required");
  } else if (!emailPattern.test(emailValue)) {
    showError("Valid email required");
  } else {
    showSuccessMessage();
  }
});

function showError(message) {
  const existingError = form.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  const errorElement = document.createElement("span");
  errorElement.textContent = message;
  errorElement.classList.add("error-message");
  emailInput.classList.add("input-error");
  const label = form.querySelector("label");
  label.insertAdjacentElement("afterend", errorElement);
}

function showSuccessMessage() {
  newsletterMain.style.display = "none";
  successMain.style.display = "block";
}

const dismissButton = document.querySelector(".newsletter__success-button");
dismissButton.addEventListener("click", function () {
  form.reset();
  successMain.style.display = "none";
  newsletterMain.style.display = "block";
});
