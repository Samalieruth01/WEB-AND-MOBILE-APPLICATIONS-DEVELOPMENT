function maxDifference(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return max - min;
}

let numbers = [1, 2, 3, 4, 5];
console.log(maxDifference(numbers)); // Output: 4
