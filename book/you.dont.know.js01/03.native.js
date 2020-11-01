(function () {
    var a = new String("abc");  // String 함수 실행 -> 함수도 객체
    console.log(a); // [String: 'abc']
    console.log(a.toString());  // abc
    console.log(typeof a);  // object

    // String()은 Object 하위 클래스 같은 개념
    console.log(a instanceof String);   // true
    console.log(a instanceof Object);   // true

    console.log(Object.prototype.toString.call(a));
    console.log("============");

    var b = String("abc");

    console.log(b);         // abc
    console.log(b.toString());  // abc
    console.log(typeof b);      // string
    console.log(Object.prototype.toString.call(b));

    console.log(Object.prototype.toString.call("aasd"));        // [object String]
    console.log(Object.prototype.toString.call(1234));          // [object Number]
    console.log(Object.prototype.toString.call(true));          // [object Boolean]
    console.log(Object.prototype.toString.call(/.*abc.*/i));    // [object RegExp]
    console.log(Object.prototype.toString.call(function () {
    }));// [object Function]
    console.log(Object.prototype.toString.call({}));            // [object Object]
    console.log(Object.prototype.toString.call([]));            // [object Array]
    console.log(Object.prototype.toString.call(new Date()));           // [object Date]
    console.log(Object.prototype.toString.call(null));          // [object Null]
    console.log(Object.prototype.toString.call(undefined));     // [object Undefined]


    var a = new Array(3);       // 크기 3을 지정
    console.log(a.length);
    console.log(a);
    var a = Array(3);       // 크기 3을 지정
    console.log(a.length);
    console.log(a);

})();