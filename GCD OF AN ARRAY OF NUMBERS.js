function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
}

function gcdOfArray(arr) {
    return arr.reduce((a, b) => gcd(a, b));
}

let numbers = [48, 18, 24];
console.log(gcdOfArray(numbers)); // Output: 6
