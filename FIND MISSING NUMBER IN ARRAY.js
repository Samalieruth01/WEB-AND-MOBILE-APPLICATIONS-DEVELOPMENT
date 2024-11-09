function findMissingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

let numbers = [1, 2, 3, 5];
console.log(findMissingNumber(numbers, 5)); // Output: 4
