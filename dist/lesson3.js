"use strict";
//hoisting
function greetPerson1(name) {
    if (name === "Chandler") {
        greet = "Hello Chanlder";
    }
    else {
        greet = "Hi there";
    }
    console.log(greet);
    var greet;
}
greetPerson1("Chandler");
//# sourceMappingURL=lesson3.js.map