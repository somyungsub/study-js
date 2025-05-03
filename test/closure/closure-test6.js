// 로직구현이 불가함
class UseTest {
  constructor(name, age) {
    this.state = { name, age };
  }

  getName() {
    return this.state.name;
  }

  setName(name) {
    this.state.name = name;
  }

  getAge() {
    return this.state.age;
  }

  setAge(age) {
    this.state.age = age;
  }
}
const useTest1 = new UseTest('sso', 30);
const useTest2 = new UseTest('sss2', 25);


console.log(useTest1)
console.log(useTest1.getName());
console.log(useTest2);
console.log(useTest2.getName());
console.log("==============");
useTest2.getName = function () {
  return this.state.name + " change!";
};
console.log(useTest1.getName());
console.log(useTest2.getName());
console.log("=================2");
console.log(useTest1.constructor.prototype);
console.log(useTest2.constructor.prototype);

console.log(Object.getOwnPropertyNames(useTest1.constructor.prototype));
console.log(Object.getOwnPropertyNames(useTest2.constructor.prototype));
console.log(Object.getOwnPropertyNames(useTest1));
console.log(Object.getOwnPropertyNames(useTest2));
useTest1.constructor.prototype.getName = function () {
  return this.state.name + " all Change";
}
console.log("==============3");
console.log(useTest1.getName());
console.log(useTest2.getName());

useTest1.setName('useTest1 sss1');
useTest2.setName('useTest2 sss2');

console.log(useTest1.getName());
console.log(useTest2.getName());
