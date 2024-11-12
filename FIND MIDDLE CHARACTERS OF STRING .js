function getMiddleCharacter(str) {
    let len = str.length;
    let middle = Math.floor(len / 2);
    if (len % 2 === 0) {
        return str[middle - 1] + str[middle];
    } else {
        return str[middle];
    }
}

console.log(getMiddleCharacter("middle")); // Output: "dd"
console.log(getMiddleCharacter("test")); // Output: "es"
