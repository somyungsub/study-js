const stateMap = new WeakMap();
// const sharedMap = {
//   getName() {
//     return stateMap.get(this).name;
//   },
//   setName(name) {
//     stateMap.get(this).name = name;
//   },
//   getAge() {
//     return stateMap.get(this).age;
//   },
//   setAge(age) {
//     stateMap.get(this).age = age;
//   }
// }

// function useTest(name, age) {
//   const instance = Object.create(sharedMap);
//   const state = {
//     name, age
//   }
//   stateMap.set(instance, state);
//   return instance
// }

function getName(state) {
  return () => state.name;
}

function getAge(state) {
  return () => state.age;
}

function setName(state) {
  return (name) => state.name = name;
}

function setAge(state) {
  return (age) => state.age = age;
}
function useTest(name, age) {
  const state = {
    name, age
  }
  return {
    getName: getName(state),
    setName: setName(state),
    getAge: getAge(state),
    setAge: setAge(state)
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
