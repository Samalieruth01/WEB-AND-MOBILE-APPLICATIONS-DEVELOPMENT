function setToArray(set) {
    return Array.from(set);
}

let mySet = new Set([1, 2, 3, 4, 5]);
console.log(setToArray(mySet)); // Output: [1, 2, 3, 4, 5]
