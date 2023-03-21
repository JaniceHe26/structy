/** 1160. Find Words That Can Be Formed by Characters E 67.5%
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  const charMap = mapWord(chars);
  console.log(charMap);

  let count = 0;

  words.forEach((word) => {
      let tempMap = mapWord(word);
      let isValid = true;
      for (const [key,value] of tempMap) {
          if (!charMap.has(key) || charMap.get(key) < value) {
              isValid = false;
          }
      }

      if (isValid) {
          count += word.length;
      }
  });

  return count;

};

const mapWord = (word) => {
  const wordMap = new Map();

  word.split('').forEach((char) =>{
      wordMap.has(char) ? wordMap.set(char, wordMap.get(char) + 1) : wordMap.set(char, 1);
  })

  return wordMap;
}
