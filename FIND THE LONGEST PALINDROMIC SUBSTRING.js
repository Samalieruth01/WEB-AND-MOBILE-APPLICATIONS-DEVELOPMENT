function longestPalindromicSubstring(str) {
    let maxLength = 0;
    let maxSubstring = '';

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substring =