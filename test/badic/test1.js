const a = 1;

console.log(a);
console.log(a.toString());
console.log(a.toFixed(2));

const b = true;
console.log(b.valueOf());
console.log(b.toString());
console.log(typeof b);

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

function sum(a, b) {
  return a + b + 2;
}

console.log(sum(1, 2));


console.log((1).toFixed(2));
console.log(Number(10.1234).toFixed(2));

console.log(typeof Number(10.1234));

console.log(Number.prototype);
console.log(Number.constructor);
console.log(Number.constructor.prototype);
console.log(Object.constructor);
console.log(Object.prototype);

