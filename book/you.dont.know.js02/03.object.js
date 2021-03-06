(function () {

  ///////////////////// 객체 ////////////////////

  // 리터럴 방식
  var myObj = {
    key: "value"
  };

  // 생성자 -> 단점 프로퍼티로 key-value를 설정해야하는 번거로움...
  var myObj2 = new Object();
  myObj2.key = "value";

  // 내장객체 - >함수 (네이티브)
  var strPrimitive = "나는 문자열쓰~";
  console.log(typeof strPrimitive); // "string"
  console.log(strPrimitive instanceof String);    // false  -> strPrimitive 는 원시값이다
  console.log(strPrimitive instanceof Object);    // false  -> strPrimitive 는 원시값이다
  console.log(strPrimitive instanceof Function);  // false  -> strPrimitive 는 원시값이다

  var strObject = new String("문자열 객체~");
  console.log(typeof strObject);            // object
  console.log(strObject instanceof String); // true -> strObject는 new에 의해 래핑된 객체타입 이자 String 네이티브 내장함수 타입

  console.log(Object.prototype.toString.call(strObject)); // [object String]  -> 생성자에 의해 만들어진 스트링객체


  console.log(42.359.toFixed(2));


  // Date -> 리터럴이 없어서 반드시 생성자로

  var date = new Date();
  console.log(date);


  // 프로퍼티 접근, 키 접근
  var obj = {
    a: 2,
    b: 3,
    c: 4
  };

  console.log(obj.a);    // 프로퍼티 접근
  console.log(obj["a"]); // 키접근

  // obj.ab!! (문법에러)
  obj["ab!!"] = "abc!";     // 가능
  console.log(obj["ab!!"]); // abc!

  // 키값 계산 가능
  var temp = "root";
  obj[temp + 1] = "root11";
  console.log(obj[temp + 1]); // root11


  // 프로퍼티 vs 메서드
  function foo4() {
    console.log("foo");
  }

  // 객체 내부 함수는 메서드? -> 함수레퍼런스를 가지고 사용 가능 귀속되지 않게 할수 있다정도로 생각할 수 있겠다
  var someFoo = foo4; // foo4에 대한 변수 레퍼런스
  var myObj4 = {
    someFoo: foo4
  }

  foo4;
  someFoo;
  myObj4.someFoo;


  var myObj5 = {
    foo: function () {
      console.log("foo");
    }
  };

  var someFoo = myObj5.foo;
  console.log(someFoo);
  console.log(myObj5.foo);


  /////////////////// 배열 //////////////////
  var array = [1, "ㅎ", "42", 2];
  array["5"] = "ㅠㅠㅠ";        // 숫자키 -> 배열에서 인덱스로..
  console.log(array.length);  // 6
  console.log(array[4]);      // undefined
  console.log(array[5]);      // ㅠㅠㅠ

  // 객체(참조)복사 -> 깊은, 얕은
  var anotherArray = [];
  var anohterObject = {a: 5};
  var anotherFunction = function () {
    console.log("55");
  };

  var myObject = {
    a: 2,
    b: anohterObject,
    c: anotherArray,  // 환형참조
    d: anotherFunction
  };
  anotherArray.push(anohterObject, myObject);
  console.log(anotherArray);

  // JSON -> 환형참조 에러
  // var json = JSON.parse(JSON.stringify(myObject));
  // console.log(json);

  // 얕은복사 -> ES6 (assign 함수)
  var copy = Object.assign({}, myObject);
  console.log(copy);


  // 프로퍼티 서술자 -> 읽기 전용 등 프로퍼티 특성 체킹
  console.log("============= 프로퍼티 서술자 =============")
  console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
  console.log(Object.getOwnPropertyDescriptor(myObject, "b"));
  console.log(Object.getOwnPropertyDescriptor(myObject, "c"));
  console.log(Object.getOwnPropertyDescriptor(myObject, "d"));


  // 불변성 -> 객체상수, 확장금지, 봉인, 동결
  var obj = {a: 2};

  Object.preventExtensions(obj);    // 확장금지
  obj.a = 3;
  obj.b = 4;  // 확장안됨
  console.log(obj);

  Object.seal(obj);                 // 봉인 (묶기)
  Object.freeze(obj);               // 동결 (가장 높은 불변성)


  // Get 내부연산수행
  var obj = {a: 2};
  console.log(obj.a);
  console.log(obj.b); // Get 연산수행 -> undefined 반환


  // Getter / Setter
  var obj2 = {
    get a() {
      return this._a_;
    },
    set a(val) {
      this._a_ = val * 2;
    }
  }

  console.log(obj2.a);
  obj2.a = 2;
  console.log(obj2.a);


  // 프로퍼티 존재확인
  var myObject = {
    a: 2
  };

  console.log(("a" in myObject));
  console.log(("b" in myObject));

  console.log(myObject.hasOwnProperty("a"));
  console.log(myObject.hasOwnProperty("b"));

  // 열거 -> 프로퍼티 서술자 enumerable : true 필요 / false 인 경우 순회대상에서 제외 됨
  console.log(myObject.propertyIsEnumerable("a"));


  console.log("========= 순회 ==========");

  // 전통 순회 for
  var arr = [1, 2, 3];
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  // Java foreach 문과 같은 내용 -> 값순회
  for (var number of arr) {
    console.log(number);
  }

  // 키값 순회 or 배열인덱스
  for (var arrKey in arr) {
    console.log(arrKey);
  }

  var iterFunction = arr[Symbol.iterator]();  // iterater 함수
  console.log(iterFunction.next());
  console.log(iterFunction.next());
  console.log(iterFunction.next());
  console.log(iterFunction.next());
  console.log(iterFunction.next());


})();