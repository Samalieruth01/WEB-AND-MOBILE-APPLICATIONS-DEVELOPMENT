function toCamelCase(str) {
    return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}

console.log(toCamelCase("hello-world")); // Output: helloWorld
console.log(toCamelCase("hello_world")); // Output: helloWorld
