"use strict";
//this keyword
// var employee = {
//   id:1,
//   greet: function() {
//     var self = this
//     setTimeout(function() {
//       console.log(self.id);
//     }, 1000);
//   }
// };
var employee = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.id); }, 1000);
    }
};
employee.greet();
//# sourceMappingURL=lesson9.js.map