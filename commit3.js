//a function that takes an array of numbers and returns the largest number
function findLargestNumber(numbers) {
  return Math.max(...numbers);
}
console.log(findLargestNumber([1, 5, 3, 9, 2])); // 9