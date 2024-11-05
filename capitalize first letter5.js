//a function that capitalizes the first letter of each word in a string.

function capitalizeFirstLetter(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeFirstLetter("hello world")); // "Hello World"