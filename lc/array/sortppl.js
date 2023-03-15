/** 2418. Sort the People
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    
  // let heightMap = new Map();
  // let sortedName = [];

  // names.forEach((name, index) => {
  //     heightMap.set(heights[index], name);
  // })

  // heightMap = [...heightMap.entries()].sort((a, b) => b[0] - a[0]);

  // for (const [_, value] of heightMap) {
  //     sortedName.push(value);
  // }
  
  // return sortedName;

  const heightInfo = [];
  // const sortedName = [];

  names.forEach((name, index) => {
      heightInfo.push([name, heights[index]]);
  });

  const sortedHeightInfo = heightInfo.sort((a, b) => b[1] - a[1]);

  // for (const [name, _] of sortedHeightInfo) {
  //     sortedName.push(name);
  // }

  return sortedHeightInfo.map(([name]) => name);
  
  // return sortedName;
};
