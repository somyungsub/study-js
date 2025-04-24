
/*
    function prototype 활용
    일단 1번은 실행되어야 캐시됨
 */

Function.prototype.memo = function () {
  const _this = this;
  const memo = {};
  
  return function () {
    const args = JSON.stringify(arguments);
    let result;
    if (memo.hasOwnProperty(args)) {
      return memo[args]; // 캐시 리턴
    } else {
      result = _this.apply(this, arguments);// 기본 최초 함수실행
      memo[args] = result; // 해당 입력값에 대한 결과값 캐싱
      return result;
    }
  };
};

function fibonacci(n) {
  if (n===0 || n===1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const testNum = 40;
var start, end;
start = Date.now();
fibonacci(testNum); // 대략 1초이상
end = Date.now();
console.log(`피보나치일반 ${((end - start) / 1000).toFixed(2)}s`);

start = Date.now();
fibonacci(testNum); // 대략 1초이상 동일
end = Date.now();
console.log(`피보나치일반 ${((end - start) / 1000).toFixed(2)}s`);

// 메모로 호출시
const fibonacciMemo = fibonacci.memo();
start = Date.now();
fibonacciMemo(testNum); // 대략 1초이상
end = Date.now();
console.log(`피보나치일반 ${((end - start) / 1000).toFixed(2)}s`);

start = Date.now();
fibonacciMemo(testNum); // 캐싱 0.01초 이내
end = Date.now();
console.log(`피보나치일반 ${((end - start) / 1000).toFixed(2)}s`);

start = Date.now();
fibonacciMemo(testNum+1); // 다른값 -> 대략1초이상
end = Date.now();
console.log(`피보나치일반 ${((end - start) / 1000).toFixed(2)}s`);
start = Date.now();
fibonacciMemo(testNum+1); // 캐싱 0.01초 이내
end = Date.now();
console.log(`피보나치일반 ${((end - start) / 1000).toFixed(2)}s`);
