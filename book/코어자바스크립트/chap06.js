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