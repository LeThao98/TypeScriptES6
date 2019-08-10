//default value for parameter of funciton

let rate = () => 1.4;
var getBonus = function(value = 1, tax = 3, salary = value * rate()) {
  console.log(
    value + tax + " || arguments: " + arguments.length + " || salary: " + salary
  );
};

getBonus();
getBonus(10, 20);
getBonus(5);
getBonus(undefined, 9);
getBonus(3, 9,6);
