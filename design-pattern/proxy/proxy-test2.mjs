import {Car, wrapObject} from "./proxy-module.mjs";

const testCar = {...Car};

wrapObject(testCar, function (func) {
  console.log(`${func.name} invoked!!!!`);
  func.apply(this, Array.prototype.slice.call(arguments, 1)); // beep, bark, accelerate
});

testCar.accelerate();
testCar.bark();
testCar.beep();
