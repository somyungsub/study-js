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

// prototype 체인
var arr = [1, 2];
arr.push(3);
console.log(arr.hasOwnProperty(2));
console.log(arr.__proto__.__proto__.hasOwnProperty(2));

console.log(Array.prototype.toString.call(arr));
console.log(Object.prototype.toString.call(arr));
console.log(arr.toString());

arr.toString = function () {
  return this.join('_');  // 오버라이딩
};

console.log(arr.toString());      // 1_2_3

// Object.prototype에 메서드 추가 -> 객체인경우 해당 메서드를 전부사용가능
console.log("Object.prototype 메서드 추가");
Object.prototype.getEntries = function () {
  var res = [];
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      res.push([prop, this[prop]]);
    }
  }

  return res;
};

var data = [
  ['object', {a: 1, b: 2, c: 3}],
  ['number', 345],
  ['string', 'abc'],
  ['boolean', false],
  ['func', function () {}],
  ['array', [1, 2, 3]]
];

data.forEach(function (datum) {
  console.log(datum[1].getEntries());
});

// __proto__가 없는 객체 생성 (예외적 케이스, Object.prototype이 최상위에 존재하지 않게 할 경우)
var _proto = Object.create(null);
_proto.getValue = function (key) {
  return this[key];
};

var obj = Object.create(_proto);
obj.a = 1;
console.log(obj.getValue('a')); // 1
console.dir(obj);

// console.log(obj.toString());  // 에러 : obj.toString is not a function


// 생성자 함수와 인스턴스
var Grade = function () {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    this[i] = args[i];
  }

  this.length = args.length;
};

var g = new Grade(100, 80);
console.log(g);
// 다중 프로토타입 체이닝
// prototype을 Array.__proto__ (배열 인스턴스)에 연결
// -> 배멸 메서드도 사용이 가능해짐
Grade.prototype = [];
var g2 = new Grade(100, 80);
console.log(g2);
g2.pop()
console.log(g2);
g2.push(90);
console.log(g2);
