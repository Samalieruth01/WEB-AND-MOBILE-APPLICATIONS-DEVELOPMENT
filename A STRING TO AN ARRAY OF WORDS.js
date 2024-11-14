function stringToWords(str) {
    return str.trim().split(/\s+/);
}

console.log(stringToWords("The quick brown fox jumps over the lazy dog"));
// Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
