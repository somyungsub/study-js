function test() {
  const name = 'sss';

  function getName() {
    console.log(this);
    return name;
  }

  function getThisName() {
    return this.name; // 리턴시 name 포함이면 보이지,, this는 날호출한놈~
  }

  function getThis() {
    return this
  }

  return {
    // name,
    getName,
    getThisName,
    getThis
  }
}

const test1 = test();
console.log(test1.getName());
console.log(test1.getThisName());
test1.name = '안뇽!';
console.log("세팅후 호출해보기 : ", test1.getThisName());

const {getThisName, getName, getThis} = test();
console.log(getName());
console.log(getThisName());
console.log(getThis());
// console.log(getThis().queueMicrotask(()=>{
//   console.log("하잉");
//   return '마이크로태스크 큐';
// }));