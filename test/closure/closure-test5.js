function useTest(name, age) {
  function UseTestProto() {
    this.state = { name, age };
  }

  UseTestProto.prototype.getName = function () {
    return this.state.name;
  };
  UseTestProto.prototype.setName = function (name) {
    this.state.name = name;
  };
  UseTestProto.prototype.getAge = function () {
    return this.state.age;
  };
  UseTestProto.prototype.setAge = function (age) {
    this.state.age = age;
  };

  return new UseTestProto();
}


const useTest1 = useTest('sss', 20);
const useTest2 = useTest('sss2', 30);

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