/** 1796. Second Largest Digit in a String E 49.3%
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
  const numSet = new Set();
  
  const sArr = s.split('');

  sArr.forEach((char) => {
      if (!isNaN(char)) {
          numSet.add(char);
      }
  })


  const sortedArr = [...numSet].sort((a, b) => a - b);

  if (sortedArr.length <= 1) return -1;

  return sortedArr[sortedArr.length - 2];
  
};
