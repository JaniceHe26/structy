/** 1961. Check If String Is a Prefix of Array E 53.5%
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {


  let index = 0;
  let startIndexInSubStr = 0;

  while (index < words.length) {
      if (startIndexInSubStr > s.length) {
          return false;
      }

      if (startIndexInSubStr === s.length) {
          return true;
      } 

      //i === i, we want to look at the next word and and the next substr start length
      if (words[index] !== s.substring(startIndexInSubStr, startIndexInSubStr + words[index].length)) {   
          return false;
      }
      startIndexInSubStr += words[index].length;
      index++;
  }



  if (startIndexInSubStr === s.length) {
      return true;
  } 
  
  return false;
};


