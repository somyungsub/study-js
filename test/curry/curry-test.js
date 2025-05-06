const curryMinMax = function (fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
};

const minTest = curryMinMax(Math.min)(10);
console.log(minTest(20));   // 10
console.log(minTest(5));    // 5

const maxTest = curryMinMax(Math.max)(10);
console.log(maxTest(20)); // 20
console.log(maxTest(5));  // 10