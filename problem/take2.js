const wordReconstruction = (arr, str) => {
  if (!arr || !str) {
    return [];
  }
  const totalSolutions = [];

  const dfs = (ind, currentSent) => {
    if (ind == str.length) {
      totalSolutions.push(currentSent);
      return;
    }
    arr.forEach((word) => {
      if (str.slice(ind).startsWith(word)) {
        const currentCopy = [...currentSent];
        currentCopy.push(word);
        return dfs(ind + word.length, currentCopy);
      }
    });
  };

  dfs(0, []);

  //   if (totalSolutions.length) {
  //     const randomIndex = Math.floor(Math.random() * totalSolutions.length);
  //     return totalSolutions[randomIndex];
  //   }
  return totalSolutions;
};

module.exports = wordReconstruction;
