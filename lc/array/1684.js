/** 1684. Count the Number of Consistent Strings
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {


  // const allowedMap = new Map();
  const allowedSet = new Set(allowed.split(''));
  let count = 0;

  // allowed.split('').forEach((char) => {
  //     allowedMap.has(char) ? allowedMap.set(char, allowedMap.get(char) + 1) : allowedMap.set(char, 1);
  // });


  // words.forEach((word) => {
  //     if (word.split('').every(c => allowedSet.has(c))) {
  //         count++;
  //     };  
  // })

  for (let i = 0; i < words.length; i++) {
      const word = words[i].split('');
      let isValid = word.length > 0;
      
      for (let j = 0; j < word.length; j++) { // every loop
          if (!allowedSet.has(word[j])) { // if check is the callback fn
              isValid = false;
              break;
          }
      }
      // isValid is equal to the return value of .every
      if (isValid) count++;
  }

  
  return count;
};


