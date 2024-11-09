function jsonStringToObject(jsonString) {
    return JSON.parse(jsonString);
}

let jsonString = '{"name": "Alice", "age": 25}';
let obj = jsonStringToObject(jsonString);
console.log(obj); // Output: { name: "Alice", age: 25 }
