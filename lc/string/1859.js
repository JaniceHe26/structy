/** 1859. Sorting the Sentence E 84.1%
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  const splitS = s.split(' ');
  const sortedStr =  splitS.sort((a, b) => a[a.length - 1] - b[b.length - 1]);

  let str = '';

  sortedStr.forEach((word) => {
      str += word.substring(0,word.length - 1) + ' ';
  })

  return str.trim();
};


/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  const splitS = s.split(' ');
  return splitS
          .sort((a, b) => a[a.length - 1] - b[b.length - 1])
          .map((word) => word.substring(0, word.length - 1))
          .join(' ');

};

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
  return s
          .split(' ')
          .sort((a, b) => a[a.length - 1] - b[b.length - 1])
          .map((word) => word.substring(0, word.length - 1))
          .join(' ');

};
