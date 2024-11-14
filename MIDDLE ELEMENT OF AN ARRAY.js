function findMiddleElement(arr) {
    const mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return [arr[mid - 1], arr[mid]];
    }
    return arr[mid];
}

console.log(findMiddleElement([1, 2, 3])); // Output: 2
console.log(findMiddleElement([1, 2, 3, 4])); // Output: [2, 3]
