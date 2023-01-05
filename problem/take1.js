const wordReconstruction = (arr, str) => {
  if (!arr || !str) {
    return [];
  }
  let strCopy = str;
  let wordIndex = [];
  let filteredArr = {};

  wordIndex = arr.map((word) => {
    const index = strCopy.search(word);
    if (index >= 0) {
      strCopy = strCopy.replace(word, "*".repeat(word.length));
    }
    return index;
  });

  wordIndex.map((wordIndex, index) => {
    let wordFound = {};
    if (wordIndex >= 0) {
      wordFound = { [wordIndex]: arr[index] };
    }
    return Object.assign(filteredArr, wordFound);
  });

  if (Object.values(filteredArr).join("") === str)
    return Object.values(filteredArr);
  return [];
};

module.exports = wordReconstruction;
