/** 2000. Reverse Prefix of Word
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
  let endIndex = word.indexOf(ch);
  let start = 0; 
  let arr = word.split('');

  while (start < endIndex) {
      let temp = arr[start]; 
      arr[start] = arr[endIndex];
      arr[endIndex] = temp;
      start++;
      endIndex--;
  }

  return arr.join('');
};

/** 1768. Merge Strings Alternately
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let startWord1 = 0;
  let startWord2 = 0;
  const results = [];

  while (startWord1 < word1.length && startWord2 < word2.length) {
      results.push(word1[startWord1]); 
      results.push(word2[startWord2]);
      startWord1 += 1;
      startWord2 += 1;
  }

  if (startWord1 < word1.length) {
      results.push(word1.slice(startWord1, word1.length)); 
  } else {
      results.push(word2.slice(startWord2, word2.length));
  }
  
  //while loop using ||, undefined does not get push by array.push(); and does not need second part
  
  return results.join('');
};
