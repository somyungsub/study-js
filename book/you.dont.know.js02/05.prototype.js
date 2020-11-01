(function () {

  var myObj = {
    a: 2
  };
  console.log(myObj.a);

  var anotherObj = {
    a: 2,
    foo:"bar2"
  };

  var myObj2 = Object.create(anotherObj); // anotherObj의 정보를 -> myObj2의 __proto__에 주입
  console.log(anotherObj.a);
  console.log(myObj2.a);      // myObj2.a -> prototype 까지 탐색하여 발견 된 데이터 (another.a임)
  console.log("===== TEST ======");
  for (var k in myObj2) {
    console.log(k + " 발견 !!");

  }
  myObj2.foo = 12;
  console.log(myObj2.foo);


  console.log(anotherObj.hasOwnProperty("a"));  // true
  console.log(myObj2.hasOwnProperty("a"));      // false : myObj2에는 a가 없음

  anotherObj.a = 20;  // myObj2도 변경됨 -> myObj2.a는 anotherObj.a의 레퍼런스와 연결되어 있기 때문
  myObj2.a++; // 암시적 가려짐 발생 : prototype -> Get : a -> myObj2.a = another + 1 ;

  console.log(anotherObj.a);
  console.log(myObj2.a);


  // new 키워드
  console.log("================ new 키워드~! ================")

  function Foo() {
    console.log("Foo~");
  }

  var a = new Foo();

  console.log(Foo.prototype.constructor === Foo);
  console.log(a.constructor === Foo);

  function Foo2(name) {
    this.name = name; // 이부분 세팅과정?  name 프로퍼티 찾기 [Get] -> 없으면 undefined 뱉어내겠지?
    this.name2;       // 이부분? -> 못찾아서 undefined
  }

  Foo2.prototype.myName = function () {
    return this.name;
  };

  var a2 = new Foo2("a2");
  var b2 = new Foo2("b2");

  console.log(a2.myName());
  console.log(b2.myName());
  console.log(a2.name2);    // 추가로 해봄 : undefined

  // 바꿔보기
  Foo2.prototype.myName = function () {
    return this.name2 || this.constructor.name;
  };
  console.log("바꾼다음 예상  해보기"); // 객체가 연결되어 있음
  console.log(a2.myName());       // 변경된 내용으로 출력됨 : Foo2
  console.log(b2.myName());       // 변경된 내용으로 출력됨 : Foo2


  // prototype 객체 삽입
  console.log("========= =")

  function Foo3() {

  }

  Foo3.prototype = {};

  var a3 = new Foo3();  // prototype의 방향
  console.log(a3.constructor === Foo3);
  console.log(a3.constructor === Object);


  // 5.4 객체링크
  console.log("5.4 객체링크 !");
  var foo4 = {
    something: function () {
      console.log("뭔가 대단한 걸 보여주어어어~");
    }
  };

  var bar = Object.create(foo4);  // bar.prototype?

  console.log(bar.prototype === foo4);
  console.log(bar === foo4);
  bar.something();


  var anotherObject = {
    cool: function () {
      console.log("good~!");
    }
  };

  var myObj5 = Object.create(anotherObject);
  myObj5.cool();

  myObj5.doCool = function () {
    this.cool();  // cool에 위임
  };
  myObj5.doCool();

})();