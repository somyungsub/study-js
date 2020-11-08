var Person = function (name) {
  this.name = name;
};

Person.prototype.getName = function () {
  return this.name;
};

var suzi = new Person("Suzi");

console.log(suzi.__proto__.getName());            // undefined
console.log(Person.prototype === suzi.__proto__); // 같은 객체를 참조

console.log(suzi.getName());  // Suzi

// this 가 가르키는 객체가 다르기때문
// suzi.__proto__.getName() -> this : suzi.__proto__ 가 this
// suzi.getName() -> this : suzi 가 this
// suzi 는 function(name) , suzi.__proto__는 function(name)의 __proto__를 의미
// 따라서 suzi.__proto__에 name 프로퍼티가 없으므로 undefined가 반환 된거임

// name 프로퍼티를 할당한다면??
suzi.__proto__.name = 'SUZI__proto__';
console.log(suzi.__proto__.getName());  // -> SUZI__proto__ 출력됨, Suzi가 나오지 않음
console.log(suzi.getName());            // Suzi

var Constructor = function (name) {
  this.name = name;
};

Constructor.prototype.method1 = function () {
};

Constructor.prototype.property1 = 'Constructor Prototype Property';

Constructor.prototype.getName = function () {
  return this.name;
};

var instance = new Constructor('Instance');
console.dir(Constructor);
console.dir(instance);

console.log(Constructor.prototype.getName());
console.log(instance.getName());


// constructor
console.log("====================");
var NewConstructor = function () {
  console.log('this is new constructor!');
};

var dataTypes = [
  1,
  'test',
  true,
  {},
  [],
  function () {
  },
  /test/,
  new Number(),
  new String(),
  new Boolean(),
  new Object(),
  new Array(),
  new Function(),
  new RegExp(),
  new Date(),
  new Error()
];

dataTypes.forEach(function (d) {
  d.constructor = NewConstructor;
  console.log(d.constructor.name, '&', d instanceof NewConstructor);
});

console.log("================");
var Person2 = function (name) {
  this.name = name;
};

var p1 = new Person2('사람1');
var p1Proto = Object.getPrototypeOf(p1);
var p2 = new Person2.prototype.constructor('사람2');
var p3 = new p1Proto.constructor('사람3');
var p4 = new p1.__proto__.constructor('사람4');
var p5 = new p1.constructor('사람5');

[p1, p2, p3, p4, p5].forEach(function (p) {
  console.log(p, p instanceof Person2);
});

console.log(p1Proto);

Person2.prototype.getName = function () {
  return this.name;
};

var iu = new Person2('지금');

// 오버라이드
iu.getName = function () {
  return '바로 ' + this.name;
};

console.log(iu.getName());  // 바로 지금
console.log(p1.getName());  // 사람1
console.log(iu.__proto__.getName());  // undefined

iu.__proto__.name = '이 지금!';

console.log(iu.__proto__.getName());        // 이 지금!
console.log(iu.__proto__.getName.call(iu)); // 지금

