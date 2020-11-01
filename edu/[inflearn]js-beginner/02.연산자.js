
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

// !연산자
console.log("===========");
var value6 = true;
console.log(!value6);
console.log(!!"A");

// 유니코드,이모지 www.unicode.org
// u숫자 형태 (u0031, ...)
// js -> \u0031
console.log("===========");
console.log("\u0031");
console.log("\u0041");
console.log("\u0051");
console.log("\uac01");

// 관계 연산자
// >, < >=, <=, instanceof, in
// String -> 유니코드 사전/등록순서 비교 or 문자하나씩 비교 앞에서
console.log("===========");
console.log((1 + 2) > 1);
console.log(("\u0033" > "\u0032"));
console.log("A" > "1");
console.log("가" > "다");
var value7;

console.log(value7 == null);
console.log(value7 === null);
console.log(value7 == undefined);
console.log(value7 === undefined);

// 콤마
console.log("===========");
var a = 1, b = 10;
console.log(a);
console.log(b);

// || 연산자
console.log("===========");
var value8, zero = 0, two = 2;
console.log(value8 || zero || two); // false || false || true -> 2반환

var result = value8 || zero || two;
console.log(result);

console.log(zero || value8);  // false || false -> 마지막 false 값 변환 -> undefined
console.log(value8 || zero);  // false || false -> 마지막 false 값 변환 -> 0

one = 1;
console.log(one === 1 || two === 2);  // true경우 true 반환
console.log(two === 2 || one === 1);  // true경우 true 반환
console.log(zero === 0 || two === 2); // true경우 true 반환


// && 연산자
console.log("===========");
one = 1, two = 2;
console.log(one && two);  // T && T -> 마지막 값 2 반환

console.log(one && zero && nine); // zero 0(false)로 인해 0 반환,
// console.log(one && two && nine);  // nine 변수 없으므로 에러 발생

// 조건연산자
console.log("===========");
console.log(1 === 1 ? "같음" : "다름");
console.log(1 === "1" ? "같음" : "다름");

// 연산자 우선순위
// MDN 참조 -> 연산자 우선순위


