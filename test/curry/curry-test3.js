const aop = (beforeFn) => (afterFn) => (fn) => {
  if (beforeFn) {
    beforeFn()
  }
  fn();
  if (afterFn) {
    afterFn();
  }
};

function before() {
  console.log("before");
}

function after() {
  console.log("after");
}

function open() {
  console.log("open");
}

aop(before)(after)(open);
aop(before)()(open);
aop()(after)(open);

console.log("=========");
const beforeAop = aop(before)();
beforeAop(open);

console.log("=========");
const afterAop = aop()(after);
afterAop(open);

console.log("=========");
const aroundAop = aop(before)(after);
aroundAop(open);

