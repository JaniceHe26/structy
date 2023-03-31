/** 645. Set Mismatch
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const numsMap = new Map();
  let duplicate;
  let missingNumber;
  
  for (let i = 1; i <= nums.length; ++i) {
      numsMap.set(i, 0);
  } //n
       
      
  nums.forEach(num => {
      numsMap.set(num, numsMap.get(num) + 1);
  }) //n
  
  
  
  for (let [key,value] of numsMap.entries()) {
      if (value === 0) {
          missingNumber = key;
      } else if (value === 2) {
          duplicate = key;
      }
  } //n
  
  return [duplicate, missingNumber];

};

