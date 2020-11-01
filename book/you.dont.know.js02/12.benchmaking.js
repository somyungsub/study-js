(function () {

  // 케이스1
  var x = [];
  for (var i = 0; i < 10; i++) {
    x[i] = "x";
  }

  // 케이스2
  var y = [];
  for (var i = 0; i < 10; i++) {
    y[y.length] = "x";
  }

  // 케이스3
  var z = [];
  for (var i = 0; i < 10; i++) {
    z.push("x");
  }
//
//   var suite = new Benchmark.Suite;
//
// // add tests
//   suite.add('RegExp#test', function() {
//     /o/.test('Hello World!');
//   })
//   .add('String#indexOf', function() {
//     'Hello World!'.indexOf('o') > -1;
//   })
//   .add('String#match', function() {
//     !!'Hello World!'.match(/o/);
//   })
//   // add listeners
//   .on('cycle', function(event) {
//     console.log(String(event.target));
//   })
//   .on('complete', function() {
//     console.log('Fastest is ' + this.filter('fastest').map('name'));
//   })
//   // run async
//   .run({ 'async': true });


  // 케이스1
  var x = false;
  var y = x ? 1 : 2;

  // 케이스2
  var x = undefined;  // var x; 이렇게 하지말 것
  var y = x ? 1 : 2;


  // 미시성능
  var foo = 41;
  (function () {
    (function () {
      (function (baz) {
        var bar = foo + baz;
        console.log(bar);
      })(1);
    })();
  })();

  function factorial(n) {
    if (n < 2) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  function factorial(n) {
    if (n < 2) {
      return 1;
    }

    var res = 1;
    for (var i = n; i > 1; i--) {
      res *= i;
    }
    return res;
  }

  factorial(5); // 120

  function foo2(x) {
    return x;
  }

  function bar(y) {
    return foo2(y + 1);  // 꼬리호출
  }

  function baz() {
    return 1 + bar(40); // 꼬리호출x
  }

  baz();


})();