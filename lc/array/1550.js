/** 1550. Three Consecutive Odds E 63.5%
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  if (arr.length < 3) return false;

  let count = 0; 
  let ptr = 0;

  while (ptr < arr.length) {
      if (arr[ptr] % 2 !== 0) {
          count++;
      } else {
          count = 0;
      }
      ptr++;

      if (count === 3) {
          return true;
      }
  }

  return false;
};
