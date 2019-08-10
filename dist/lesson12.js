"use strict";
//spread operator
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    for (var i_1 in colors) {
        console.log(colors[i_1]);
    }
};
var message = "Hi";
var colors = ['Red', 'Green', 'Blue'];
displayColors.apply(void 0, [message].concat(colors));
//# sourceMappingURL=lesson12.js.map