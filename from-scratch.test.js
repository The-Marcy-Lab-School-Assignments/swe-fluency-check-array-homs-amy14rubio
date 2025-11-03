const { printEveryWord } = require("./from-scratch");

describe("printEveryWord", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("should log each item in the array", () => {
    const sample = ["dog", "blueberry", "alabama", "earth", "football"];
    printEveryWord(sample);

    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy).toHaveBeenCalledWith("dog");
    expect(consoleSpy).toHaveBeenCalledWith("blueberry");
    expect(consoleSpy).toHaveBeenCalledWith("alabama");
    expect(consoleSpy).toHaveBeenCalledWith("earth");
    expect(consoleSpy).toHaveBeenCalledWith("football");
  });
});
