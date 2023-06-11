let numbers = [];
for (let i = 0; i <= 100; i++) {
    numbers.push(i);
}


const newarr = [];

numbers.forEach(number => {
  if (number % 2 === 0) {
    newarr.push(number);
  }
});

console.log(newarr);


const oddarray = [];

numbers.forEach(number => {
  if (number % 2 !== 0) {
    oddarray.push(number);
  }
});

console.log(oddarray);