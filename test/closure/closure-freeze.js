class UseTest {
  #state;

  constructor(name, age) {
    this.#state = Object.freeze({ name, age });
  }

  getName() {
    return this.#state.name;
  }

  setName(name) {
    this.#state = {
      ...this.#state,
      name,
    }
  }

  getAge() {
    return this.#state.age;
  }

  setAge(age) {
    this.#state = {
      ...this.#state,
      age,
    }
  }

  static isNumber(value) {
    return typeof value === 'number';
  }
}

function useTest(name, age) {
  return Object.freeze(new UseTest(name, age));
}

const useTest1 = useTest('sso', 30);
const useTest2 = useTest('sss2', 25);

// 오류는 안나지만, 변경은 안됨
useTest1.state = { name: 'change' };
// useTest1.state.name = 'aaaa';
useTest2.getName = function () {
  return this.state.name + " change!";
};
console.log("데이터 : ", useTest1.state)

console.log(useTest1);
console.log(useTest1.getName());
console.log(useTest2);
console.log(useTest2.getName());
console.log("==============");

console.log(useTest1.getName());
console.log(useTest2.getName());
console.log("=================2");
console.log(useTest1.constructor.prototype);
console.log(useTest2.constructor.prototype);

console.log(Object.getOwnPropertyNames(useTest1.constructor.prototype));
console.log(Object.getOwnPropertyNames(useTest2.constructor.prototype));
console.log(Object.getOwnPropertyNames(useTest1));
console.log(Object.getOwnPropertyNames(useTest2));
// useTest1.constructor.prototype.getName = function () {
//   return this.state.name + " all Change";
// }
console.log("==============3");
console.log(useTest1.getName());
console.log(useTest2.getName());

useTest1.setName('useTest1 sss1');
useTest2.setName('useTest2 sss2');

console.log(useTest1.getName());
console.log(useTest2.getName());

console.log("===================4 추가");
UseTest.prototype.getName2 = function () {
  return " getName2 추가!!";
}

console.log(useTest1.getName2());
console.log(useTest2.getName2());


console.log(UseTest.isNumber(useTest1.getName()));
console.log(UseTest.isNumber(useTest1.getAge()));