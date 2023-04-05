import { stringToNumber } from "../utils/number"

describe("Number Converter", () => {
  test("Converts 0", () => {
    expect(stringToNumber("0")).toBe(0);
  })
  test("Converts 1000", () => {
    expect(stringToNumber("1000")).toBe(1000);
  })
  test("Converts 1.50", () => {
    expect(stringToNumber("1.50")).toBe(1.50);
  })
  test("Converts text", () => {
    expect(() => { stringToNumber("text") }).toThrowError("text is not a number to be converted.");
  })
})