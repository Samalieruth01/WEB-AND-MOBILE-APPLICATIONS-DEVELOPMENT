//a function that capitalizes the first letter of each word in a sentence

function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeWords("hello world")); // "Hello World"