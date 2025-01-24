
/**
 * @jest-environment jsdom
 */

test('that Jest is working', () => {
  expect(2+2).toBe(4);
})

const { validateFlightNumber, fetchFlightData } = require("./script.js");

describe("Flight Number Validation", () => {
  test("should accept valid flight numbers (2 letters + 1-4 digits)", () => {
    expect(validateFlightNumber("BA304")).toBe(true);
    expect(validateFlightNumber("UA100")).toBe(true);
    expect(validateFlightNumber("AA9999")).toBe(true);
  });

  test("should reject invalid flight numbers", () => {
    expect(validateFlightNumber("BAA304")).toBe(false); // 3 letters
    expect(validateFlightNumber("UA")).toBe(false);     // no digits
    expect(validateFlightNumber("BA12345")).toBe(false); // 5 digits
    expect(validateFlightNumber("1A304")).toBe(false);   // starts with digit
  });
});

describe("Fetch Flight Data", () => {
  beforeEach(() => {
    // Mock the global fetch for each test
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("returns correct fields for BA304 (British Airways)", async () => {
    // We don't test status or times because they're variable.
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        data: [
          {
            flight: { iata: "BA304" },
            airline: { name: "British Airways" },
            departure: { airport: "Heathrow" },
            arrival: { airport: "Charles De Gaulle" },
            flight_status: "scheduled"
          }
        ]
      })
    });

    const result = await fetchFlightData("BA304");
    expect(result.airline.name).toBe("British Airways");
    expect(result.flight.iata).toBe("BA304");
    expect(result.departure.airport).toBe("Heathrow");
    expect(result.arrival.airport).toBe("Charles De Gaulle");
  });

  test("returns null if flight data not found", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: [] })
    });

    const result = await fetchFlightData("FAKE123");
    expect(result).toBeNull();
  });

  test("throws error if response is not ok", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => ({})
    });

    await expect(fetchFlightData("BA304")).rejects.toThrow(
      "Network response was not ok. Status: 404"
    );
  });
});
