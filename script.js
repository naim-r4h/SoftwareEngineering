// script.js

const API_KEY = "da41f9a7c325d89f85abc9affe2a7173";
const BASE_URL = "http://api.aviationstack.com/v1/flights";

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

  flightForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Reset previous errors
    errorMessage.classList.add("hidden");
    errorMessage.textContent = "";

    const flightNumberInput = document.getElementById("flight-number").value.trim();

    // Validate input
    if (!validateFlightNumber(flightNumberInput)) {
      showError("Please enter a valid flight number (e.g., BA304).");
      return;
    }

    try {
      const flightData = await fetchFlightData(flightNumberInput);
      console.log("Flight data retrieved:", flightData); // Log retrieved data
    } catch (error) {
      console.error("Error fetching flight data:", error);
      showError("An error occurred while fetching flight data.");
    }
  });

  function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.classList.remove("hidden");
  }

  /**
   * Fetch flight data from AviationStack API
   * @param {string} flightNumber
   * @returns {Promise<object|null>} flight data object or null if no data
   */
  async function fetchFlightData(flightNumber) {
    const url = `${BASE_URL}?access_key=${API_KEY}&flight_iata=${flightNumber}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok. Status: ${response.status}`);
    }

    const data = await response.json();
    if (data && data.data && data.data.length > 0) {
      return data.data[0];
    }
    return null;
  }
});

// EXPORTS for testing (CommonJS)
module.exports = {
  validateFlightNumber
};