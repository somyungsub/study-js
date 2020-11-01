(function () {

    // 강제변환 : 숫자형태의 문자열 -> 파싱
    var c = "3.14";
    var d = 5 + +c;
    console.log(d);

    console.log("========")
    var a = "Hello World";
    var number1 = a.indexOf("lo");
    console.log(number1);   // 3
    console.log(~number1);  // -4
    console.log(!~number1); // true(-4) -> false
    if (~a.indexOf("lo")) { // true(-4)
        console.log("찾음");
    }

    var number = a.indexOf("ol");
    console.log(number);    // -1
    console.log(~number);   // 0
    console.log(!~number);  // false(0) -> true
    if (!~a.indexOf("ol")) { // false(0)
        console.log("못찾음");
    }

    console.log("=====");
    console.log(Math.floor(-49.6));
    console.log(Math.floor(~~-49.6));
    console.log(~~-49.6);

    console.log("=====");
    // var a = 08;
    // var b = 09;
    var hour = parseInt(a);
    var minute = parseInt(b);
    console.log("The Time is : " + hour + ":" + minute);

    console.log(parseInt("42"));
    console.log(parseInt("42px"));
    console.log(parseInt("4s2px"));
    console.log(parseInt("a4s2px"));
    console.log(Number("42px"));
    console.log(Number("42"));


    console.log("=========");
    console.log(parseInt(1 / 0, 19));
    a = {
        num: 21,
        toString: function () {
            return String(this.num * 2);
        }
    };

    console.log(parseInt(a));

    // 강제변환 -> 불리언
    var a = "0";
    var b = [];
    var c = {};

    var d = "";
    var e = 0;
    var f = null;
    var g;

    // 강제변환
    console.log(Boolean(a));    // T
    console.log(Boolean(b));    // T
    console.log(Boolean(c));    // T

    console.log(Boolean(d));    // F
    console.log(Boolean(e));    // F
    console.log(Boolean(f));    // F
    console.log(Boolean(g));    // F

    var a = [
        1,
        function () {},
        2,
        function () {}
    ];

    console.log(JSON.stringify(a));
    console.log(JSON.stringify(a, function (k, v) {
        if (typeof  v == "function") {
            return !!v;
        } else {
            return v;
        }
    }));

    var a = 42;
    var b = a ? true : false;
    var c = !!a ? true : false;
    var d = Boolean(a) ? true : false;
    console.log(b);
    console.log(c);
    console.log(d);

    // 암시적 강제변환
    console.log("================");

    var a = "42";
    var b = "0";

    var c = 42;
    var d = 0;

    console.log(a + b);
    console.log(c + d);
    console.log(a + d);
    console.log(d + a);

    var a = [1, 2];
    var b = [3, 4];

    console.log(a + b);  // "1,2" +"3,4"


    console.log("===============");

    var a = {
        valueOf: function () {
            return 42;
        },
        toString: function () {
            return 4;
        }
    }

    console.log(a + "");        // a + ""    -> valueOf 수행 -> toString
    console.log(String(a));     // String(a) -> toString

    var a = "3.14";
    var b = a - 0;  // 문자열 "3.14" -> 3.14 숫자로 변경
    console.log(b);


    console.log("=================");


    var a = 42;
    var b = null;
    var c = "foo";

    console.log(a && (b || c));

    console.log(!a);    // 불리언 명시적 강제 변환 : 42 -> 변환 (true) -> !는 false로 변환 시킴
    console.log(!!a);   // 불리언 명시적 강제 변환 원위치 : false 후 -> 다시 원위치 (!!a)

    console.log("=================");
    var s1 = Symbol("좋아");
    console.log(String(s1));    // 명시적 형변환

    // var s2 = Symbol("구려");
    // console.log(s2 + "");       // 암시적 형변환  (에러 : TypeError)


    console.log("=================");
    console.log("42" == true);

    var e = NaN;
    console.log(Object(e));
    console.log(Object(e) == e);
    console.log(NaN == NaN);
    console.log(NaN == false);
    console.log(NaN == false);

    console.log("=================");
    console.log(Number(""));
    console.log(Number(" "));
    console.log(Number(" \n"));
    console.log(Number("\n"));

    console.log("=================");


    let symbol = Symbol();

    var a = {
        b: 42,
        f: function () {
            return 10;
        }
    };

    console.log(a.b);
    console.log(a.f());
    a.f = function () {

        return 20;
    };
    console.log(a.f());

    a.c = Symbol("50");
    console.log(a.c);
    console.log(typeof a.c);
    a.c = "50";
    console.log(a.c);

})();
