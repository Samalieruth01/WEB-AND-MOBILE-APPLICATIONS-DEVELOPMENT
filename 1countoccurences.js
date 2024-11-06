// a function to count the number of times a specific character appears in a strin

function countCharacterOccurrences(str, char) {
  return str.split(char).length - 1;
}

console.log(countCharacterOccurrences("hello world", 'o')); // 2