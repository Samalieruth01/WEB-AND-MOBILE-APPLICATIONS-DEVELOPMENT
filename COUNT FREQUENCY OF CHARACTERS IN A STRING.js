function characterFrequency(str) {
    let frequency = {};
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}

console.log(characterFrequency("hello world")); 
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
