/** 2085. Count Common Words With One Occurrence
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
  const wordsMap1 = new Map();
  const wordsMap2 = new Map();
  let count = 0;

  words1.forEach((word) => {
      !wordsMap1.has(word) ? wordsMap1.set(word, 1) : wordsMap1.set(word, wordsMap1.get(word) + 1);
  })

  words2.forEach((word) => {
      !wordsMap2.has(word) ? wordsMap2.set(word, 1) : wordsMap2.set(word, wordsMap2.get(word) + 1);
  })

  for (const [key, value] of wordsMap1) {
      if (value === 1 && wordsMap2.has(key) && wordsMap2.get(key) === 1) {
          count += 1;
      }
  }

  return count;
};
