/** 2278. Percentage of Letter in String E 73.9%
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
  // const wordMap = new Map();

  // s.split('').forEach(char => {
  //     wordMap.has(char) ? wordMap.set(char, wordMap.get(char) + 1) : wordMap.set(char, 1);
  // });

  
  // if (!wordMap.has(letter)) {
  //     return 0;
  // } else {
  //    return Math.floor(wordMap.get(letter) / s.length * 100);
  // }

  let count = 0;

  for (const char of s) {
      if (char === letter) {
          count += 1;
      }
  }

  return Math.floor(count / s.length * 100);
};
