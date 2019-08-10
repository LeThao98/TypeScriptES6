class Person{
   run(){
       console.log('Person is running ...');
   }
}

let person1 = new Person();
console.log(typeof(person1));
console.log(typeof(Person));
console.log(typeof(person1.run));
console.log(typeof(Person.prototype.run));
console.log(person1.run);
console.log(Person.prototype.run);
