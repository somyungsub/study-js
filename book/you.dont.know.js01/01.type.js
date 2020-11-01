(function () {
    let a = function () {
    };

    if (0) {    // F
        console.log("0");
    }
    if (1) {    // T
        console.log("1");
    }
    console.log(typeof a);
    console.log(typeof []);
    console.log(typeof {});
    console.log(typeof "");
    console.log(typeof 1);
    console.log(typeof true);
    console.log(typeof null);
    console.log(typeof undefined);

    let b = null;

    if (!b) {
        console.log("true");
    }

    if (b == null) {
        console.log("true");
    }

    if (!b && typeof b === 'object') {
        console.log("true");
    }

    console.log("=============");

    let a2;
    console.log(typeof a2);

    let b2 = 42;
    let c;

    b2 = c;  // b에 undefined 할당

    console.log(typeof b2);  //undefined
    console.log(typeof c);  //undefined
    // console.log(d); // unclared

    // if(DEBUG){
    //     console.log("error");
    // }


})();