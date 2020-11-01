(function () {

  // 기본 바인딩
  console.log("====== 기본 바인딩 ======");
  function foo() {
    console.log(this.a);  // 함수 자신 아님, this = global
  }
  var a = 2;
  foo();  // undefined

  // 암시적 바인딩
  console.log("====== 암시적 바인딩 ======");
  function foo2() {
    console.log(this.a);  // this = obj
  }

  var obj2 = {
    a: 42,
    foo2: foo2
  };

  var obj = {
    a: 4,
    foo2: foo2,  // obj.foo2 = foo2
    obj2: obj2
  };

  obj.foo2(); // 4
  obj.obj2.foo2();  // 42

  var bar = obj.foo2;
  var a = "전역쓰~";
  bar();  // undefined -> 이때 호출은 그냥 foo2 호출가 동일해지면서 기본바인딩 적용 : this = global

  // 명시적 바인딩
  console.log("====== 명시적 바인딩 ======");
  function foo3() {

    console.log(this.a);  // this = obj3
  }
  var obj3 = {
    a: 30
  };

  foo3.call(obj3); // 30 (obj3 명시)

  // 하드 바인딩
  console.log("====== 하드 바인딩 ======");
  function foo4() {

    console.log(this.a);
  }
  var obj33 = {
    a: 25
  };

  var bar = function () {
    foo.call(obj33);  //  하드바인딩
  };
  bar();  //25


  // new 바인딩
  console.log("====== new  바인딩 ======");
  function foo44(a) {

    this.a = a;   // this -> 새로 생성된 객체를 가르킨다  this = bar
  }
  var bar = new foo44(22);

  console.log(bar.a); // 22 : this = bar (new for44-> 새객체(함수) 생성 -> bar에 바인딩)


  // this 무시
  console.log("====== this 무시 ======");
  function foo55() {
    console.log(this.a55);
  }

  var a55 = 2;
  foo55.call(null); // this 무시  : this -> global
  foo55.call(a55);  // ??




  // 에로우 함수의 this -> 전역객체를 따른다 -> 사용하지말자
  console.log("======= 에로우 함수 =======");
  function foo5() {
    return (a) => {
      console.log(this.a);
    };
  }

  var obj = {a: 1};
  var obj2 = {a: 2};

  var bar = foo5.call(obj);
  bar.call(obj2);

  // setTimeout에서의 에로우 함수 this 활용한 꼼수
  function foo6() {
    setTimeout(() => {
      console.log(this.a);
    }, 100);
  }

  var obj3 = {a: 3};
  foo6.call(obj3);


  // var self = this를 활용한 꼼수
  function foo7() {
    var self = this;
    setTimeout(function () {
      console.log(self.a);
    },100);
  }

  var obj4 = {a: 4};
  foo7.call(obj4);

})();