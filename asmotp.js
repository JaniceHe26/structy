//uncompress
const uncompress = (s) => {
  // todo
  let start = 0;
  let end = 0;
  // let uncompressStr = ''; //change into an array
  let uncompressStr = [];
  
  while (end < s.length) {
    if (!isNaN(s[end])) {
      end+=1;
    } else {
      let tempVal = s.slice(start, end);
      tempVal = Number(tempVal);
      for (let count = 0; count < tempVal; count+=1) {
        // uncompressStr += s[end]; //concatation is o(n);
        uncompressStr.push(s[end]);
      }
      end+=1;
      console.log(end);
      // uncompressStr += addChar(tempVal, s[end]);
      // console.log(uncompressStr);
      start = end; 
    }
   
  }
  return uncompressStr.join('');
};

function addChar (num, c) {
    let str = '';
    
    for (let i = 0; i < num; i++) {
      str += c;
    }
    
    return str;
}
  

// console.log(uncompress("127y"));
console.log(uncompress("3n12e2z"));
// console.log(uncompress("2t3o11g2s"));


module.exports = {
  uncompress,
};

//compress

const compress = (s) => {
  // todo
  let start = 0; //start of consective streak
  let end = 0; //end of consective streak
  let compressStr = '';
  
  while(end <= s.length) {
    if (s[start] === s[end]) {
      end+=1;
    } else {
      let count = end - start;
      if (count === 1) {
        compressStr += s[start];
      } else {
        compressStr += count + s[start];  
      }
      start = end;
    }
 }

  return compressStr;
}

// function buildArr(num, value) {
//   let charArr = '';
//   for (let i = 0; i < num; i+=1) {
//     charArr += value;
//   }
//   return charArr;
// }



console.log(compress('ppoppppp'))

module.exports = {
  compress,
};

//anagrams
const anagrams = (s1, s2) => {
  // todo
  if (s1.length !== s2.length) return false;
  
  let s1CharMap = new Map();
  
  for (const char of s1) {
    s1CharMap.has(char) ? s1CharMap.set(char, s1CharMap.get(char) + 1) : s1CharMap.set(char, 1);
  }
  
  for (const char of s2) {
    s1CharMap.has(char) ? s1CharMap.set(char, s1CharMap.get(char) - 1) : s1CharMap.set(char, 1);
  }
  
  for (const [key, value] of s1CharMap) {
    if (value !== 0) return false;
  }
  
  return true;
};

console.log(anagrams('monkeyswrite', 'newyorktimes'));
console.log(anagrams('paper', 'reapa'))

module.exports = {
  anagrams,
};

//most freq
const mostFrequentChar = (s) => {
  // todo
  if (s.length < 1) return s;
  
  let charMap = new Map();
  
  for (const char of s) {
    if (!charMap.has(char)) {
      charMap.set(char, 1);
    } else {
      charMap.set(char, charMap.get(char) + 1)
    }
  }
  
  // let tracker = [maxVal, valKey];
  let [maxVal, maxKey] = [0, null];
  
  for (const [key, value] of charMap) {
    if (maxVal < value) {
      maxVal = value;
      maxKey = key;
    }
  }
  
  return maxKey;
};

mostFrequentChar('bookeeper'); // -> 'e'

module.exports = {
  mostFrequentChar,
};

//pair sum
const pairSum = (numbers, targetSum) => {
  // todo
  let previousNum = new Map();
  
  for (let i = 0; i < numbers.length; i+=1) {
    const compliment = targetSum - numbers[i]; //5
    if (previousNum.has(compliment)) {
      return [previousNum.get(compliment), i];
    }
    
    previousNum.set(numbers[i], i);
  }
  
  return [-1, -1];
};


module.exports = {
  pairSum,
};


//pair product
const pairProduct = (numbers, targetProduct) => {
  // todo
  const previousNum = new Map();
  
  for (let i = 0; i < numbers.length; i+=1) {
    const product = targetProduct / numbers[i];
    
    if (previousNum.has(product)) {
      return [previousNum.get(product), i];
    }
    
    previousNum.set(numbers[i], i);
  }
  
  return [-1, -1];
};

module.exports = {
  pairProduct,
};

//intersection
const intersection = (a, b) => {
  // todo
  
  let numMap = new Set();
  let intersectionArr = [];
  
  for (const num of a) {
    numMap.add(num);
  }
  
  for (const num of b) {
    if (numMap.has(num)) {
      intersectionArr.push(num);
    }
  }
  
  return intersectionArr;
};


console.log(intersection([4,2,1,6], [3,6,9,2,10]));

module.exports = {
  intersection,
};

//five head
const fiveSort = (nums) => {
  // todo
  let start = 0;
  let end = nums.length - 1; 
  
  while (start !== end) {
    if (nums[end] === 5) {
      end-=1;
    } else if (nums[start] === 5) {
      // [nums[start], nums[end]] = [nums[end], nums[start]];
      let temp = nums[end];
      nums[end] = nums[start];
      nums[start] = temp;
      start += 1;
    } else {
      start += 1; //if start is not a 5
    }
  }
  
  return nums;
};

console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]));

module.exports = {
  fiveSort,
};


