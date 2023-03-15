/** 2255. Count Prefixes of a Given String E 72.9%
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  const wordSet = prefix(s);
  let count = 0;

  words.forEach((word) => {
    if (wordSet.has(word)) {
      count += 1;
    }
  });

  return count;
};


const prefix = (word) => {
  const wordSet = new Set();

  let start = 0;
  let end = 1;

  while (end <= word.length) {
    let temp = '';

    for (let i = start; i < end; i++) {
      temp += word[i];
    }

    wordSet.add(temp);
    temp = '';
    end++
  }

  return wordSet;
}

console.log(prefix('janice'));
