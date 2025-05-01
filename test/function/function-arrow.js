console.log(add);  // 함수선언문은 호이스팅 대상으로, 어디에서 선언하더라도, 호이스팅되며, 메모리 할당되어, 어디서든 접근가능
console.log(add(1,2));
function add(a, b) {
  return a + b;
}

console.log(add(3,4));

// 함수 표현식
console.log(addVar);  // var은 호이스팅 대상 -> 메모리는 변수할당되어 올라가 있지만 값할당이 안된상태로,
// addVar(1, 2);   // 함수실행 호출시 타입에러, is not a function
var addVar = (a, b) => a + b;

// console.log(addVar2); // ReferenceError -> 호이스팅 안되서 메모리할당안된상태, ReferenceError: Cannot access 'addVar2' before initialization
const addVar2 = (a, b) => a + b;


const recursive = (count) => {
  const size = 5;
  console.log("recursive : ", count);
  if (count < size) {
    count++;
    recursive(count);
  }
};
recursive(3);

const recursive2 = function (count) {
  const size = 5;
  console.log("recursive2 : ", count);
  if (count < size) {
    count++;
    recursive2(count);
  }
};
recursive2(4);

// 함수표현식 -> 기명함수 재귀
const recursive3 = function recurcive(count) {
  const size = 5;
  console.log("recursive3 : ", count);
  if (count < size) {
    count++;
    recurcive(count);
  }
};

recursive3(1);


// arguments
const argFunc = (a, b) => {
  console.log("argFunc : ", arguments);
  return a + b;
};
function argFunc2(a, b){
  console.log("argFunc : ", arguments);
  return a + b;
}

console.log("====== arguments");
console.log(argFunc(1, 2, 6));
console.log(argFunc2(4, 2, 5));


console.log(a);
var a = 10;
console.log(a);


const start = Date.now();
function factorial11(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial11(n - 1);
}

console.log(factorial11(50));
const end = Date.now();
console.log((end - start)/1000);


function test1() {
  console.log(this);
  return () => {
    console.log("리턴", this);
  }
}

test1()();


// test123();  //ReferenceError: test123 is not defined, -> 메모리조차 할당이 안되어서 못찾는것,, 정의가 되지 않았다
