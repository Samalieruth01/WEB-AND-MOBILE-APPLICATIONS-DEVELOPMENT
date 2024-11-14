function daysBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
    return diffDays;
}

let date1 = new Date('2024-11-01');
let date2 = new Date('2024-11-09');
console.log(daysBetween(date1, date2)); // Output: 8
