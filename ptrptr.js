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


