// 의미하는바는??
// F 를만들고, 프로토타입 체인으로 엮어서 생성자에서 참고하도록함. 그리고 function F를 반환하여 사용하도록 F 인스턴스 생성
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

const obj = {
  name: 'sss',
  age: 10,
  getName() {
    return this.name;
  },
}
const f = object(obj);

console.log(f);
console.log(f.prototype);
console.log(f.constructor);
console.log("=============");
console.log(obj);
console.log(obj.prototype);
console.log(obj.constructor);
console.log("=============");
console.log(f.getName());
console.log(f.name);
console.log(f.age);
f.name = '이름변경';
// 속성추가,, 상위 F-> obj는 전부 접근가능 (prototype chain)
f.childName = '자식이름';
f.getChildName = function () {
  return this.childName
};
console.log(f.getName());
console.log(f.name);
console.log(f.age);
console.log(f.getChildName());
console.log(f.childName);
