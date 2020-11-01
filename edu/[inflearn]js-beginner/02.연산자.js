
console.log("===========");
console.log(10 + "20");   // 문자연결로 됨 -> 1020
console.log(10 - "20");   // 10-20
console.log(10 / "20");   // 10/20
console.log(10 * "20");   // 10*20


console.log("===========");
console.log(0 / 0);
console.log(0 / 1);
console.log(1 / 0);
console.log(-1 / 0);


console.log("===========");
console.log(2.3 * 3);
console.log(2.3 * 3 * 10 / 10);

console.log("===========");
console.log(5 % 2.5);
console.log(5 % 2.3);
console.log((5 * 10 - (2 * 2.3 * 10)) / 10);

console.log("===========");
var value3 = "7";
console.log(typeof value3);
console.log(typeof +value3);
console.log(typeof Number(value3));
console.log(value3);
console.log(+value3);
console.log(Number(value3));
console.log(typeof -value3);

console.log(typeof Number(value3));
console.log(-value3);
console.log(8 + (-value3));
console.log(Number(-value3));

console.log("===========");
var one = 1;
console.log(one++);
var value4 = one++ + 3;
console.log(value4);
console.log(one);

var one2 = 1;
console.log(++one2);
var value5 = ++one2 + 3;
console.log(value5);
console.log(one2);


