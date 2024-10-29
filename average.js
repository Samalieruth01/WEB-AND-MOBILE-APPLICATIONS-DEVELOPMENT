//a function that calculates the average of numbers
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
  let numbers = [10, 20, 30, 40, 50];
let average = calculateAverage(numbers);
console.log("The average is: " + average);