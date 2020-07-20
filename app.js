var d = new Date();

var dWeek = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY'
];

var weekQ = [
    'Holly Mass',
    'Versity Off',
    'St. Antony Prayer',
    'Day of Birth',
    'Half Day',
    'Hollyday',
    'Day of Working'
];
var day1 = dWeek[d.getDay()];
document.getElementById('dayofWeek').innerHTML = day1;

var week1 = weekQ[d.getDay()];
document.getElementById('quotaofWeek').innerHTML = week1
console.log(week1);