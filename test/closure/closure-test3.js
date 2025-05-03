function useTest(name, age) {
  const state = {
    name, age
  }

  function getName() {
    return state.name;
  }

  function getAge() {
    return state.age;
  }

  function setName(name) {
    state.name = name;
  }

  function setAge(age) {
    state.age = age;
  }

  return {
    getName,
    getAge,
    setName,
    setAge,
  }
}

const useTest1 = useTest('sss', 20);
const useTest2 = useTest('sss2', 30);

console.log(useTest1)
console.log(useTest1.getName());
console.log(useTest2);
console.log(useTest2.getName());
console.log("==============");
useTest2.getName = function () {
  return "change!";
};
console.log(useTest1.getName());
console.log(useTest2.getName());
