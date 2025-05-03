console.log(this);
this.value = 100;

const obj = {
  value: 1,
  func1: function() {
    this.value++;
    console.log("func1 call - this.value : ", this.value);

    func2 = function() {
      this.value++;
      console.log("fun2 call - this value : ", this.value);

      func3 = function() {
        this.value++;
        console.log("fun3 call - this value : ", this.value);
      }
      func3();
    }
    func2();
  }
}
console.log(this.value);
obj.func1();

const obj2 = {
  value: 2,
  func1: function() {
    this.value++;
    console.log("func1 call - this.value : ", this.value);

    func2 = () => {
      this.value++;
      console.log("fun2 call - this value : ", this.value);

      const func3 = () => {
        this.value++;
        console.log("fun3 call - this value : ", this.value);
      }
      func3();
    }

    func2();
  }
}
obj2.func1();

const outer = {
  name: 'outer',
  inner: () => {
    console.log(this.name);
    const innerInner = () => {
      console.log("22 ? :", this.name);
    }
    innerInner();
  }
};
outer.inner();

console.log("======");
function outerTest() {
  this.name = "outerTest";
  console.log("============== this ", this);

  outer.inner();
}
outerTest();

console.log("======");
(function outerTest() {
    this.name = "outerTest";
    outer.inner();
  }
)();

console.log("======");
(function outerTest() {
  console.log("============== this ", this);
  this.name = "outerTest2";
  const outer = {
    name: 'outer',
    inner: () => {
      console.log(this.name);
      const innerInner = () => {
        console.log("22 ? :", this.name);
      }
      innerInner();
    }
  };
  outer.inner();
})();

