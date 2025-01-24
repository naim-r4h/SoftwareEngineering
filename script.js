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

/**
 * Fetch flight data from AviationStack API
 * @param {string} flightNumber
 * @returns {object|null} flight data object or null if no data
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

// Attach an event listener to handle form submission
document.addEventListener("DOMContentLoaded", () => {
  const flightForm = document.getElementById("flight-form");
  const resultContainer = document.getElementById("result-container");
  const errorMessage = document.getElementById("error-message");

  // UI elements for flight details
  const airlineNameElem = document.getElementById("airline-name");
  const flightNumElem = document.getElementById("flight-num");
  const departureAirportElem = document.getElementById("departure-airport");
  const arrivalAirportElem = document.getElementById("arrival-airport");
  const flightStatusElem = document.getElementById("flight-status");
  const departureTimeElem = document.getElementById("departure-time");
  const arrivalTimeElem = document.getElementById("arrival-time");

  flightForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    // Reset previous results and errors
    resultContainer.classList.add("hidden");
    errorMessage.classList.add("hidden");
    errorMessage.textContent = "";

    const flightNumberInput = document.getElementById("flight-number").value.trim();

    // 1) Validate input
    if (!validateFlightNumber(flightNumberInput)) {
      showError("Please enter a valid flight number (e.g., BA304).");
      return;
    }

    // 2) If valid, fetch data
    try {
      const flightData = await fetchFlightData(flightNumberInput);

      if (!flightData) {
        showError("Flight data not found. Please check your flight number.");
        return;
      }

      // Populate UI with relevant fields
      airlineNameElem.textContent = flightData.airline?.name || "N/A";
      flightNumElem.textContent = flightData.flight?.iata || "N/A";
      departureAirportElem.textContent = flightData.departure?.airport || "N/A";
      arrivalAirportElem.textContent = flightData.arrival?.airport || "N/A";
      flightStatusElem.textContent = flightData.flight_status || "N/A";
      departureTimeElem.textContent = flightData.departure?.scheduled
        ? new Date(flightData.departure.scheduled).toLocaleString()
        : "N/A";
      arrivalTimeElem.textContent = flightData.arrival?.scheduled
        ? new Date(flightData.arrival.scheduled).toLocaleString()
        : "N/A";

      resultContainer.classList.remove("hidden");
    } catch (err) {
      console.error(err);
      showError("An error occurred while fetching flight data.");
    }
  });

  function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.classList.remove("hidden");
  }
});

// EXPORTS for testing (CommonJS)
module.exports = {
  validateFlightNumber,
  fetchFlightData
};
