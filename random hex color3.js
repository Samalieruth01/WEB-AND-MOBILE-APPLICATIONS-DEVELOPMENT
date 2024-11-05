// a function that generates a random hex color code.

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

console.log(getRandomHexColor()); // e.g., "#3e2f1b"