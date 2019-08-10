"use strict";
//default value for parameter of funciton
var rate = function () { return 1.4; };
var getBonus = function (value, tax, salary) {
    if (value === void 0) { value = 1; }
    if (tax === void 0) { tax = 3; }
    if (salary === void 0) { salary = value * rate(); }
    console.log(value + tax + " || arguments: " + arguments.length + " || salary: " + salary);
};
getBonus();
getBonus(10, 20);
getBonus(5);
getBonus(undefined, 9);
getBonus(3, 9, 6);
//# sourceMappingURL=lesson10.js.map