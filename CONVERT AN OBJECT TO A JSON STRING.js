function objectToJsonString(obj) {
    return JSON.stringify(obj);
}

let obj = { name: "Alice", age: 25 };
let jsonString = objectToJsonString(obj);
console.log(jsonString); // Output: '{"name":"Alice","age":25}'
