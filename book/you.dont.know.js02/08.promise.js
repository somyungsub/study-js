(function () {
  function add(xPromise, yPromise) {
    return Promise.all([xPromise, yPromise])
                  .then(function (values) {
                    return values[0] + values[1];
                  });
  }

  add(fetchX(), fetchY())
  .then(function (sum) {
    console.log(sum);
  });

  function foo(x) {
    // 뭔가 시간이 제법걸리는 일 시작
    // 프라미스르 생성하여 반환
    return new Promise(function (resolve, reject) {
      // 결과적으로 'resolve(), reject()'
      // 중 한쪽을 호출하게 되고 이들은 프라미스의 귀결 콜백함수 역할을 한다

    });
  }

  var p = foo(42);
  bar(p);
  baz(p);

})();