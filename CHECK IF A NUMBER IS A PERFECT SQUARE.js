function isPerfectSquare(num) {
    return Number.isInteger(Math.sqrt(num));
}

console.log(isPerfectSquare(16)); // Output: true
console.log(isPerfectSquare(15)); // Output: false
