import {wrap} from "./proxy-module.mjs";

function existingFunc() {
  console.log(">>>> existingFunc");
  console.log(arguments);
}

const wrappedFunction = wrap(existingFunc, function (func) {
  console.log(">>>>>>>>> wrappedFunction");
  console.log(arguments);
  func.apply(this, Array.prototype.slice.call(arguments, 1));
});

console.log("1. existingFunc");
existingFunc("first", "second");

console.log("2. wrappedFunction");
wrappedFunction("first", "second");
