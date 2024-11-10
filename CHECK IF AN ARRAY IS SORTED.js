function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

let numbers = [1, 2, 3, 4, 5];
let unsorted = [5, 3, 4, 2, 1];
console.log(isSorted(numbers)); // Output: true
console.log(isSorted(unsorted)); // Output: false
