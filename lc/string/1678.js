/** 1678. Goal Parser Interpretation E 86.6%
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  let str = '';
  let ptr = 0;

  while (ptr < command.length) {
      if (command[ptr] === 'G') {
          str += 'G';
          ptr++;
      } 

      if (command[ptr] === '(') {
          if (command[ptr + 1] === ')') {
              str += 'o';
              ptr += 2;
          } else {
              str += 'al';
              ptr += 4;
          }
      }
  }

  return str;
};
