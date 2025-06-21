class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.data = [
      {name: "sso-1", age: 4},
      {name: "sso-2", age: 20},
      {name: "sso-3", age: 30},
      {name: "sso-4", age: 42},
      {name: "sso-5", age: 45},
    ]
  }

  // this 접근 확인
  testThisFunction() {
    this.data.forEach(function (item) {
      // console.log("this : ", this);
      if (this?.age === item.age) {
        console.log(item);
      }
    });
  }
  testThisFunction2() {
    const self = this;
    this.data.forEach(function (item) {
      // console.log("this : ", self);
      if (self?.age === item.age) {
        console.log(item);
      }
    });
  }

  // this 접근 확인
  testThisArrow() {
    this.data.forEach((item) => {
      // console.log("this : ", this);
      if (this.age === item.age) {
        console.log(item);
      }
    });
  }

  testThisArrow2() {
    const data = {

    }

    const aaaa2 = () => {

    }

    function aaaa1() {

    }
  }
}

const test1 = new User('sss', 30);
test1.testThisArrow();
console.log("=============")
// test1.testThisFunction();
test1.testThisFunction2();