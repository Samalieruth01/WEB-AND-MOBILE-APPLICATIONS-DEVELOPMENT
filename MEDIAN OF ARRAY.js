function median(arr) {
    arr.sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}

let numbers = [1, 3, 4, 2, 5];
console.log(median(numbers)); // Output: 3
