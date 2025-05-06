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
