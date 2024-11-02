//a function that checks if a given string is a palindrome.

function isPalindrome(str) {
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true