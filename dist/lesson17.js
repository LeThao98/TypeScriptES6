"use strict";
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log('Person is running ...');
    };
    return Person;
}());
var person1 = new Person();
console.log(typeof (person1));
console.log(typeof (Person));
console.log(typeof (person1.run));
console.log(typeof (Person.prototype.run));
console.log(person1.run);
console.log(Person.prototype.run);
//# sourceMappingURL=lesson17.js.map