//a function that flattens a nested array (an array of arrays) into a single array
function flattenArray(arr) {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]