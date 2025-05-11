import {testObject} from "./object-test.mjs";

// console.log(testObject.getAge());
// console.log(testObject.getName());
// testObject.getName = () => 'aaa'; // TypeError
// console.log(testObject.getName());

const a = {
  ...testObject
};

console.log(a.getAge());
console.log(a.getName());
a.getName =  ()=> '123';
console.log(a.getName());
console.log(testObject.getName());
