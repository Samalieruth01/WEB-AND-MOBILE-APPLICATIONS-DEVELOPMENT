// a function that merges two arrays and removes any duplicate values.
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(mergeArrays([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]