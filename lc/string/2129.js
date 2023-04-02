/** 2129. Capitalize the Title E 62.2%
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
  const titleArr = title.split(' ');

  const capitalized = titleArr.map((word, index) => {
      return transformWord(word);
  })

  return capitalized.join(' ');
};


const transformWord = (word) => {
  let transformed = [];

  if (word.length <= 2) {
      for (const char of word) {
          transformed.push(char.toLowerCase());
      }
  } else {
      transformed.push(word[0].toUpperCase());
      for (let i = 1; i < word.length; i++) {
          transformed.push(word[i].toLowerCase());
      }
  }

  return transformed.join('');
}
