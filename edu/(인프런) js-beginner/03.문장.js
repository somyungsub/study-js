'use strict';

var a = 10;

// 디버깅할때
debugger;

console.log(a);

var k = 0;

do {
  console.log("do : ", k);
  k++;
} while (k < 3) {
  console.log("while : ", k); // 반복문 끝나고 실행 됨
}



