const now = new Date();

const year= (now.getFullYear());
const month=(now.getMonth());
const date= (now.getDate());
const hour=(now.getHours());
const min= (now.getMinutes());
const sec = now.getSeconds();
const milisec = now.getMilliseconds();

console.log(`${year}-${month}-${date} ${hour}:${min}:${sec}:${milisec}`);

console.log(`${date}-${month}-${year} ${hour}:${min}:${sec}:${milisec}`);