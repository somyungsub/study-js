(function () {
    var a = [];
    a[0] = 2;
    a[2] = 3;   //  a[1] = ? -> undefined
    console.log(a);
    console.log(a.length);  // 3
    delete a[0];            // undefined : 공간은 차지
    console.log(a);
    console.log(a.length);  // 3

    console.log(typeof a[0]);
    console.log(typeof a[1]);
    console.log(typeof a[2]);

    console.log("==========");

    var a = [];
    a[0] = 1;
    a["foobar"] = 2;    // 프로퍼티로 들어감
    console.log(a);     // [ 1, foobar: 2 ]
    console.log(a.length);  // 1
    console.log(a.foobar);  // 2
    console.log(a[1]);      // undefined

    var b = [];
    b["13"] = 42;           // b[13] = 42와 동일 : 0~12 undefined 로 설정
    console.log(b);         // [ <13 empty items>, 42 ]
    console.log(b.length);  // 14

    console.log("===== 배열 =====");
    var a = "foo";
    var b = ["f", "o", "o"];
    console.log(a.length);
    console.log(b.length);
    console.log(a.indexOf("o"));
    console.log(b.indexOf("o"));

    var c = a.toUpperCase();
    console.log(c);
    console.log(a === c);

    b.push("!");
    console.log(b);

    var c = Array.prototype.join.call(a, "-");
    console.log(c);
    var d = Array.prototype.map.call(a, function (v) {
        return v.toUpperCase() + ".";
    }).join("");
    console.log(d);
    console.log(a.split("").reverse().join(""));

    console.log("===== 숫자 ======");
    var a = 0.2;
    var b = 0.3;
    console.log(b - a);   // 정확한 0.1 안나옴
    console.log(b + a);   // 정확한 0.1 안나옴

    console.log(Number.isInteger(42));
    console.log(Number.isInteger(42.00));
    console.log(Number.isSafeInteger(42.00));


    console.log("===== void 연산자 =====");
    var a = 42;
    console.log(void a, a); // a에는 영향을 안미침

    console.log("======= NaN =========");
    var a = 2 / "foo"; // NaN
    console.log(a);
    console.log(typeof a);
    console.log(NaN);
    console.log(typeof NaN);

    console.log(a == NaN);  // false
    console.log(a === NaN); // false  개소름..?

    console.log(isNaN(a));  // true
    console.log(isNaN("foo"));          // true
    console.log(Number.isNaN("foo"));;  // false

    console.log("======= -0, +0 =========");
    var a = 0 / -3;
    var b = 0 / 3;
    console.log(a); // -0
    console.log(b); // 0
    console.log(a == b); // true

    console.log(a.toString());      // 0
    console.log(String(a));         // 0
    console.log(JSON.stringify(a)); // 0

    console.log(+"-0");
    console.log(Number("-0"));
    console.log(JSON.parse("-0"));

    function isNegZero(n) {
        n = Number(n);
        return n === 0 && (1/n === -Infinity);
    }

    console.log(isNegZero(-0));
    console.log(isNegZero(0 / -3));
    console.log(isNegZero(-0 * 11));
    console.log(isNegZero(0));

    console.log("======= Object.is() ========");

    var a = 2 / "foo";    // NaN
    var b = -3 * 0;       // -0
    console.log(Object.is(a, NaN));         // true
    console.log(Object.is(b, -0));   // true
    console.log(Object.is(b, 0));    // false


    var a = [1, 2, 3];
    function testArr(x) {
        x.push(4);

        x.length = 0;
        x.push(4, 5, 6, 7);
    }

    testArr(a);
    console.log(a);
    console.log(a.slice());


})();