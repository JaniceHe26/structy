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


//917. Reverse Only Letters
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  const regex = /^[A-Za-z]+$/;
  const strArr = s.split('');

  let start = 0;
  let end = strArr.length - 1;

  // while(start < end) {
  //     //if char
  //     if (isAlpha(strArr[start]) && isAlpha(strArr[end])) {
  //         let temp = strArr[start];
  //         strArr[start] = strArr[end];
  //         strArr[end] = temp;
  //         start++;
  //         end--;
  //     } else if (!isAlpha(strArr[start])) {
  //         start++;
  //     } else if (!isAlpha(strArr[end])) {
  //         end--;
  //     }
  //     console.log(start, end);
  // }

  while(start < end) {
      //if char
      if (regex.test(strArr[start]) && regex.test(strArr[end])) {
          let temp = strArr[start];
          strArr[start] = strArr[end];
          strArr[end] = temp;
          start++;
          end--;
      } else if (!regex.test(strArr[start])) {
          start++;
      } else if (!regex.test(strArr[end])) {
          end--;
      }
  }
  return strArr.join('');
  // s.split('').forEach((char) => console.log(regex.test(char)));

};

const isAlpha = (char) => {
  const upperCase = [65,90];
  const lowerCase = [97,122];

  const asciiValue = char.charCodeAt(0);

  return (asciiValue >= upperCase[0] && asciiValue <= upperCase[1]) ||
          (asciiValue >= lowerCase[0] && asciiValue <= lowerCase[1]);
};
