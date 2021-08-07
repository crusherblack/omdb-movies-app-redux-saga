import { anagramsChecker } from "./index";

const words = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];

describe("Testing My Anagram", () => {
  test("Check this function return valid anagram", () => {
    expect(anagramsChecker(words)).toStrictEqual([
      ["kita", "atik", "tika"],
      ["aku", "kua"],
      ["kia"],
      ["makan"],
    ]);
  });
});
