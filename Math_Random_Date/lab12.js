let dateStr = '2024-03-17T14:48:00';
let date = new Date(dateStr);
console.log(date);
console.log(date.getFullYear()); // 2024

let now = Date.now();
let tomorrow = now + 24*60*60*1000;

let date1 = new Date(tomorrow);
console.log(date1);

