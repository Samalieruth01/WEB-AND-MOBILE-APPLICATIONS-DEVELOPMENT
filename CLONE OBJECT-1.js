function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

let original = { name: "Alice", age: 25 };
let clone = deepClone(original);
console.log(clone); // Output: { name: "Alice", age: 25 }
