import { pickOppositeChoice, pickRandomChoice, determineWinner } from "./gameHelpers";
const choices = ["🗿", "🪓", "🌳"]; // 🚽

describe("pickOppositeChoice", () => {
  it("should pick the opposite of the player choice", () => {
    const winningMatch = {
      "🗿": "🌳",
      "🌳": "🪓",
      "🪓": "🗿",
    };

    for (const key in winningMatch) {
      const result = pickOppositeChoice(key);
      expect(result).toBe(winningMatch[key]);
    }
  });
  it("should throw an error if the player doesn't pick a valid choice", () => {
    const stuffThatWillMakeMyFunctionMad = ["🚽", undefined, 0, []];

    for (const badThing of stuffThatWillMakeMyFunctionMad) {
      const crashyFunction = () => pickOppositeChoice(badThing);

      expect(crashyFunction).toThrow();
    }
  });
});

describe("pickRandomChoice", () => {
  it("should return one of the valid choices", () => {
    const choices = ["🗿", "🪓", "🌳"];

    // CANNOT TEST RANDOMNESS
    // Blender, Random generator
    // Random generated from a seed

    const moaiSeed = 0.4156232155221622;
    const axeSeed = 0.4475492978643789;
    const treeSeed = 0.821382245722313;

    expect(pickRandomChoice(moaiSeed)).toBe("🗿");
  });
});

describe("determineWinner", () => {
  xit("", () => {
    // ...
  });
});
