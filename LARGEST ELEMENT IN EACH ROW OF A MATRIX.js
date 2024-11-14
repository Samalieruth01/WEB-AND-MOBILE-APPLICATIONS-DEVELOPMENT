function largestInEachRow(matrix) {
    return matrix.map(row => Math.max(...row));
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(largestInEachRow(matrix)); // Output: [3, 6, 9]
