function distanceBetweenPoints(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

console.log(distanceBetweenPoints(0, 0, 3, 4)); // Output: 5
