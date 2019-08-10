//let keyword
function greetPerson2(name: string) {
  let greet;
  if (name === "Chandler") {
    greet = "Hello Chanlder";
  } else {
    greet = "Hi there";
  }
  console.log(greet);
}
greetPerson2("Chandler");

var a = 1;
let b = 2;

if (a === 1) {
 var a = 3;
 let b = 4;
}

console.log(a);
console.log(b);
