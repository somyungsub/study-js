function fibonacci(n) {
  if (n===0 || n===1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMemo() {
  return function (n) {
    let result = fibonacciMemo.memo[n];
    if (typeof result === 'number') {
      result = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
      fibonacciMemo.memo[n] = result;
    }
    return result;
  };
}

fibonacciMemo.memo = [0, 1];
const testNum = 40;
var start, end;
start = Date.now();
fibonacci(testNum); // 대략 1초이상
end = Date.now();
console.log(`피보나치일반 ${((end - start) / 1000).toFixed(2)}s`);

start = Date.now();
fibonacciMemo(testNum); // 대략 0.01초 이내
end = Date.now();
console.log(`피보나치메모 ${((end - start) / 1000).toFixed(2)}s`);