(function () {

  function foo(num) {
    console.log("foo : " + num);
    this.count++; // 이부분 -> global or foo
    console.log(this.count);
  }

  foo.count = 0;
  var i;
  for (i = 0; i < 10; i++) {
    if (i > 5) {
      // foo(i); // 아래 0나옴
      foo.call(foo, i); // 아래 4나옴
    }
  }
  console.log(foo.count); // 0, 4


  console.log("==========");

  function foo2() {
    var a = 2;
    // this.bar();
    bar();  // -> this : global
  }

  function bar() {
    console.log("bar" + this.a);  // undefined?

  }

  foo2();  // 참조 에러

})();