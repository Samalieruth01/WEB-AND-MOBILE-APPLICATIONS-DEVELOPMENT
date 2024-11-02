Merge Two Arrays: Write a function that merges two arrays and removes any duplicate values.

javascript

Copy
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(mergeArrays([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]
Count Vowels in a String: Write a function that counts the number of vowels in a given string.

javascript

Copy
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello world")); // 3
Generate Random Hex Color Code: Write a function that generates a random hex color code.

javascript

Copy
function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

console.log(getRandomHexColor()); // e.g., "#3e2f1b"
Sum of Digits: Write a function that calculates the sum of the digits of a number.

javascript

Copy
function sumOfDigits(num) {
  return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(sumOfDigits(1234)); // 10
Capitalize First Letter: Write a function that capitalizes the first letter of each word in a string.

javascript

Copy
function capitalizeFirstLetter(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeFirstLetter("hello world")); // "Hello World"
Calculate the GCD: Write a function that calculates the greatest common divisor (GCD) of two numbers.

javascript

Copy
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(gcd(56, 98)); // 14
Check if a Number is an Armstrong Number: Write a function to check if a number is an Armstrong number.

javascript

Copy
function isArmstrongNumber(num) {
  const digits = num.toString().split('');
  const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), digits.length), 0);
  return sum === num;
}

console.log(isArmstrongNumber(153)); // true
Hopefully, these give you a wider variety of JavaScript exercises to tackle! 🚀 What's next?




You
more choices
Copilot
Of course! Here are even more JavaScript coding exercises for you:

Convert Celsius to Fahrenheit: Write a function to convert temperatures from Celsius to Fahrenheit.

javascript

Copy
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(0)); // 32
Flatten a Nested Array: Write a function that flattens a nested array (an array of arrays) into a single array.

javascript

Copy
function flattenArray(arr) {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
Find the Longest Word in a String: Write a function to find the longest word in a given string.

javascript

Copy
function findLongestWord(str) {
  return str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // "jumps"
Count Occurrences of a Character: Write a function to count the number of times a specific character appears in a string.

javascript

Copy
function countCharacterOccurrences(str, char) {
  return str.split(char).length - 1;
}

console.log(countCharacterOccurrences("hello world", 'o')); // 2
Check for Anagrams: Write a function to check if two strings are anagrams (contain the same characters in a different order).

javascript

Copy
function areAnagrams(str1, str2) {
  const sortStr = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  return sortStr(str1) === sortStr(str2);
}

console.log(areAnagrams("listen", "silent")); // true
Generate Random String: Write a function that generates a random string of a given length.

javascript

Copy
function generateRandomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

console.log(generateRandomString(10)); // e.g., "aBcDeFgHiJ"
Capitalize Each Word in a Sentence: Write a function that capitalizes the first letter of each word in a sentence.

javascript

Copy
function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeWords("hello world")); // "Hello World"
Find Duplicate Values in an Array: Write a function that finds all the duplicate values in an array.

javascript

Copy
function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();
  for (let item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }
  return Array.from(duplicates);
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 5])); // [2, 5]
Sort an Array of Objects: Write a function that sorts an array of objects by a given property.

javascript

Copy
function sortByProperty(arr, property) {
  return arr.sort((a, b) => (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0));
}

const data = [
  {name: "John", age: 30},
  {name: "Jane", age: 25},
  {name: "Bob", age: 35}
];

console.log(sortByProperty(data, 'age')); // [{name: "Jane", age: 25}, {name: "John", age: 30}, {name: "Bob", age: 35}]
Filter Array by Property Value: Write a function that filters an array of objects based on a specific property value.

javascript

Copy
function filterByProperty(arr, property, value) {
  return arr.filter(item => item[property] === value);
}

const data = [
  {name: "John", age: 30},
  {name: "Jane", age: 25},
  {name: "Bob", age: 30}
];

console.log(filterByProperty(data, 'age', 30)); // [{name: "John", age: