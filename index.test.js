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