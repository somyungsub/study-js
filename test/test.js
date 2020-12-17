function test(money) {
  let index = money.indexOf("만");
  console.log(index);
  if (index > 0 && money.length > 3) {
    // console.log(money);
    // console.log(money.length);
    let firstNumber = money.charAt(0);
    console.log(money.length === 5 ? firstNumber + "천만" : firstNumber + "백만");
  }
}

let arr = ["1억", "5000만", "3000만", "200만", "50만", "10만", "만"];

arr.forEach(value => test(value));

var g = new (function () {
  function Test(a,b) {
    this.a = a;
    this.b = b;
  }

  Test.prototype.init = function () {
    console.log(this.a);
    console.log(this.b);
  };

  return Test;
}())(10,20);

// var b = new g(10, 20);

// b.init();

g.init();

let obj = {
  "a" : 10,
  "b" : 20
}

let obj2 = []
console.log(Object.values(obj));
console.log(Object.keys(obj));

obj2.key = Object.keys(obj);
obj2.value = Object.values(obj);

console.log(obj2);

console.log(Array.from(obj));

let t = Object.entries(obj).map((value,index, array) => {
  return {
    key: value[0],
    key2: value[1],
    key3: array
  }
});

console.log(t);
const sp = [{...obj}];
console.log(sp);

