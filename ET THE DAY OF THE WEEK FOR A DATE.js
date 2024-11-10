function getDayOfWeek(dateString) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date(dateString);
    return days[date.getDay()];
}

console.log(getDayOfWeek("2024-11-06")); // Output: "Wednesday"
