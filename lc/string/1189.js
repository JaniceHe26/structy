/**1189. Maximum Number of Balloons E 61.0%
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  const obj = {
      'b': 1,
      'a': 1,
      'l': 2,
      'o': 2,
      'n': 1,
  };

  const textMap = new Map();

  for (const char of text) { // M (characters in text)
      textMap.has(char) ?
          textMap.set(char, textMap.get(char) + 1)
          : textMap.set(char, 1);
  }
  
  // let count = 0;

  // while (true) { // N (the number of times balloon appears in text)
  //     for (const [key, value] of Object.entries(obj)) { // O(5) -> O(1) object is always size 5.
  //         if (!textMap.has(key) || textMap.get(key) < value) {
  //             return count;
  //         } else {
  //             textMap.set(key, textMap.get(key) - value);
  //         }
  //     }
  //     count++;
  // } 
  
  let lowestTimes = Infinity;
  for (const [key, value] of Object.entries(obj)) { // O(5) -> O(1)
      if (!textMap.has(key)) {
          return 0;
      }

      const letterCount = textMap.get(key);
      const timesCanSpell = Math.floor(letterCount / value);
      if (timesCanSpell < lowestTimes) {
          lowestTimes = timesCanSpell;
      }
  }

  return lowestTimes;
};
