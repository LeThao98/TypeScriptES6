"use strict";
// methods in class
var Person18 = /** @class */ (function () {
    function Person18(ls18_name) {
        this.ls18_name = ls18_name;
        console.log(this.ls18_name + " constructor.");
    }
    Person18.talk = function () {
        console.log('This static method is taik');
    };
    Person18.prototype.run18 = function () {
        console.log('Person is running....');
    };
    return Person18;
}());
var p = new Person18("Thao");
p.run18();
Person18.talk();
//# sourceMappingURL=lesson18.js.map