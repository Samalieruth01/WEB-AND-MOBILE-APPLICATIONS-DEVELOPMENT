// a function that calculates the greatest common divisor (GCD) of two numbers.
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(gcd(56, 98)); // 14