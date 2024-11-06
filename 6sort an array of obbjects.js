// a function that sorts an array of objects by a given property.

function sortByProperty(arr, property) {
  return arr.sort((a, b) => (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0));
}

const data = [
  {name: "John", age: 30},
  {name: "Jane", age: 25},
  {name: "Bob", age: 35}
];

console.log(sortByProperty(data, 'age')); // [{name: "Jane", age: 25}, {name: "John", age: 30}, {name: "Bob", age: 35}]