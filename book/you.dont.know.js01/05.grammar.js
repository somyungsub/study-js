(function f() {
    console.log([] + {});   // [object Object]
    console.log({} + []);   // [object Object]

    function getData() {
        return {
            a: 42,
            b: "foo"
        }
    }

    var {a, b} = getData();
    console.log(a, b);

    var res = getData();
    console.log(res);
    console.log(res.a);
    console.log(res.b);


    function foo({a, b, c}) {
        console.log(a, b, c,);

    }

    foo({
        c: [1, 2, 3],
        a: 42,
        d: "foo"
    });

    console.log("====연산자 우선순위====");
    var a = 42;
    var b = "foo";
    var c = false;
    var d = a && b || c ? c || b ? a : c && b : a;
    console.log(d); // 결과 ?


    console.log("========함수 인자=========");
    function foo2(a) {
        console.log(a + arguments[3]);
    }

    foo2(22, 32, 20);

    console.log("=====try~finally=====");


    for (let i = 0; i < 10; i++) {
        try{
            console.log(i);
            continue;
        } finally {

            console.log("finally : " + i);
        }
        console.log("출력 안됨!");

    }

    function foo3() {
        try{
            return 42;
        } finally {
            throw "어이쿠!";
        }
        console.log("실행 ㄴ");

    }

    console.log(foo3());


})();