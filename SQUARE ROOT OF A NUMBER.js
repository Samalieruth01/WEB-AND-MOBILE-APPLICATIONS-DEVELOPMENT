function sqrtBabylonian(n, guess = n / 2) {
    if (n < 0) return NaN;
    let nextGuess = (guess + n / guess) / 2;
    if (Math.abs(guess - nextGuess) < 0.000001) {
        return nextGuess;
    }
    return sqrtBabylonian(n, nextGuess);
}

console.log(sqrtBabylonian(16)); // Output: 4
console.log(sqrtBabylonian(2)); // Output: 1.414213562373095
