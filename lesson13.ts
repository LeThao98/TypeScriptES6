// boc tach array

var employees = ['A','B','C'];

let [,,emp1] = employees;

let [emp2,...emp3] = employees;

console.log(emp1);
console.log(emp2);
console.log(emp3);