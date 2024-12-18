function romanToInteger(roman) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        let current = romanMap[roman[i]];
        let next = romanMap[roman[i + 1]];
        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }
    return result;
}

console.log(romanToInteger("MCMXCIV")); // Output: 1994
