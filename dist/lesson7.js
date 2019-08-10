"use strict";
//basic type
var isDone = false;
console.log(isDone);
var decimal = 6;
console.log(decimal);
var color = "blue";
console.log(color);
var sentense = "Hi, The color of today is " + color;
console.log(sentense);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
//# sourceMappingURL=lesson7.js.map