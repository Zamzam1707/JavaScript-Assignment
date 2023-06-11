const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const arr= ages.sort();
console.log(arr);

const minage = Math.min(...arr);

console.log(minage);

const maxage = Math.max(...arr);
console.log(maxage);


const median = ages [Math.floor (ages.length/2)];
console.log(median);

//for average
var sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
  
const average= (sum/arr.length);
console.log(average);
  

//ranges
const range1 = arr.indexOf(19);
const range2 = arr.lastIndexOf(26);

const range = (range2 - range1);
console.log(range);

//abs method
const num1= console.log(minage/arr.length); 
const num2= console.log(maxage/arr.length);

console.log(Math.abs(2.6-1.9));
if (1.9<2.6) {
    console.log(Math.abs(2.6-1.9));
} else {
    console.log(Math.abs(1.9-2.6));
}