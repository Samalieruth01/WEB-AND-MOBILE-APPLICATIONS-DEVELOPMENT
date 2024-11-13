function isValidPhoneNumber(phoneNumber) {
    const regex = /^\d{3}-\d{3}-\d{4}$/;
    return regex.test(phoneNumber);
}

console.log(isValidPhoneNumber("123-456-7890")); // Output: true
console.log(isValidPhoneNumber("1234567890")); // Output: false
