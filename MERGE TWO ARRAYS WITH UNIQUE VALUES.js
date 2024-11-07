function mergeUnique(arr1, arr2) {
    return Array.from(new Set([...arr1, ...arr2]));
}

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
console.log(mergeUnique(array1, array2)); // Output: [1, 2, 3, 4, 5]
