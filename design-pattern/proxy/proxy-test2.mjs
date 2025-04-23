import {wrap} from "./proxy-module.mjs";

const car = {
  beep() {
    console.log("call >> beep!!!!");
  },
  bark() {
    console.log("call >> bark!!!!");
  },
  accelerate() {
    console.log("call >> accelerate!!!!");
  }
};


function wrapObject(obj, wrapper) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === "function") {
      obj[key] = wrap(obj[key], wrapper);
    }
  }
}

wrapObject(car, function (func) {
  console.log(`${func.name} invoked!!!!`);
  func.apply(this, Array.prototype.slice.call(arguments, 1)); // beep, bark, accelerate
});

car.accelerate();
car.bark();
car.beep();