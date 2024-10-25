//a function that filters out negative numbers from an array.

function filterNegativeNumbers(arr) {
  return arr.filter(num => num >= 0);
}

console.log(filterNegativeNumbers([-3, 5, -1, 0, 6, -9])); //[5,0,6] 