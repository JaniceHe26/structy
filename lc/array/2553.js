/** 2553. Separate the Digits in an Array
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    
  return nums.map((num) => {
      let number = num;
      const arr = [];

      while(number > 0) {
          const rem = number % 10;
          arr.push(rem);
          number = Math.floor(number / 10);
      }

      return arr.reverse();

  }).flat();


  // const stringArr = nums.map((num) => num.toString());

  // const digits = [];

  // stringArr.forEach((num) => {
  //     let char = num.split('');
  //     digits.push(char);
  // })

  // const flattenArr = digits.flat();

  // return flattenArr.map((num) => parseInt(num));
};
