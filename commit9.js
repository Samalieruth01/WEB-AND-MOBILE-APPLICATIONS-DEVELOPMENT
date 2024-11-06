








































// a function that filters an array of objects based on a specific property value.


function filterByProperty(arr, property, value) {
  return arr.filter(item => item[property] === value);
}

const data = [
  {name: "John", age: 30},
  {name: "Jane", age: 25},
  {name: "Bob", age: 30}
];

console.log(filterByProperty(data, 'age', 30)); // [{name: "John", age: