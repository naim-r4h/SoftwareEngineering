// script.js

/**
 * Validate that flight number is 2 letters followed by 1-4 digits (e.g., BA304).
 * @param {string} flightNumber 
 * @returns {boolean}
 */
function validateFlightNumber(flightNumber) {
  const flightRegex = /^[A-Za-z]{2}\d{1,4}$/;
  return flightRegex.test(flightNumber);
}

// Attach an event listener to handle form submission
document.addEventListener("DOMContentLoaded", () => {
  const flightForm = document.getElementById("flight-form");
  const errorMessage = document.getElementById("error-message");

  flightForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset previous errors
    errorMessage.classList.add("hidden");
    errorMessage.textContent = "";

    const flightNumberInput = document.getElementById("flight-number").value.trim();

    // Validate input
    if (!validateFlightNumber(flightNumberInput)) {
      showError("Please enter a valid flight number (e.g., BA304).");
    }
  });

  function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.classList.remove("hidden");
  }
});

// EXPORTS for testing (CommonJS)
module.exports = {
  validateFlightNumber
};
