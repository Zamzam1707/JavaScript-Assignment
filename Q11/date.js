
const now = new Date();
console.log(now.getDate());   
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());

// the numbers of seconds elapsed from January 1, 1970 to now.

var date = new Date();
var ms = date.getTime();
var seconds = Math.floor(ms/1000);
console.log("Seconds since epoch =",seconds);