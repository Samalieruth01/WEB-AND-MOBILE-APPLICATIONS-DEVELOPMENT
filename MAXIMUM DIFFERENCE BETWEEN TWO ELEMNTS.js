function maxDifference(arr) {
    let minElement = arr[0];
    let maxDiff = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - minElement > maxDiff) {
            maxDiff = arr[i] - minElement;
        }
        if (arr[i] < minElement) {
            minElement = arr[i];
        }
    }
    return maxDiff;
}

let numbers = [7, 1, 5, 3, 6, 4];
console.log(maxDifference(numbers)); // Output: 5 (6 - 1)
