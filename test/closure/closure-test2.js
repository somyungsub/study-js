function parent() {
  console.log("parent");
  function childFunction() {
    console.log("childFunction");
  }
  const childFunction2 = () => {
    console.log("childFunction2");
  }
  let childFunction3 = () => {
    console.log("childFunction2");
  }
  // return Object.freeze(
  //   {
  //     childFunction,
  //     childFunction2,
  //     childFunction3
  //   }
  // )
  return {
    childFunction,
    childFunction2,
    childFunction3
  }
}

const parent1 = parent();
parent1.childFunction();
parent1.childFunction2();
parent1.childFunction3();
console.log("parent1 : ", parent1)


parent1.childFunction = () => {
  console.log("change childFunction");
}
parent1.childFunction2 = () => {
  console.log("change childFunction2");
}
console.log("parent12 : ", parent1)
parent1.childFunction();
parent1.childFunction2();