// var outer = function () {   // 외부함수
//   var a = 1;
//   var inner = function () { // 내부함수
//     console.log(++a);       // 내부에서 외부 함수의 변수 a를 참조
//   };
//
//   inner();
// };
//
// outer();

// var outer = function () {
//   var a = 1;
//   var inner = function () {
//     return ++a;
//   };
//
//   return inner(); // 실행 된 값 반환
// };
//
// var outer2 = outer();
// console.log(outer2); // 2
// console.log(outer());

// 5-3
// var outer = function () {
//   var a = 1;
//   var inner = function () {
//     return ++a;
//   };
//   return inner;
// };
//
// var outer2 = outer();   // inner
// console.log(outer2());  // inner() : 2
// console.log(outer2());  // inner() : 3

// 5-4 return 없이도 클로저가 발생하는 경우
// (function () {
//   var a = 0;
//   var intervalId = null;
//   var inner = function () {
//     if (++a >= 10) {
//       clearInterval(intervalId);
//     }
//     console.log(a);
//   };
//   intervalId = setInterval(inner, 1000);
// })();

// (function () {
//   var count = 0;
//   var button = document.createElement('button');
//   button.innerText = 'click2';
//   button.addEventListener('click', function () {
//     console.log(++count, 'time clicked');
//   });
//   document.body.appendChild(button);
// })();

// (function () {
//   var count = 0;
//   var btn = document.getElementById("test_btn");
//   btn.addEventListener('click', function () {
//     console.log(++count, 'time clicked');
//   });
// })();


// 5-5 클로저의 메모리 관리
// var outer = (function () {
//   var a = 1;
//   var inner = function () {
//     return ++a;
//   };
//   return inner;
// })(); // outer = inner
// console.log(outer());
// console.log(outer());
// outer = null; // 메모리 관리 GC 대상으로 만들기

// (function () {
//   var a = 0;
//   var intervalId = null;
//   var inner = function () {
//     if (++a >= 10) {
//       clearInterval(intervalId);
//       inner = null; // inner 식별자의 함수 참조를 끊음
//     }
//     console.log(a);
//   };
//   intervalId = setInterval(inner, null);
// })();

// (function () {
//   var count = 0;
//   var button = document.createElement('button');
//   button.innerText = 'click';
//
//   var clickHandler = function () {
//     console.log(++count, 'times clicked');
//     if (count >= 10) {
//       button.removeEventListener('click', clickHandler);
//       clickHandler = null; // clickHandler 식발자의 함수 참조를 끊음
//     }
//   };
//   button.addEventListener('click', clickHandler);
//   document.body.appendChild(button);
// })();

// 5-6 콜백함수와 클로저
var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');   // 공통코드

// 1
// fruits.forEach(function (fruit) {                     // A
//   var $li = document.createElement('li');
//   $li.innerText = fruit;
//   $li.addEventListener('click', function () {   // B
//     alert('your choice is ' + fruit);
//   });
//   $ul.appendChild($li);
// });
// document.body.appendChild($ul);

// 2
var alertFruit = function (fruit) {
  alert('your choice is ' + fruit);
};
//
// fruits.forEach(function (fruit) {
//   var $li = document.createElement('li');
//   $li.innerText = fruit;
//   $li.addEventListener('click', alertFruit);
//   $ul.appendChild($li);
// });
//
// document.body.appendChild($ul);
// alertFruit(fruits[1]);

// 3
// fruits.forEach(function (fruit) {
//   var $li = document.createElement('li');
//   $li.innerText = fruit;
//   $li.addEventListener('click', alertFruit.bind(null, fruit));
//   $ul.appendChild($li);
// });
//
// document.body.appendChild($ul);
// alertFruit(fruits[1]);

// 4 고차함수 이용
var alertFruitBuilder = function (fruit) {
  return function () {
    alert('your choice is ' + fruit);
  };
};

fruits.forEach(function (fruit) {
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', alertFruitBuilder(fruit));
  $ul.appendChild($li);
});
document.body.appendChild($ul);
