function isNumeric(str) {
    return /^\d+$/.test(str);
}

console.log(isNumeric("12345")); // Output: true
console.log(isNumeric("123a5")); // Output: false
