const wordReconstruction = require("../problem/take2");

test("All params undefined expected empty array response", () => {
  const wordsSet = undefined;
  const wordString = undefined;
  expect(wordReconstruction(wordsSet, wordString)).toStrictEqual([]);
});

test("All params null expected empty array response", () => {
  const wordsSet = null;
  const wordString = null;
  expect(wordReconstruction(wordsSet, wordString)).toStrictEqual([]);
});

test("WordsSet undefined expected empty array response", () => {
  const wordsSet = undefined;
  const wordString = "thequickbrownfox";
  expect(wordReconstruction(wordsSet, wordString)).toStrictEqual([]);
});

test("wordString undefined expected empty array response", () => {
  const wordsSet = [];
  const wordString = undefined;
  expect(wordReconstruction(wordsSet, wordString)).toStrictEqual([]);
});

test("WordsSet null expected empty array response", () => {
  const wordsSet = null;
  const wordString = "thequickbrownfox";
  expect(wordReconstruction(wordsSet, wordString)).toStrictEqual([]);
});

test("wordString null expected empty array response", () => {
  const wordsSet = [];
  const wordString = null;
  expect(wordReconstruction(wordsSet, wordString)).toStrictEqual([]);
});

test("WordsSet empty expected empty array response", () => {
  const wordsSet = [];
  const wordString = "thequickbrownfox";
  expect(wordReconstruction(wordsSet, wordString)).toStrictEqual([]);
});

test("wordString empty expected empty array response", () => {
  const wordsSet = ["quick", "brown", "the", "fox"];
  const wordString = "";
  expect(wordReconstruction(wordsSet, wordString)).toStrictEqual([]);
});

test("First set of data", () => {
  const wordsSet = ["quick", "brown", "the", "fox"];
  const wordString = "thequickbrownfox";
  expect(JSON.stringify(wordReconstruction(wordsSet, wordString))).toMatch(
    JSON.stringify(["the", "quick", "brown", "fox"])
  );
});

test("Second set of data", () => {
  const wordsSet = ["bed", "bath", "bedbath", "and", "beyond"];
  const wordString = "bedbathandbeyond";
  expect(JSON.stringify(wordReconstruction(wordsSet, wordString))).toMatch(
    JSON.stringify(["bed", "bath", "and", "beyond"])
  );
  expect(JSON.stringify(wordReconstruction(wordsSet, wordString))).toMatch(
    JSON.stringify(["bedbath", "and", "beyond"])
  );
});

test("Wrong set of data expected empty array", () => {
  const wordsSet = ["quick", "brown", "the", "fox"];
  const wordString = "thequickbrownfoxasdasd";
  expect(wordReconstruction(wordsSet, wordString)).toStrictEqual([]);
});
