
// triangular pattern
let n = 3;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

// square pattern
let a=3; 
let newstring = "";

for(let i = 0; i < a; i++) { 
  for(let j = 0; j < a; j++) { 
    newstring += "*";
  }
 
  newstring += "\n";
}

console.log(newstring);

// pyramid pattern

let c = 3;
let againstring= "";

for (let i = 0; i <= c; i++) {
 
  for (let j = 1; j <= c - i; j++) {
    againstring= " ";
  }
  
  for (let k = 2; k < 2 * i - 1; k++) {
    againstring += "*";
  }
  againstring += "\n";
}
console.log(againstring);