// a function to check if a number is an Armstrong number.

function isArmstrongNumber(num) {
  const digits = num.toString().split('');
  const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), digits.length), 0);
  return sum === num;
}

console.log(isArmstrongNumber(153)); // true